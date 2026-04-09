import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi').max(100),
  email: z.string().trim().email('Email tidak valid').max(255),
  subject: z.string().trim().min(1, 'Subjek harus diisi').max(200),
  message: z.string().trim().min(1, 'Pesan harus diisi').max(2000),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'geubrinahikmah27@gmail.com',
    href: 'mailto:geubrinahikmah27@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Pesan Terkirim ⚡',
        description: 'Terima kasih! Saya akan membalas secepatnya.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Gagal Mengirim',
        description: 'Terjadi kesalahan. Coba lagi nanti.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-[#0a192f] via-[#0f172a] to-[#020617]"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block tracking-wider">
            Kontak
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            contact me
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-white"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                let's collaborate!
              </h3>
              <p className="text-blue-200 leading-relaxed">
                Have an interesting project or want to collaborate? Don't hesitate to contact me.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:shadow-cyan-400/20 hover:shadow-lg transition"
                >
                  <div className="p-3 rounded-lg bg-cyan-400/10 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                    <info.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Nama"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-white/20 text-white placeholder:text-blue-300 focus:border-cyan-400 focus:ring-cyan-400"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-white/20 text-white placeholder:text-blue-300 focus:border-cyan-400 focus:ring-cyan-400"
                />
              </div>

              <Input
                name="subject"
                placeholder="Subjek"
                value={formData.subject}
                onChange={handleChange}
                className="bg-transparent border-white/20 text-white placeholder:text-blue-300 focus:border-cyan-400"
              />

              <Textarea
                name="message"
                placeholder="Pesan..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-transparent border-white/20 text-white placeholder:text-blue-300 focus:border-cyan-400"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
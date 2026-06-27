"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageSquare, Github, Linkedin, Send, MapPin, Phone, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/portfolio";

const schema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Masukkan alamat email yang valid"),
  subject: z.string().min(4, "Subjek minimal 4 karakter"),
  message: z.string().min(20, "Pesan minimal 20 karakter"),
});

type FormData = z.infer<typeof schema>;

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#5B8CFF",
    bg: "rgba(91,140,255,0.06)",
    border: "rgba(91,140,255,0.15)",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: personalInfo.phone,
    href: personalInfo.whatsapp,
    color: "#2DD4BF",
    bg: "rgba(45,212,191,0.06)",
    border: "rgba(45,212,191,0.15)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/kakapuri",
    href: personalInfo.github,
    color: "#A855F7",
    bg: "rgba(168,85,247,0.06)",
    border: "rgba(168,85,247,0.15)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kaka-puri-28378a305",
    href: personalInfo.linkedin,
    color: "#5B8CFF",
    bg: "rgba(91,140,255,0.06)",
    border: "rgba(91,140,255,0.15)",
  },
];

function InputField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs text-[#a0a0a0] font-medium">{label}</label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl text-sm text-[#f8f8f8] placeholder-[#555555] outline-none transition-all duration-200 focus:ring-1";
const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
};

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form data:", data);
    toast.success("Pesan terkirim! Saya akan segera membalas.", {
      description: `Terima kasih, ${data.name}. Sampai jumpa di pesan berikutnya.`,
    });
    reset();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      toast.success("Email disalin ke clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Gagal menyalin email, coba lagi.");
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* BG glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <SectionTitle
            english="Contact"
            local={<><span className="text-gradient-blue">Contact Me</span></>}
            description={"Have a project idea? I’d love to hear it. Let’s chat."}
            accent="blue"
          />
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Info */}
          <RevealOnScroll direction="left">
            <div className="flex flex-col gap-6 h-full">
              {/* Intro card */}
                <div
                  className="card p-7"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                >
                <h3 className="text-lg font-semibold text-[#f8f8f8] mb-2">
                  Open to new opportunities
                </h3>
                <p className="text-sm text-[#a0a0a0] leading-relaxed mb-4">
                  Currently open to freelance projects, internships, and collaborations.
                  I am highly interested in UI/UX work where I can contribute to research,
                  wireframing, and visual design.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#555555]">
                  <MapPin size={14} className="text-[var(--accent-primary)]" />
                  {personalInfo.location}, Indonesia
                </div>
                <div className="flex items-center justify-between gap-2 text-sm text-[#555555] mt-1.5">
                  <span className="flex items-center gap-2">
                    <Phone size={14} className="text-[var(--accent-secondary)]" />
                    {personalInfo.phone}
                  </span>
                </div>
                <motion.button
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-medium transition-all duration-200"
                  style={{
                    background: copied ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${copied ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.08)"}`,
                    color: copied ? "#22c55e" : "#a0a0a0",
                  }}
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  {copied ? "Email copied!" : "Copy Email"}
                </motion.button>
              </div>

              {/* Contact links */}
              <div className="grid grid-cols-2 gap-3">
                {contactLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ y: -2, scale: 1.01 }}
                      className="card p-4 group transition-all duration-200"
                      style={{ border: `1px solid ${link.border}` }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                        style={{ background: link.bg }}
                      >
                        <Icon size={15} style={{ color: link.color }} />
                      </div>
                      <p className="text-xs font-medium text-[#f8f8f8] mb-0.5">{link.label}</p>
                      <p className="text-[10px] text-[#555555] truncate">{link.value}</p>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Form */}
          <RevealOnScroll direction="right" delay={0.1}>
            <div
              className="glass rounded-2xl p-7"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField label="Nama" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      placeholder="Nama Anda"
                      className={inputClass}
                      style={{
                        ...inputStyle,
                        boxShadow: errors.name ? "0 0 0 1px rgba(239,68,68,0.4)" : undefined,
                      }}
                    />
                  </InputField>
                  <InputField label="Email" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="email@anda.com"
                      className={inputClass}
                      style={{
                        ...inputStyle,
                        boxShadow: errors.email ? "0 0 0 1px rgba(239,68,68,0.4)" : undefined,
                      }}
                    />
                  </InputField>
                </div>

                <InputField label="Subjek" error={errors.subject?.message}>
                  <input
                    {...register("subject")}
                    placeholder="Tanya proyek, kolaborasi..."
                    className={inputClass}
                    style={{
                      ...inputStyle,
                      boxShadow: errors.subject ? "0 0 0 1px rgba(239,68,68,0.4)" : undefined,
                    }}
                  />
                </InputField>

                <InputField label="Pesan" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Ceritakan tentang proyek Anda..."
                    className={`${inputClass} resize-none`}
                    style={{
                      ...inputStyle,
                      boxShadow: errors.message ? "0 0 0 1px rgba(239,68,68,0.4)" : undefined,
                    }}
                  />
                </InputField>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-[#f8f8f8] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #5B8CFF, #A855F7)",
                    boxShadow: "0 0 20px rgba(91,140,255,0.16)",
                  }}
                  whileHover={
                    !isSubmitting
                      ? { scale: 1.02, boxShadow: "0 0 36px rgba(91,140,255,0.24)" }
                      : {}
                  }
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

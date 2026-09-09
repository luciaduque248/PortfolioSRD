import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/mock';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: personalInfo.name,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      window.setTimeout(() => setSubmitStatus(''), 3000);
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
      window.setTimeout(() => setSubmitStatus(''), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="bg-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div data-reveal className="reveal-up border-t border-white/20 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-white/45">04 — Contact</p>
          <h2 className="mt-10 max-w-6xl text-[clamp(3.2rem,9vw,10rem)] font-black uppercase leading-[.82] tracking-[-.075em]">
            Hablemos de lo que quieres construir.
          </h2>
        </div>

        <div className="mt-20 grid gap-14 border-t border-white/20 pt-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div data-reveal className="reveal-up">
            <p className="max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
              Frontend, UX/UI o una experiencia móvil. Cuéntame el contexto, para quién es y qué necesitas resolver.
            </p>

            <div className="mt-10 border-y border-white/15">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-between gap-4 border-b border-white/15 py-5 text-sm text-white/60 transition-colors hover:text-white">
                <span className="flex items-center gap-3"><Mail className="h-4 w-4" /> Email</span>
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <div className="flex items-center justify-between gap-4 py-5 text-sm text-white/60">
                <span className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Location</span>
                <span>Colombia</span>
              </div>
            </div>

            <div className="mt-8 flex gap-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-social" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href={`mailto:${personalInfo.email}`} className="contact-social" aria-label="Correo"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <div data-reveal className="reveal-up reveal-delay-1">
            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="border-b border-white/20 py-5">
                <label htmlFor="name" className="text-[10px] font-semibold uppercase tracking-[.16em] text-white/35">Nombre</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full border-0 bg-transparent p-0 text-2xl font-semibold tracking-[-.03em] text-white outline-none placeholder:text-white/20 sm:text-3xl"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="border-b border-white/20 py-5">
                <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-[.16em] text-white/35">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full border-0 bg-transparent p-0 text-2xl font-semibold tracking-[-.03em] text-white outline-none placeholder:text-white/20 sm:text-3xl"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="border-b border-white/20 py-5">
                <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-[.16em] text-white/35">Proyecto</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-2 w-full resize-none border-0 bg-transparent p-0 text-xl font-medium leading-relaxed text-white outline-none placeholder:text-white/20 sm:text-2xl"
                  placeholder="Qué estás construyendo y qué quieres lograr..."
                />
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm">
                  {submitStatus === 'success' && <span className="text-emerald-400">Mensaje enviado. Te responderé pronto.</span>}
                  {submitStatus === 'error' && <span className="text-red-400">No se pudo enviar. Intenta de nuevo.</span>}
                </div>
                <button type="submit" disabled={isSubmitting} className="editorial-cta-inverse disabled:cursor-not-allowed disabled:opacity-50">
                  <Send className="h-4 w-4" />
                  {isSubmitting ? 'Enviando…' : 'Enviar mensaje'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-white/20 pt-6 text-xs font-semibold uppercase tracking-[.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Sara Duque</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
            Disponible para conectar <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

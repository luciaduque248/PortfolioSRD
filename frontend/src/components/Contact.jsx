import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
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
    <section id="contacto" className="relative overflow-hidden bg-black py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
            Contacto
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-4xl md:text-5xl">
            Hablemos de lo que quieres construir.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Puedo ayudarte con frontend, UX/UI o una experiencia móvil. Cuéntame el contexto y el objetivo del proyecto.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              <div className="flex items-center gap-4 py-5">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm text-gray-400 hover:text-white">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 py-5">
                <MapPin className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-sm font-medium text-white">Ubicación</p>
                  <p className="text-sm text-gray-400">Colombia</p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-colors hover:border-gray-600 hover:text-white active:scale-95"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-colors hover:border-gray-600 hover:text-white active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-colors hover:border-gray-600 hover:text-white active:scale-95"
                aria-label="Correo"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="mb-6 text-xl font-semibold text-white">Enviar mensaje</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 border-l-2 border-green-400 pl-4 text-sm text-green-400">
                Mensaje enviado. Te responderé pronto.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 border-l-2 border-red-400 pl-4 text-sm text-red-400">
                No se pudo enviar. Intenta de nuevo en unos segundos.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-600 focus:border-blue-400"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-600 focus:border-blue-400"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-600 focus:border-blue-400"
                  placeholder="Qué estás construyendo, para quién y qué necesitas resolver..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-400 active:scale-[0.98] ${
                  isSubmitting ? 'cursor-not-allowed opacity-60' : ''
                }`}
              >
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? 'Enviando…' : 'Enviar mensaje'}</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} {personalInfo.name}. React + Tailwind CSS.
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/mock';

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
    <section id="contacto" className="contact-section">
      <div className="editorial-container">
        <div className="section-index section-index-contact" data-reveal>
          <span>05 — Contact</span>
          <span>Frontend · Web + Mobile · UX/UI · Software</span>
        </div>

        <h2 className="contact-title" data-reveal>
          Let's build<br />
          <span>something</span><br />
          together.
        </h2>

        <div className="contact-grid">
          <aside className="contact-sidebar" data-reveal>
            <p>
              Si necesitas una interfaz, una aplicación web, una experiencia móvil o un producto que conecte diseño y desarrollo, conversemos.
            </p>
            <div className="contact-details">
              <a href={`mailto:${personalInfo.email}`}><Mail /> <span>{personalInfo.email}</span></a>
              <div><MapPin /> <span>Colombia</span></div>
            </div>
            <div className="contact-socials">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email"><Mail /></a>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="contact-form" data-reveal>
            <label>
              <span>Name</span>
              <input name="name" value={formData.name} onChange={handleChange} required placeholder="Tu nombre" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="tu@email.com" />
            </label>
            <label>
              <span>Project</span>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Qué estás construyendo y qué quieres lograr..." />
            </label>

            <div className="contact-submit-row">
              <div aria-live="polite">
                {submitStatus === 'success' && <span>Mensaje enviado. Te responderé pronto.</span>}
                {submitStatus === 'error' && <span>No se pudo enviar. Intenta de nuevo.</span>}
              </div>
              <button type="submit" disabled={isSubmitting}>
                <Send /> {isSubmitting ? 'Enviando…' : 'Send message'}
              </button>
            </div>
          </form>
        </div>

        <footer className="site-footer">
          <div>
            <strong>Sara Duque</strong>
            <span>Frontend Developer · Web + Mobile · UX/UI · Software</span>
          </div>
          <span>© {new Date().getFullYear()}</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            Connect <ArrowUpRight />
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

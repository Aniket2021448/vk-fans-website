'use client';

import { useState, FormEvent } from 'react';
import Icon from '@/components/ui/AppIcon';
import { BUSINESS_INFO } from '@/constants/business';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I'm ${formData.name || 'a potential customer'}. I'd like to inquire about ${BUSINESS_INFO.name} products.${formData.message ? `\n\nMessage: ${formData.message}` : ''}`
    );
    window.open(`${BUSINESS_INFO.contact.whatsappLink}?text=${message}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:${BUSINESS_INFO.contact.email}?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;
      setSubmitStatus('success');

      setTimeout(() => {
        onClose();
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Contact Sales</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleWhatsApp}
              className="flex flex-col items-center justify-center p-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg transition-colors"
            >
              <svg
                viewBox="0 0 32 32"
                className="w-8 h-8 mb-2"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.82.738 5.49 2.03 7.806L.696 29.99l6.364-1.667A15.923 15.923 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.455c-2.443 0-4.83-.665-6.909-1.921l-.495-.294-5.128 1.345 1.368-4.998-.323-.513A13.39 13.39 0 0 1 2.546 16C2.546 8.543 8.543 2.545 16 2.545S29.455 8.543 29.455 16 23.457 29.455 16 29.455z" />
                <path d="M23.248 19.446c-.393-.197-2.328-1.148-2.688-1.28-.36-.131-.622-.197-.884.197-.262.394-1.016 1.28-1.246 1.542-.23.262-.459.295-.852.098-.393-.197-1.659-.612-3.159-1.95-1.168-1.041-1.958-2.328-2.187-2.721-.23-.393-.024-.606.173-.802.177-.177.393-.459.59-.688.196-.23.262-.394.393-.656.131-.262.066-.492-.033-.689-.098-.197-.884-2.13-1.213-2.917-.32-.767-.646-.663-.884-.675-.23-.011-.492-.014-.754-.014-.262 0-.688.098-1.049.492-.36.393-1.377 1.344-1.377 3.277s1.41 3.8 1.607 4.062c.197.262 2.773 4.236 6.72 5.942.938.406 1.672.647 2.241.829.943.299 1.8.257 2.48.156.754-.113 2.328-.951 2.655-1.869.328-.918.328-1.704.23-1.869-.098-.164-.36-.262-.754-.459z" />
              </svg>
              <span className="font-semibold text-sm">WhatsApp</span>
            </button>

            <button
              onClick={() => document.getElementById('email-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center justify-center p-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
            >
              <Icon name="EnvelopeIcon" size={32} className="mb-2" />
              <span className="font-semibold text-sm">Email Query</span>
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">or fill the form below</span>
            </div>
          </div>

          {/* Email Form */}
          <form id="email-form" onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+91 XXXXXXXXXX"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                Email client opened successfully!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                Failed to open email client. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Opening Email...' : 'Send Email'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="pt-4 border-t border-border space-y-2 text-sm">
            <p className="text-muted-foreground">Or contact us directly:</p>
            <a
              href={`tel:${BUSINESS_INFO.contact.phone}`}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Icon name="PhoneIcon" size={16} />
              {BUSINESS_INFO.contact.phone}
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.contact.email}`}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Icon name="EnvelopeIcon" size={16} />
              {BUSINESS_INFO.contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
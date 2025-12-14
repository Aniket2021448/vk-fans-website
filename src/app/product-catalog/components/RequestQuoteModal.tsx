'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  price: number;
  specifications: {
    power: string;
    airflow: string;
    speed: string;
    noise: string;
  };
  features: string[];
  energyRating: string;
  description: string;
  warranty: string;
  dimensions: string;
  weight: string;
  inStock: boolean;
}

interface RequestQuoteModalProps {
  product: Product;
  onClose: () => void;
}

export default function RequestQuoteModal({ product, onClose }: RequestQuoteModalProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    `I am interested in requesting a quote for the following product:\n\nProduct: ${product.name}\nCategory: ${product.category}\nQuantity: 1\n\nPlease provide me with a quote at your earliest convenience.\n\nThank you.`
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      updateMessage(newQuantity);
    }
  };

  const updateMessage = (qty: number) => {
    setMessage(
      `I am interested in requesting a quote for the following product:\n\nProduct: ${product.name}\nCategory: ${product.category}\nQuantity: ${qty}\n\nPlease provide me with a quote at your earliest convenience.\n\nThank you.`
    );
  };

  const handleSendEmail = async () => {
    if (!contactNumber.trim() || !email.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      // Create mailto link
      const subject = `Quote Request for ${product.name}`;
      const body = `${message}\n\nContact Number: ${contactNumber}\nEmail: ${email}`;
      window.location.href = `mailto:?to=${encodeURIComponent(
        email
      )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Close modal after a short delay
      setTimeout(() => {
        onClose();
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
    }
  };

  const handleSendWhatsApp = () => {
    if (!contactNumber.trim()) {
      alert('Please enter a contact number');
      return;
    }

    setIsSubmitting(true);
    try {
      // Format phone number for WhatsApp (remove special characters)
      const formattedPhone = contactNumber.replace(/\D/g, '');
      
      // Add country code if not present (assuming +91 for India, modify as needed)
      const whatsappNumber = formattedPhone.startsWith('91')
        ? formattedPhone
        : `91${formattedPhone}`;

      const whatsappMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
      
      window.open(whatsappLink, '_blank');
      
      // Close modal after a short delay
      setTimeout(() => {
        onClose();
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      console.error('Error sending WhatsApp:', error);
      setIsSubmitting(false);
    }
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-industrial-steel/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-industrial w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-background">
          <h2 className="text-xl font-semibold text-foreground">Request a Quote</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded transition-colors"
            aria-label="Close request quote"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Product Details */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Product Details</h3>
              
              {/* Product Image */}
              <div className="relative aspect-square bg-surface rounded-lg overflow-hidden mb-6">
                <AppImage
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {product.energyRating}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">Product Name</p>
                  <p className="text-lg font-bold text-foreground">{product.name}</p>
                </div>

                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">Category</p>
                  <p className="text-sm font-semibold text-foreground">{product.category}</p>
                </div>

                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">Price</p>
                  <p className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</p>
                </div>

                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide mb-2">Specifications</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-surface p-3 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="BoltIcon" size={14} className="text-primary" />
                        <span className="text-xs text-text-secondary">Power</span>
                      </div>
                      <p className="text-xs font-semibold text-foreground">{product.specifications.power}</p>
                    </div>
                    <div className="bg-surface p-3 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="SignalIcon" size={14} className="text-primary" />
                        <span className="text-xs text-text-secondary">Airflow</span>
                      </div>
                      <p className="text-xs font-semibold text-foreground">{product.specifications.airflow}</p>
                    </div>
                    <div className="bg-surface p-3 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="SparklesIcon" size={14} className="text-primary" />
                        <span className="text-xs text-text-secondary">Speed</span>
                      </div>
                      <p className="text-xs font-semibold text-foreground">{product.specifications.speed}</p>
                    </div>
                    <div className="bg-surface p-3 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="SpeakerXMarkIcon" size={14} className="text-primary" />
                        <span className="text-xs text-text-secondary">Noise</span>
                      </div>
                      <p className="text-xs font-semibold text-foreground">{product.specifications.noise}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide mb-2">Key Features</p>
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <Icon name="CheckIcon" size={16} className="text-success shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Quote Form */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Your Information</h3>

              <div className="space-y-5">
                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Quantity</label>
                  <div className="flex items-center gap-4 bg-surface px-4 py-3 rounded-lg border border-border">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="p-1 hover:bg-muted rounded transition-colors disabled:opacity-50"
                    >
                      <Icon name="MinusIcon" size={20} className="text-foreground" />
                    </button>
                    <span className="text-lg font-semibold text-foreground min-w-12 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-1 hover:bg-muted rounded transition-colors"
                    >
                      <Icon name="PlusIcon" size={20} className="text-foreground" />
                    </button>
                  </div>
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Contact Number *</label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-foreground placeholder:text-text-secondary"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-foreground placeholder:text-text-secondary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-foreground placeholder:text-text-secondary resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <button
                    onClick={handleSendEmail}
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Icon name="EnvelopeIcon" size={18} />
                    {isSubmitting ? 'Sending...' : 'Email Query'}
                  </button>
                  <button
                    onClick={handleSendWhatsApp}
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BA5A] transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={18} />
                    {isSubmitting ? 'Sending...' : 'WhatsApp'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

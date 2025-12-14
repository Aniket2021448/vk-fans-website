import { BUSINESS_INFO } from '@/constants/business';

// Utility functions for product slugs and messaging

export const generateProductSlug = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '')
    .replace(/\-+/g, '-');
};

export const generateWhatsAppMessage = (productName: string, category: string, price: number): string => {
  return `Hi! I'm interested in the ${productName} from your ${category} collection. 

Product: ${productName}
Category: ${category}
Price: ₹${price.toLocaleString()}

Could you please provide more information about this product and pricing for bulk orders?

Thank you!`;
};

export const sendWhatsAppMessage = (message: string, phoneNumber?: string) => {
  const phone = phoneNumber || BUSINESS_INFO.contact.whatsappNumber;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(whatsappLink, '_blank');
};

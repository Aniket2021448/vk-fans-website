'use client';

import { useState } from 'react';

import { BUSINESS_INFO } from '@/constants/business';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in ${BUSINESS_INFO?.name} products. I'd like to know more about your fans.`
    );
    window.open(`${BUSINESS_INFO?.contact?.whatsappLink}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      style={{
        width: isHovered ? 'auto' : '60px',
        height: '60px',
        padding: isHovered ? '0 20px' : '0',
      }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8 shrink-0"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.82.738 5.49 2.03 7.806L.696 29.99l6.364-1.667A15.923 15.923 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.455c-2.443 0-4.83-.665-6.909-1.921l-.495-.294-5.128 1.345 1.368-4.998-.323-.513A13.39 13.39 0 0 1 2.546 16C2.546 8.543 8.543 2.545 16 2.545S29.455 8.543 29.455 16 23.457 29.455 16 29.455z" />
        <path d="M23.248 19.446c-.393-.197-2.328-1.148-2.688-1.28-.36-.131-.622-.197-.884.197-.262.394-1.016 1.28-1.246 1.542-.23.262-.459.295-.852.098-.393-.197-1.659-.612-3.159-1.95-1.168-1.041-1.958-2.328-2.187-2.721-.23-.393-.024-.606.173-.802.177-.177.393-.459.59-.688.196-.23.262-.394.393-.656.131-.262.066-.492-.033-.689-.098-.197-.884-2.13-1.213-2.917-.32-.767-.646-.663-.884-.675-.23-.011-.492-.014-.754-.014-.262 0-.688.098-1.049.492-.36.393-1.377 1.344-1.377 3.277s1.41 3.8 1.607 4.062c.197.262 2.773 4.236 6.72 5.942.938.406 1.672.647 2.241.829.943.299 1.8.257 2.48.156.754-.113 2.328-.951 2.655-1.869.328-.918.328-1.704.23-1.869-.098-.164-.36-.262-.754-.459z" />
      </svg>
      {isHovered && (
        <span className="ml-3 font-semibold whitespace-nowrap overflow-hidden transition-all duration-300">
          Chat with us
        </span>
      )}
    </button>
  );
}
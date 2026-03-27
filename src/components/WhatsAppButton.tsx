"use client";

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Replace with AVS official WhatsApp number
  const message = "Hello AVS! I'm interested in your services. Can you help me?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 group flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip that shows on hover */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
        Chat with AVS
      </span>
      <MessageCircle size={28} fill="currentColor" />
      
      {/* Notification Dot */}
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
      </span>
    </a>
  );
}
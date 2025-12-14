import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5491112345678"; // Reemplazar con el número real

interface WhatsAppButtonProps {
  message?: string;
  productName?: string;
  floating?: boolean;
}

const WhatsAppButton = ({ message, productName, floating = false }: WhatsAppButtonProps) => {
  const defaultMessage = productName 
    ? `Hola! Me interesa el producto: ${productName}` 
    : "Hola! Me gustaría más información sobre sus productos";
  
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || defaultMessage)}`;

  if (floating) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-float"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7" fill="white" />
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[#1fb855] hover:shadow-lg"
    >
      <MessageCircle className="h-5 w-5" />
      <span>Consultar</span>
    </a>
  );
};

export default WhatsAppButton;

import { ArrowUpRight, MessageCircle } from "lucide-react";

export const WHATSAPP_NUMBER = "5515996855481";
export const WHATSAPP_MESSAGE =
  "Olá, Elvira! Conheci o Ateliê Momento Perfeito pelo site e gostaria de saber mais.";

export function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type WhatsAppButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "light" | "text";
  className?: string;
};

/**
 * CTA principal. Para alterar o número ou a mensagem automática, edite as constantes acima.
 */
export function WhatsAppButton({
  children = "Falar pelo WhatsApp",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const variants = {
    primary:
      "bg-[#8a6236] text-white shadow-[0_16px_35px_rgba(119,78,36,0.22)] hover:bg-[#76512c]",
    light:
      "bg-[#f6efe5] text-[#68492d] hover:bg-white",
    text: "text-[#8a6236] hover:text-[#68492d]",
  };

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b68c55] focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
    >
      <MessageCircle size={17} strokeWidth={1.8} />
      <span>{children}</span>
      <ArrowUpRight size={15} strokeWidth={1.8} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

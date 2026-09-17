import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const phoneNumber = "919876543210";

  const message = encodeURIComponent(
    "Hi KIDDO­VERSE! I would like to know more about your preschool."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={25} strokeWidth={2.2} />

      <span className="whatsapp-text">
        Chat with us
      </span>
    </a>
  );
}

export default WhatsAppButton;
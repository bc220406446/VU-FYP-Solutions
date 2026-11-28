/**
 * DeveloperBano - WhatsApp Redirection Utility
 * Generates formatted WhatsApp click-to-chat URLs with contextual pre-filled messages.
 */

const DEFAULT_PHONE_NUMBER = "923328322488";

interface WhatsAppMessageOptions {
  phoneNumber?: string;
  message?: string;
  projectTitle?: string;
  serviceTitle?: string;
}

/**
 * Builds a valid WhatsApp chat URL.
 */
export function buildWhatsAppUrl({
  phoneNumber = DEFAULT_PHONE_NUMBER,
  message,
  projectTitle,
  serviceTitle,
}: WhatsAppMessageOptions = {}): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");

  let text = message;

  if (!text) {
    if (projectTitle) {
      text = `Hello DeveloperBano, I am interested in learning more about the project: "${projectTitle}". Could you please guide me?`;
    } else if (serviceTitle) {
      text = `Hello DeveloperBano, I would like to inquire about your service: "${serviceTitle}".`;
    } else {
      text = `Hello DeveloperBano, I need guidance regarding my Final Year Project (FYP).`;
    }
  }

  const encodedMessage = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

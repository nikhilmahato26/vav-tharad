const PHONE_NUMBER = "919426494323"; // 9426494323 with 91 country code for India

/**
 * Encodes text and creates wa.me link
 * @param {string} text - Message text
 * @returns {string} - WhatsApp redirect link
 */
export const buildWhatsAppUrl = (text) => {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};

/**
 * Creates URL for custom travel packages
 */
export const getPackageInquiryLink = (pkgName, price) => {
  const text = `Hello Vav-Tharad Tourism,\n\nI am interested in booking the *${pkgName}* package (${price}).\n\nPlease provide me with details regarding availability, itineraries, and inclusions.\n\nThank you!`;
  return buildWhatsAppUrl(text);
};

/**
 * Creates URL for Visa consultation
 */
export const getVisaConsultLink = (visaType) => {
  const text = `Hello Vav-Tharad Tourism,\n\nI would like to inquire about *${visaType || "Tourist"} Visa Consultancy* services.\n\nPlease let me know the document requirements, processing time, and consultation fees.\n\nThank you!`;
  return buildWhatsAppUrl(text);
};

/**
 * Creates URL for search form submissions
 */
export const getSearchInquiryLink = ({ type, from, to, depart, travelers }) => {
  const text = `Hello Vav-Tharad Tourism,\n\nI want to plan a trip with the following details:\n\n✈️ *Type:* ${type}\n📍 *From:* ${from}\n🗺️ *To:* ${to}\n📅 *Departure:* ${depart}\n👥 *Travelers:* ${travelers}\n\nPlease check options and get back to me with a quote.\n\nThank you!`;
  return buildWhatsAppUrl(text);
};

/**
 * Creates URL for generic contact form submissions
 */
export const getContactFormLink = ({ name, email, phone, subject, message }) => {
  const text = `Hello Vav-Tharad Tourism,\n\nI have submitted an inquiry via the website contact form:\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n✉️ *Email:* ${email}\n📌 *Subject:* ${subject || "General Inquiry"}\n💬 *Message:* ${message}\n\nPlease contact me regarding this query.\n\nThank you!`;
  return buildWhatsAppUrl(text);
};

/**
 * Single source of truth for business information.
 * Update values here — every page reads from this file.
 */

export const site = {
  name: "Laar Restaurant & Fast Food",
  shortName: "Laar Restaurant",
  tagline: "Restaurant & Fast Food",
  secondaryIdentity: "Gym Khana Badin",
  address: "Pir Luari Road Near Shaheed Benazir Bhutto Chowk, Badin",
  city: "Badin, Sindh",
  country: "Pakistan",
  email: "resturentlaarr@gmail.com",
  /** Main ordering / reservation numbers */
  phones: ["0300-3441802", "0313-6579800", "0316-6998811"],
  /** Number used for WhatsApp ordering (international format, no +) */
  whatsapp: "923003441802",
  management: [
    {
      name: "Abdul Raheem Abro",
      role: "General Manager",
      phones: ["0346-2726031", "0349-2209190"],
    },
    {
      name: "Luquman Memon",
      role: "Manager",
      phones: ["0309-2562430", "0334-3290849"],
    },
  ],
} as const;

/** Turns 0300-3441802 into a tel: href */
export const telHref = (phone: string) => `tel:+92${phone.replace(/\D/g, "").replace(/^0/, "")}`;

export const whatsappHref = `https://wa.me/${site.whatsapp}`;

export const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name}, ${site.address}, Badin, Sindh, Pakistan`,
)}`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address}, Badin, Sindh, Pakistan`,
)}&output=embed`;

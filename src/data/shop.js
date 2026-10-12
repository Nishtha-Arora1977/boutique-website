export const brand = {
  name: 'Maison Élise',
  tagline: 'Timeless pieces, made for everyday elegance.',
  email: 'hello@maisonelise.in',
};

export const categories = [
  {
    id: 'women',
    label: 'Women',
    description: 'Daily and occasion wear, designed to be lived in.',
    count: '21 pieces',
  },
  {
    id: 'ethnic',
    label: 'Ethnic Wear',
    description: 'Festive kurtas, sets and handcrafted prints.',
    count: '16 pieces',
  },
  {
    id: 'western',
    label: 'Western Wear',
    description: 'Satin, denim, shirts and essentials for every day.',
    count: '18 pieces',
  },
  {
    id: 'accessories',
    label: 'Accessories',
    description: 'Bags, jewellery and scarves to finish every look.',
    count: '12 pieces',
  },
  {
    id: 'footwear',
    label: 'Footwear',
    description: 'Soft, handcrafted sandals made for long days.',
    count: '8 pieces',
  },
];

export const products = [
  {
    id: 'silk-evening-dress',
    name: 'Silk Evening Dress',
    category: 'Women',
    price: 2499,
    tagline: 'Softly draped A-line in breathable silk-blend.',
    description:
      'A flowing A-line silhouette with a soft drape and delicate slip lining. Cut to move with you from dinner to dance floor.',
  },
  {
    id: 'indigo-kurta-set',
    name: 'Indigo Kurta & Palazzo Set',
    category: 'Ethnic Wear',
    price: 1299,
    tagline: 'Classic indigo set with hand-block print.',
    description:
      'A relaxed kurta paired with wide-leg palazzos. Hand-block printed in breathable cotton with natural indigo dye.',
  },
  {
    id: 'satin-slip-dress',
    name: 'Satin Slip Dress',
    category: 'Western Wear',
    price: 1599,
    tagline: 'Minimal, sleek and made to dress up or down.',
    description:
      'A bias-cut satin slip with a cowl neckline. Soft, light, and easy to layer over a tee or under a blazer.',
  },
  {
    id: 'crisp-white-shirt',
    name: 'Crisp White Shirt',
    category: 'Western Wear',
    price: 1299,
    tagline: 'Clean tailoring that works for any day.',
    description:
      'A classic button-down with a relaxed fit and sharp finish. Easy to tuck in or leave open over a camisole.',
  },
  {
    id: 'off-duty-denim',
    name: 'Off-Duty Denim',
    category: 'Western Wear',
    price: 1799,
    tagline: 'High-rise, straight leg and endlessly wearable.',
    description:
      'Soft-washed denim with just the right amount of stretch. A staple you’ll wear on repeat.',
  },
  {
    id: 'boyfriend-shirt',
    name: 'Relaxed Boyfriend Shirt',
    category: 'Western Wear',
    price: 1199,
    tagline: 'Overshirt ease with a polished finish.',
    description:
      'Dropped shoulders and a longline cut in crisp cotton. Looks just as good worn open as it does buttoned up.',
  },
  {
    id: 'handwoven-straw-tote',
    name: 'Handwoven Straw Tote',
    category: 'Accessories',
    price: 1799,
    tagline: 'Room for everything, softened by hand.',
    description:
      'A generous woven tote with internal pockets and a cotton lining. Woven by hand from natural straw and finished with leather straps.',
  },
  {
    id: 'statement-gold-necklace',
    name: 'Statement Gold Necklace',
    category: 'Accessories',
    price: 899,
    tagline: 'A quiet, glossy accent for any neckline.',
    description:
      'An oxidised-gold statement piece with a secure clasp. Lightweight and easy to pair with both formal and casual looks.',
  },
  {
    id: 'bandhani-cotton-scarf',
    name: 'Bandhani Cotton Scarf',
    category: 'Accessories',
    price: 649,
    tagline: 'A breath of tradition in pure cotton.',
    description:
      'A traditional bandhani tie-dye scarf in soft, pure cotton. Finished with hand-rolled edges and a subtle fringe.',
  },
  {
    id: 'chiffon-blouse',
    name: 'Pastel Chiffon Blouse',
    category: 'Women',
    price: 999,
    tagline: 'Sheer, light and endlessly wearable.',
    description:
      'A featherweight chiffon blouse with covered buttons and easy drape. Lined for comfort with a camisole-safe slit neckline.',
  },
  {
    id: 'leather-sandals',
    name: 'Tan Leather Sandals',
    category: 'Footwear',
    price: 1499,
    tagline: 'Soft, everyday comfort in genuine leather.',
    description:
      'A cushioned flat sandal in soft tan leather with an adjustable ankle strap and a flexible, non-slip sole.',
  },
  {
    id: 'embroidered-pouch-set',
    name: 'Embroidered Pouch Set',
    category: 'Accessories',
    price: 799,
    tagline: 'Three sizes, one keepsake finish.',
    description:
      'A set of three quilted pouches in discreet hand embroidery. Perfect for cosmetics, stationery, or a pretty gift.',
  },
];

export function formatPrice(value) {
  return `₹${value.toLocaleString('en-IN')}`;
}

export function orderMessage(product) {
  return `Hello ${brand.name}! I'd like to order the "${product.name}" (${formatPrice(
    product.price
  )}). Could you share the availability?`;
}
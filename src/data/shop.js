import {
  Sparkles,
  Shirt,
  ShoppingBag,
  Gem,
  Flower2,
  Waves,
  Footprints,
  Gift,
} from 'lucide-react';

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
    icon: Shirt,
    count: '21 pieces',
  },
  {
    id: 'ethnic',
    label: 'Ethnic Wear',
    description: 'Festive kurtas, sets and handcrafted prints.',
    icon: Flower2,
    count: '16 pieces',
  },
  {
    id: 'accessories',
    label: 'Accessories',
    description: 'Bags, jewellery and scarves to finish every look.',
    icon: ShoppingBag,
    count: '12 pieces',
  },
  {
    id: 'footwear',
    label: 'Footwear',
    description: 'Soft, handcrafted sandals made for long days.',
    icon: Footprints,
    count: '8 pieces',
  },
];

export const products = [
  {
    id: 'silk-evening-dress',
    name: 'Silk Evening Dress',
    category: 'Women',
    price: 2499,
    tone: ['#eecfc6', '#f6e3dc'],
    icon: Sparkles,
    tagline: 'Softly draped A-line in breathable silk-blend.',
    description:
      'A flowing A-line silhouette with a soft drape and delicate slip lining. Cut to move with you from dinner to dance floor.',
  },
  {
    id: 'indigo-kurta-set',
    name: 'Indigo Kurta & Palazzo Set',
    category: 'Ethnic Wear',
    price: 1299,
    tone: ['#dfe0ee', '#eef0f6'],
    icon: Shirt,
    tagline: 'Classic indigo set with hand-block print.',
    description:
      'A relaxed kurta paired with wide-leg palazzos. Hand-block printed in breathable cotton with natural indigo dye.',
  },
  {
    id: 'handwoven-straw-tote',
    name: 'Handwoven Straw Tote',
    category: 'Accessories',
    price: 1799,
    tone: ['#ede3c8', '#f6efdd'],
    icon: ShoppingBag,
    tagline: 'Room for everything, softened by hand.',
    description:
      'A generous woven tote with internal pockets and a cotton lining. Woven by hand from natural straw and finished with leather straps.',
  },
  {
    id: 'statement-gold-necklace',
    name: 'Statement Gold Necklace',
    category: 'Accessories',
    price: 899,
    tone: ['#efe0c4', '#f7edda'],
    icon: Gem,
    tagline: 'A quiet, glossy accent for any neckline.',
    description:
      'An oxidised-gold statement piece with a secure clasp. Lightweight and easy to pair with both formal and casual looks.',
  },
  {
    id: 'bandhani-cotton-scarf',
    name: 'Bandhani Cotton Scarf',
    category: 'Accessories',
    price: 649,
    tone: ['#e6d9cf', '#f2e9e0'],
    icon: Flower2,
    tagline: 'A breath of tradition in pure cotton.',
    description:
      'A traditional bandhani tie-dye scarf in soft, pure cotton. Finished with hand-rolled edges and a subtle fringe.',
  },
  {
    id: 'chiffon-blouse',
    name: 'Pastel Chiffon Blouse',
    category: 'Women',
    price: 999,
    tone: ['#eacfd4', '#f7e8ea'],
    icon: Waves,
    tagline: 'Sheer, light and endlessly wearable.',
    description:
      'A featherweight chiffon blouse with covered buttons and easy drape. Lined for comfort with a camisole-safe slit neckline.',
  },
  {
    id: 'leather-sandals',
    name: 'Tan Leather Sandals',
    category: 'Footwear',
    price: 1499,
    tone: ['#e3d2c3', '#efe4d8'],
    icon: Footprints,
    tagline: 'Soft, everyday comfort in genuine leather.',
    description:
      'A cushioned flat sandal in soft tan leather with an adjustable ankle strap and a flexible, non-slip sole.',
  },
  {
    id: 'embroidered-pouch-set',
    name: 'Embroidered Pouch Set',
    category: 'Accessories',
    price: 799,
    tone: ['#dce5d6', '#ecf0e2'],
    icon: Gift,
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
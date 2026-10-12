const base = 'https://images.unsplash.com';

export function img(id, w = 1000) {
  return `${base}/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const hero = img('1445205170230-053b83016050', 1200);
export const story = img('1483985988355-763728e1935b', 1000);

export const categories = {
  women: img('1534528741775-53994a69daeb', 800),
  ethnic: img('1515886657613-9f3515b0c78f', 800),
  western: img('1529139574466-a303027c1d8b', 900),
  accessories: img('1584917865442-de89df76afd3', 800),
  footwear: img('1485968579580-b6d095142e6e', 800),
};

export const products = {
  'silk-evening-dress': img('1496747611176-843222e1e57c', 900),
  'indigo-kurta-set': img('1610030469983-98e550d6193c', 900),
  'satin-slip-dress': img('1525507119028-ed4c629a60a3', 900),
  'crisp-white-shirt': img('1583743814966-8936f5b7be1a', 900),
  'off-duty-denim': img('1576566588028-4147f3842f27', 900),
  'boyfriend-shirt': img('1541099649105-f69ad21f3246', 900),
  'handwoven-straw-tote': img('1594633312681-425c7b97ccd1', 900),
  'statement-gold-necklace': img('1599643478518-a784e5dc4c8f', 900),
  'bandhani-cotton-scarf': img('1549490349-8643362247b5', 900),
  'chiffon-blouse': img('1532453288672-3a27e9be9efd', 900),
  'leather-sandals': img('1549298916-b41d501d3772', 900),
  'embroidered-pouch-set': img('1515372039744-b8f02a3ae446', 900),
};
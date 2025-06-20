import React from 'react';
import ProductCard from '../components/ProductCard';
import ipadp from '../assets/iPad/ipadp.jpeg.jpg'
import ipadb from '../assets/iPad/ipadb.jpeg.jpg'
import ipady from '../assets/iPad/ipady.jpeg.jpg'
import ipads from '../assets/iPad/ipads.jpeg.jpg'
import ipadairp from '../assets/iPad/ipadairp.jpeg.jpg'
import ipadairb from '../assets/iPad/ipadairb.jpeg.jpg'
import ipadprob from '../assets/iPad/ipadprob.jpeg.jpg'
import ipadpros from '../assets/iPad/ipadpros.jpeg.jpg'
const ipadProduct = [
  {
    name: ' iPad (11th generation)',
    variants: [
      {
        color: 'blue',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: ipadb,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'pink',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: ipadp,
        storage: ['64GB', '128GB'],
      },
          {
        color: 'yellow',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: ipady,
        storage: ['64GB', '128GB'],
      },
          {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: ipads,
        storage: ['64GB', '128GB'],
      }
    ]
  },
    {
    name: 'iPad Air (7th generation, M3 – 2025)',
    variants: [
      {
        color: 'purple',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: ipadairp,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'blue',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: ipadairb,
        storage: ['64GB', '128GB'],
      }
    ]
  },
    {
    name: ' iPad Pro (7th generation, M4 – 2024)',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: ipadprob,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: ipadpros,
        storage: ['64GB', '128GB'],
      }
    ]
  },
   
  // Add more products similarly...
];

const IpadPage = () => {
  return (
    <div className="category-page">
      <h2>iPad Collection</h2>
      <div className="product-grid">
        {ipadProduct.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default IpadPage;
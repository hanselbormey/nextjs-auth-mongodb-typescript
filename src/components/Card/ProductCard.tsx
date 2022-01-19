import React from 'react';
import Image from 'next/image';

import Card from '~types/Card';

const ProductCard: React.FC<Card> = ({ title, image, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
      <Image
        className="w-full"
        src={image}
        alt={title}
        width={500}
        height={400}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-grey-darker text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import Image from 'next/image';

import Card from '~types/Card';

const ServiceCard: React.FC<Card> = ({ title, image, description }) => {
  return (
    <div className="w-full md:flex my-2">
      <div className="flex md:shrink-0 relative h-80 w-full md:h-80 md:w-96">
        <Image
          className="rounded-lg"
          src={image}
          alt={title}
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div className="px-6 py-4 flex flex-col">
        <div className="text-indigo-500 font-bold text-xl mb-2 md:text-left text-center">
          {title}
        </div>
        <p className="text-xl text-grey-darker text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

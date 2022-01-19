import React from 'react';
import useSWR from 'swr';
import fetcher from '~utils/fetcher'

import ProductCard from '~components/Card/ProductCard';

function Products() {

  const { error, data: products } = useSWR('/api/products', fetcher);

  if (error) return "An error has occurred.";
  if (!products) return "Loading...";

  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        {products?.map(({ _id, name, image, description }) => (
          <ProductCard
            key={_id}
            title={name}
            image={image}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Products;

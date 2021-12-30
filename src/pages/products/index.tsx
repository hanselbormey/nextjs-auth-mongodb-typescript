import React from 'react';
import * as Realm from 'realm-web';

import ProductCard from '~components/Card/ProductCard';

function Products() {
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    const app = new Realm.App({ id: 'bormey-grocery-store-qprhi' });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allProducts = await user.functions.getAllProducts();
      setProducts(allProducts);
    } catch (err) {
      console.error('Failed to log in', err);
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
      {products.length === 0 ? <div>...Loading</div> :
        products.map(({ _id, name, image, description }) => (
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

export default Products;

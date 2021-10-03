/* eslint-disable @next/next/no-img-element */
import Product from "./Product";

const ProductFeed = ({ products }) => {
  console.log(products);
  return (
    <div className="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols- md:-mt-52">
      {products.slice(0, 4).map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))}
      <img
        src="https://links.papareact.com/dyz"
        alt="banner-image"
        className="col-span-full"
      />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
      {products.slice(5, products.length).map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductFeed;

import { useEffect } from "react";
import Product from "./Product";
import { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const product = await response.json();
    setProducts(product);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className='w-full h-screen bg-blue-50 overflow-y-scroll grid gap-2 p-2 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2'>
      {products.length > 0 &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </section>
  );
};

export default ProductList;

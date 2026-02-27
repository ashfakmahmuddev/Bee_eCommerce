import React from "react";
import Container from "../commonUi/Container";
import { products } from "../../data/data";
import Product from "../commonUi/Product";

const NewArrivals = () => {
  return (
    <div className="pb-15">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          New Arrivals
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-7.5 gap-y-10">
          {products.map((product) => (
            <Product
              key={product.id}                    // must for list
              image={product.image}
              title={product.title}
              price={product.price}
              onAddToCart={(item) => {
                console.log("Added to cart:", item);
                // এখানে cart logic যোগ করো (zustand/context)
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;

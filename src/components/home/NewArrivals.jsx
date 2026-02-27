import React from "react";
import Container from "../commonUi/Container";
import { products } from "../../data/data";
import Product from "../commonUi/Product";

const NewArrivals = () => {
  return (
    <div className="pb-15">
      <Container>
        <div className="text-center uppercase">
          <h4 className="font-light">Our Products</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">New Arrivals</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-7.5 gap-y-10">
          {products.map((product) => (
            <Product
              key={product.id}
              {...product}                      // ← এই লাইনটা সবচেয়ে গুরুত্বপূর্ণ
              onAddToCart={(item) => {
                console.log("Added to cart:", item);
                // পরে cart state update করো
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
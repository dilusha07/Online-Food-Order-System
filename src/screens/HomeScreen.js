import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fecthData();
  }, []);
  return (
    <div>
      <div className="row center">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import data from "./data";
import Product from "./components/Product";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              Spice
            </a>
          </div>
          <div>
            <a href="cart.html">My Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <main>
          <div>
            <div className="row center">
              {data.products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

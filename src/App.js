import React, { Component } from "react";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import productData from "./data/productData";
import Products from "./Components/Products";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      cartAdd: [],
    };
    this.data = productData;
  }
  addToCart = (item) => {
    let cartAdd = this.state.cartAdd;
    this.setState({ cartAdd: cartAdd.concat(item) });
  };

  render() {
    const { cartAdd } = this.state;
    const subtotal = cartAdd.reduce((a, b) => a + b.price, 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    return (
      <div className="app">
        <div className="left">
          <h1>Garage Sale</h1>
          <Products data={this.data} addToCart={this.addToCart} />
        </div>
        <div className="right">
          <Cart cartAdd={cartAdd} subtotal={subtotal} tax={tax} total={total} />
          <Checkout total={total} />
        </div>
      </div>
    );
  }
}

export default App;

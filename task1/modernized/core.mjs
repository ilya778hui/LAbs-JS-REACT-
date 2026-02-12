// core.mjs - Core functionality: Product and Cart classes (Ch. 5, “Classes with Constructors, Getters, and Setters”)
// Converted to ES6 classes with private fields (#) for encapsulation

export class Product {
  #id;
  #name;
  #price;

  constructor(id, name, price) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
  }

  get id() { return this.#id; }
  get name() { return this.#name; }
  get price() { return this.#price; }
}

export class Cart {
  #items = [];

  addItem(product, quantity) {
    this.#items.push({ product, quantity }); // No change needed, but using const/let internally if expanded
  }

  getSubtotal() {
    return this.#items.reduce((total, { product, quantity }) => total + product.price * quantity, 0); // Modern reduce with destructuring
  }

  getTax(taxRate) {
    return this.getSubtotal() * taxRate;
  }

  getTotal(taxRate) {
    return this.getSubtotal() + this.getTax(taxRate);
  }
}
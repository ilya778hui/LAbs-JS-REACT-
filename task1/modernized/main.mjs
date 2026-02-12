// main.mjs - Main application file (Ch. 5, “Module Objects”)
// Using import * as for Module Object pattern where appropriate

import * as Config from './config.mjs'; // Module Object pattern
import { formatPrice } from './utils.mjs';
import { Product, Cart } from './core.mjs';

const cart = new Cart();
const p1 = new Product(1, 'Widget', 10.99);
cart.addItem(p1, 2);

console.log(`Total: ${formatPrice(cart.getTotal(Config.taxRate))}`); // Template literal
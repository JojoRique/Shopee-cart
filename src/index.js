import * as CartService from "./services/cart.js"
import createItem from "./services/item.js"

const MyCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99,1)
const item2 = await createItem("hotwheels lamborghini", 39.99,3)

//adicionando 2 itens ao carrinho
await CartService.additem(MyCart, item1);
await CartService.additem(myWhishList, item2);

//deletando os itens
//await CartService.deleteItem(MyCart,item2.name);
//await CartService.deleteItem(MyCart, item1.name);
await CartService.displaycart(MyCart);

console.log("Shopee Cart TOTAL IS:")
await CartService.calculateTotal(MyCart);


//quais ações meu carrinho pode fazer?



//casos de uso
//adicionar item no carrinho
async function additem(userCart, item){
    userCart.push(item);
}

//calcular o total
async function calculateTotal(userCart){
    console.log("\n Shopee Cart TOTAL IS: ")

    const result = userCart.reduce((total, item)=> total + item.subtotal(),0);
    console.log(`🎁Total: ${result}`)
}

//deletar item do carinho
async function deleteItem(userCart,Name){
    const index = userCart.findIndex((item)=> item.name === Name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}


//remover um item diminui um item
async function removeItem(userCart, index){

}

async function displaycart(userCart){
console.log("Shopee cart list:")
userCart.forEach((item, index) =>{
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal =  ${item.subtotal()}`);
})
}

export {
    additem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart
}
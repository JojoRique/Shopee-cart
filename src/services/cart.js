//quais ações meu carrinho pode fazer?



//casos de uso
//adicionar item no carrinho
async function additem(userCart, item){
    userCart.push(item);
}

//calcular o total
async function calculateTotal(userCart){
    return userCart.reduce((total, item)=> total + item.subitem(), 0);
}

//deletar item do carinho
async function deleteItem(userCart,Name){

}


//remover um item diminui um item
async function removeItem(userCart, index){

}

export {
    additem,
    calculateTotal,
    deleteItem,
    removeItem
}
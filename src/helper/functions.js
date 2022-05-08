const shorten =(title)=>{
    const splitTitle = title.split(" ")
    return `${splitTitle[0]} ${splitTitle[1]}`
}

const isInCart =(state,id)=>{
     return  !!state.selectItems.find(item=> item.id === id)

}

const quantityCount =(state,id)=>{
    const index = state.selectItems.findIndex(item=> item.id === id)
    if (index === -1){
        return false
    }else {
        return state.selectItems[index].quantity
    }
}

const FavIsSelected =(state,id)=>{
    return !!state.favoriteItems.find(item=> item.id === id)

}

export {shorten,isInCart,quantityCount,FavIsSelected}
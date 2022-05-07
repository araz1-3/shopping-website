const shorten =(title)=>{
    const splitTitle = title.split(" ")
    const newTitle = `${splitTitle[0]} ${splitTitle[1]}`
    return newTitle
}

const isInCart =(state,id)=>{
    const result = !!state.selectItems.find(item=> item.id === id)
    return result
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
    const Isin = !!state.favoriteItems.find(item=> item.id === id)
    return Isin
}

export {shorten,isInCart,quantityCount,FavIsSelected}
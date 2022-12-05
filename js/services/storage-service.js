function saveToStorage(key,val){
    const str=JSON.stringify(val)
    localStorage.setItem(key, str)
}

function updateStorage(){
    
}

function clearStorage(){

    localStorage.clear()
}
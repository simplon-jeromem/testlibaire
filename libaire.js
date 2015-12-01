function byId(id){
 return document.getElementById(id) ;  
}
function byTag(tag){
   return document.getElementsByTagName(tag);
}
function byClass(nomeclass){
    var elements= document.getElementsByClassName(nomeclass);
    return Array.prototype.slice.call(elements);
    
}
function addClass(){
    
}
function removeClass(){
    
}
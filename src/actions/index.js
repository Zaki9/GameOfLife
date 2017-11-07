export function positionToChange (arr ){
return {

  type : 'POSITIONOFELEMENT' ,
  arr

}
}


export function changeDimension(x,y){
   return {

   type : 'DIMENSION' ,
   x ,
   y ,
   

  }
}
export function clearall(){
   return {
    type : 'CLEARALL'
  }
}

export function setMode(mode){
  return{
    type:'SETMODE' ,
    mode
  }
}

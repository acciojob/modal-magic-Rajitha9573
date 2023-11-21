//your JS code here. If required.
const btnElement =document.getElementById("openModel");
const boxModel = document.getElementById("boxModel") ;
btnElement.addEventListener("click", ()=>{
	boxModel.style.display="flex";
})
const closeElement = document.getElementById("close") ;
closeElement.addEventListener("click", ()=>{
	boxModel.style.display="none";
})
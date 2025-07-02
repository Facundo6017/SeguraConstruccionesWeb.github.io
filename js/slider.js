const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection= document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRigth())

setInterval(() => {
    moveToRigth()
}, 4000);

let operacion = 0,counter=0,widthImg = 100/sliderSection.length;

function moveToRigth(){
    if(counter>=sliderSection.length-1){
        operacion=0;
        counter=0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .7s";   
}
function moveToLeft(){
    counter--;
    if(counter<0){
        counter = sliderSection.length-1;
         operacion = widthImg*(sliderSection.length-1);
         slider.style.transform= `translate(-${operacion}%)`;
         slider.style.transition = "none";
         return
    }
    operacion = operacion - widthImg;
    slider.style.transform= `translate(-${operacion}%)`;
    slider.style.transition = "all ease .7s";
}
var tam=document.querySelector("#tamaño");
let cant=document.querySelector("#cantidad");
var refresco=document.querySelector("#refresco");
var papas=document.querySelector("#papas");
var alitas=document.querySelector("#alitas");
var valor=document.querySelector("#valor");
var res=document.querySelector("#res");
var uno=document.querySelector("#uno")
var dos=document.querySelector("#dos")
var tres=document.querySelector("#tres")

tam.onchangue=()=>{calcular()}
cant.onchangue=()=>{calcular()}
refresco.onchangue=()=>{calcular()}
papas.onchangue=()=>{calcular()}
alitas.onchangue=()=>{calcular()}
uno.onchangue=()=>{calcular()}
dos.onchangue=()=>{calcular()}
tres.onchangue=()=>{calcular()}

const calcular=()=>{ n=parseInt(cant.value);
    valor.innerHTML=cant.value;
    let costoPizza=0; 
    let costoextra=0;
    let total=0; 
    let extras=0;
    switch(tam.value){
        case "individual":costoPizza=100;break;
        case "grande":costoPizza=120;break;
        case "familiar":costoPizza=150;break;
        case "jumbo":costoPizza=180;break;

    }
    if(refresco.checked){
        extras+=40;
    }
    if(papas.checked){
        extras+=50;
    }
    if(alitas.checked){
        extras+=75;
    }
    if(uno.checked){
        costoextra+=0;
    }
    if (dos.checked){
        costoextra+=20;
    }
    if (tres.checked){
        costoextra+=35;
    }
    costoPizza=costoPizza+costoextra;
 total=(costoPizza*n)+extras;
 res.innerHTML=total.toFixed(2);
}
/*let arreglo_string =["jesus",'jose', 'javier','rios'];
console.log(arreglo_string)
    
let arreglo_Int= [25,5,8.9];
console.log(arreglo_Int)

let arreglo_compusto= [["jesus",25],["jose",55],["negro",55]];
console.log(arreglo_compusto)
/******************************************* */
/*let lista = [["camisas", 5.97], ["pantalon", 50], [("Medias", "45")],[("Medias", "85")]];
console.log(lista);*/

/*let variblearrego = [ 10,12,19,56]
               indices:  0  1  2  4
let suma =[20,30,10]
suma =suma[0]+suma[1]+suma[2]
console.log(suma); //esto da 60/*

let sumar =[[50,30,10],[20,50,10],[10,30,10]];
let operacion= sumar[0][1]+suma[1]+[2];
console.log(operacion); //esto da 30+50=80
/* ************************************************************ */
/* actualizar un arreglo*/

/*let saldo=[20,30,40,50];
//para cambiar 50 por 10 o cualquira

saldo [3]=10;
saldo [0]="hola";
/* ************************************************* */
/*console.log( saldo); // al correrlo debe haber let saldo=[hola,30,40,10];*/

//arreglos anidado o multidimencionales*/

/*arreglo let cantidad =[[50,30,10],[20,50,10],[10,30,10]];
//indices                       0          1          2
//indice interno         0  1  2     0  1  2   0   1  2

console.log(cantidad[1][2]); // asi selecciono un bloque y su contenido 
//indice 1 y su sub  indice 2=10

/*let sumando= cantidad[0][0]+cantidad[1][0];// se sumaron 2 arreglos
console.log(sumando)//veo la suma de 2 arrays 
console.log(cantidad[0]);// veo un arrays en espesifico
console.log(cantidad[0][1]);// veo lo que contiene un arrays internamente*/
//************************************************************* */
/*var casa =[[20,30][50,20]][[20,30][50,20]];
document.write(casa [1][1]); incognita*/

/* *************************************************** */
/*.Pushr()*//* con punto*/

/*let nombres =["jesus",'jose', 'javier'];
console.log( nombres);

nombres.push("Rios", " castillo"); /* se agregan elementos al arrays

console.log( nombres);*/
/* ****************************************************** */

/* .pop() eliminar el ultimo elemento de una array*/

/*let estaciones =["invierno",'otoño', 'primavera','verano'];
console.log( estaciones);
estaciones.pop('verano' )
console.log( estaciones);*/
/* *************************************************************** */
/* .shift() eliminar el primer  elemento de una array*/

/*let estaciones =["invierno",'otoño', 'primavera','verano'];
console.log( estaciones);
estaciones.shift("invierno")
console.log( estaciones);/* se elimino invierno*/
/* ******************************************* */

/* .unshift() agraga al princippio un array*/

/*let estaciones =["invierno",'otoño', 'primavera','verano'];
console.log( estaciones);
estaciones.unshift("invierno2")
console.log( estaciones);/* se elimino invierno*/

/* ******************************************* 
let miListaDeCompras=[["cerial",3], ["leche",2],["galletas",4],["panes",8],
                      ["jugo",4]]; 
console.log(miListaDeCompras);

console.log("voy a comprar " + miListaDeCompras[0][0] + " unidades de " 
+ miListaDeCompras [3][1]  +  "." )*/
/******************************************************/
//con length puedo ver cuanto elementos hay en el array
/*let amigos = [ 'carlos','jesus','jose'];
console.log("tengo " + amigos.length + " amigos en USA");

//cambiar rl ultimo elemento del array*/

//let amigos = [ "carlos","jesus","jose"];
//amigos[ amigos.length]="Rios"
//console.log( amigos);
//console.log(amigos.length);
//amigos.push="rodrigues"
//console.log(amigos);
/*********agregar  mas elementos   */
// amigos.push("Cardona","rolenzo","desy");
//console.log(amigos);
/************************************* */
/*Eliminar el ultimo elemento del array con .pop*/
 /*amigos.push("Cardona","rolenzo","desy");
 
 amigos.pop();
 console.log(amigos);
 /* **********************************/
 /* juntar mas de un arreglo*/
 /*let amigos1=["michael","gloria","rosa"]
 let amigos2 = [ "jonas","daniel","maria"];

 let amigos3=amigos1.concat(amigos2);
 console.log( amigos3);*/

 /* unir 2 arregloes*/
/*let dato1=[[10,20,30],[20,30,50]]
let dato2=[[10,60,30],[90,20,50]]
let datosUnidos=dato1. concat(dato2);
console.log(datosUnidos); 

/* ********************************************/
/*join() para agrgar elementos a cada elemento del los arrays*/ 

/*let dato1=[[10,20,30],[20,30,50]]
console.log(dato1.join(" : "))
console.log(datos1); */

/*let dato1=[10,20,30];
console.log(dato1.join(" : "))
console.log(datos1); 
/************************************************* */
/*arreglar alfabeticamente un arreglo con .sort()*/

/*let data = [20, 30, 50, 40];

let suma;
suma = data[0] + data[3];
console.log(suma);*/

/* ************************************************ */

/*let data=["carlos", "Adrian","bairon"];
let datas= data.sort();
console.log(datas);/* aparece ordenado en la terminal*/

/* **************************************************** */
let nombre = 
let data = [20,25,20,30];
//console.log(data[0] + " " + data[1] + " " + data[3]);

if ( data[0]== data[1])
        { console.log(data[0] + data[1])}
else{ console.log("no  eres carlos");}



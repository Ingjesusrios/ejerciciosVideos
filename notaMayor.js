//document.write("mensaje por pantallas: " );
var mayor, menor;


for (var i=1;i<=3;i++){
    var nota=prompt("ingrese una nota");
  // var nota=parseFloat(prompt("mensaje por pantallas: " ));

if (i==1) 
    {mayor=nota;
    menor=nota;}
else
{if (mayor<nota)
    {mayor=nota;}

    if (mayor>nota)
    { moyor=nota;}
    
}
}

document.write("nota Mayor"+mayor);
document.write("<br>");
document.write("nota menor"+menor);
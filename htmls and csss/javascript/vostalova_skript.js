function pozdrav (){
alert("Zdareeec");
}

function test_veku() {

   let vek=parseInt(prompt("KOlik ti je let?"));
   if (vek < 18) {
   piskoviste.innerHTML=("<h1 style='color:red'>Jdi pryč!</h1>");
   piskoviste.style.backgroundColor = "green";
}
else{
piskoviste.innerHTML += "<p> tahák lol </p>";
}
}

function funkce2() {
   let odpoved = prompt("Best předmět? (Nápověda: jen a pouze M/Čj.)");
   if (odpoved == "M/Čj") {
      piskoviste.innerHTML = "správně";
   }
   else {
      piskoviste.innerHTML += "boo you whore";
   }
}



function funkce3() {
   let odpoved = vstupni_pole.value;
   if (odpoved == "M/Čj") {
      piskoviste.innerHTML = "správně";
   }
   else {
      piskoviste.innerHTML += "španěě";
   }
}

function funkce4() {
   let cisla = vstupni_pole_2.value.split(" ");
let cisla_max = Math.max(...cisla);
piskoviste.innerHTML = "Maximum je: "+cisla_max;
let cisla_min = Math.min(...cisla);
piskoviste.innerHTML += ", a minimum je: "+cisla_min;

let pocet = cisla.length;
//alert(pocet);
let soucet = 0;
//piskoviste.innerHTML += "<br>soucet: "+soucet+ pocet: "+pocet+"
for (let i=0; i<pocet; i++) {
soucet += parseInt(cisla[i]);
//piskoviste.innerHTML += "<br>i: "+i+" soucet:"+soucet+""

}
let prumer=soucet/pocet;
piskoviste.innerHTML += ", průměr je " +prumer;

 }



 function funkce5() {
   let aktualni_cas = new Date();
   let tyden = ["neděle", "pondělí","úterý", "st", "čt", "pá", "so","ne"]
 let den_v_tydnu = tyden[aktualni_cas.getDay()]
piskoviste.innerHTML = "Dnes je "+den_v_tydnu+". (FREE ROBUXY NA https://www.google.com/search?q=nohy)"


}



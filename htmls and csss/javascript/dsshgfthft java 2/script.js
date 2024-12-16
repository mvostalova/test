function button_change(button) {
    if (button == 1) {
        document.getElementById("inputDiv1").innerHTML = '<input type="button" value="Ne", id="btn2", style="width: 100%; background-color: red; color: green;", onmouseover="button_change(0)"></input>';
        document.getElementById("inputDiv2").innerHTML = '<input type="button" value="Ano", id="btn1", style="width: 100%; background-color: green; color: red; float: right;", onclick="alert(\'DĂ­ky\')">';
    }
    else if (button == 0) {
        document.getElementById("inputDiv2").innerHTML = '<input type="button" value="Ne", id="btn2", style="width: 100%; background-color: red; color: green;", onmouseover="button_change(1)"></input>';
        document.getElementById("inputDiv1").innerHTML = '<input type="button" value="Ano", id="btn1", style="width: 100%; background-color: green; color: red; float: right;", onclick="alert(\'DĂ­ky\')">';
    }    
}
/*
function askAge() {
    alert('Alert');
    var confirmation = confirm("UĹľ vĂˇm bylo 18?");
    if (!confirmation) {
        window.location.href = "./401.html";
        console.log(confirmation);
    }
}*/

function checkTrueFalseAnsver01(){
    var ansver = document.getElementById('cityAnsver').value;
    if (ansver == 'Brno' || ansver == 'brno'){
        alert("OdpovÄ›ÄŹ " + ansver + " je\n\nSPRĂVNÄš");
    }
    else{
        alert("OdpovÄ›ÄŹ " + ansver + " je\n\nĹ PATNÄš");
    }
}

function calculate(){
    var a = parseInt(document.getElementById("number0").value);
    var b = parseInt(document.getElementById("number1").value);
    var c = parseInt(document.getElementById("number2").value);
    var d = parseInt(document.getElementById("number3").value);
    var e = parseInt(document.getElementById("number4").value);
    var f = parseInt(document.getElementById("number5").value);
    var g = parseInt(document.getElementById("number6").value);
    var h = parseInt(document.getElementById("number7").value);
    var i = parseInt(document.getElementById("number8").value);
    var j = parseInt(document.getElementById("number9").value);
    var ansvers = [];
    ansvers.push(a, b, c, d, e, f, g, h, i, j);
    //alert(ansvers);
    /*for (var i = 0; i < 10; i++){
        ansvers.push(document.getElementById("number" + String(i)).value);
        alert(ansvers.push(document.getElementById("number" + String(i)).value))
    }*/
    var ratiocount = 0
    for (var i = 0; i < 10; i++){
        ratiocount += ansvers[i];
    }
    ratiocount = ratiocount / 10;
    var maximum = Math.max(a, b, c, d, e, f, g, h, i, j);
    var minimum = Math.min(a, b, c, d, e, f, g, h, i, j);
    alert("PrĹŻmÄ›r: " + ratiocount + "\nmaximum: " + maximum + "\nminimum: " + minimum)
}

function solveEquation(sq, ln, cn){
    var discriminant = ln * ln + (-4) * sq * cn;
    if (discriminant < 0){
        alert("Rovnice " + sq + "X^2 + " + ln + "X + " + cn + " = 0 nemĂˇ Ĺ™eĹˇenĂ­.");
        return ["false", "false"];
    }
    else if (discriminant > 0){
        var x1 = (-ln + Math.sqrt(discriminant)) / (2 * sq);
        var x2 = (-ln - Math.sqrt(discriminant)) / (2 * sq);
        alert("Rovnice " + sq + "X^2 + " + ln + "X + " + cn + " = 0 mĂˇ tyto koĹ™eny:\nX1 = " + x1 + "\nX2 = " + x2);
        return [x1, x2];
    }
    else if (discriminant == 0){
        var x = (-ln) / (2 * sq);
        alert("Rovnice " + sq + "X^2 + " + ln + "X + " + cn + " = 0 mĂˇ tento dvojitĂ˝ koĹ™en:\nX  = " + x);
        return [x, x];
    }
}



function drawFunctGraph(sq, ln, cn) {
    var canvas = document.getElementById("canvas");
    if (null==canvas || !canvas.getContext) return;

    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    var axes={}, ctx=canvas.getContext("2d");
    axes.x0 = .5 + .5*canvas.width;
    axes.y0 = .5 + .5*canvas.height;
    axes.scale = 20;
    axes.doNegativeX = true;
   
    showAxes(ctx, axes);
    funGraph(ctx, axes, "rgb(255,0,0)", 2, sq, ln, cn); 
}
   
function funGraph (ctx,axes,color,thick, sq, ln, cn) {
    var xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
    var iMax = Math.round((ctx.canvas.width-x0)/dx);
    var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
    ctx.beginPath();
    ctx.lineWidth = thick;
    ctx.strokeStyle = color;
   
    for (var i=iMin;i<=iMax;i++) {
     xx = dx*i; yy = scale*(sq * (xx/scale * xx/scale) + ln * (xx/scale) + cn);
     if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
     else         ctx.lineTo(x0+xx,y0-yy);
    }
    ctx.stroke();
}
   
function showAxes(ctx,axes) {
    var x0=axes.x0, w=ctx.canvas.width;
    var y0=axes.y0, h=ctx.canvas.height;
    var xmin = axes.doNegativeX ? 0 : x0;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)"; 
    ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);
    ctx.moveTo(x0,0);    ctx.lineTo(x0,h);
    ctx.stroke();
}


function solve(){
    var square = parseInt(document.getElementById("square").value);
    var linear = parseInt(document.getElementById("linear").value);
    var constant = parseInt(document.getElementById("constant").value);
    if (square == 0){
        alert("KVADRATICKĂť ÄŚLEN MUSĂŤ BĂťT NENULOVĂť")
    }
    else {
        var [x1, x2] = solveEquation(square, linear, constant);
        drawFunctGraph(square, linear, constant);
        if (x1 != "false" && x1 != x2){
            alert("Funkce Y = " + square + "X^2 + " + linear + "X + " + constant + " mĂˇ tyto prĹŻseÄŤĂ­ky s osou X:\n[" + x1 + "; 0]\n[" + x2 + "; 0]\na s osou Y:\n[0; " + constant + "]\nsouĹ™adnice vrcholu jsou:\n[" + (-linear)/(square * 2) + "; " + (square * (((-linear)/(square * 2)) * ((-linear)/(square * 2))) + linear * ((-linear)/(square * 2)) + constant) + "]");
        }

        else if (x1 == "false" && x2 == "false"){
            alert("Funkce Y = " + square + "X^2 + " + linear + "X + " + constant + " nemĂˇ prĹŻseÄŤĂ­k s osou X\na s osou Y mĂˇ tento:\n[0; " + constant + "]\nsouĹ™adnice vrcholu jsou:\n[" + (-linear)/(square * 2) + "; " + (square * (((-linear)/(square * 2)) * ((-linear)/(square * 2))) + linear * ((-linear)/(square * 2)) + constant) + "]");
        }

        else if (x1 == x2 && x1 != "false"){
            alert("Funkce Y = " + square + "X^2 + " + linear + "X + " + constant + " mĂˇ tento prĹŻseÄŤĂ­k s osou X:\n[" + x1 + "; 0]\na s osou Y:\n[0; " + constant + "]\nsouĹ™adnice vrcholu jsou:\n[" + (-linear)/(square * 2) + "; " + (square * (((-linear)/(square * 2)) * ((-linear)/(square * 2))) + linear * ((-linear)/(square * 2)) + constant) + "]");
        }
    }
}

function getDayFun(){
    var weekDays = ["nedÄ›le", "pondÄ›lĂ­", "ĂşterĂ˝", "stĹ™eda", "ÄŤtvrtek", "pĂˇtek", "sobota"];
    var months = ["ledna", "Ăşnora", "bĹ™ezna", "dubna", "kvÄ›tna", "ÄŤervna", "ÄŤervence", "srpna", "zĂˇĹ™Ă­", "Ĺ™Ă­jna", "listopadu", "prosince"]
    var today = new Date().getDay();
    var todayMonth = new Date().getMonth();
    var todayDate = new Date().getDate();
    var todayYear = new Date().getFullYear();
    document.getElementById("today").innerHTML = "Dnes je " + weekDays[today] + " " + todayDate + ". " + months[todayMonth] + " " + todayYear; 
    if (today == 0 || today == 6){
        document.getElementById("today").style.fontWeight = "bold";
    }
    if (todayMonth == 0 || todayMonth == 1 || todayMonth == 11){
        document.getElementById("infocolumn").innerHTML += '<img id="season" src="https://hitpoint.cz/wp-content/uploads/winter-lake.jpeg">';
        document.getElementById("season").style.width = "99%";
        document.getElementById("season").style.border = "2px solid lightblue";
    }
    else if (todayMonth == 2 || todayMonth == 3 || todayMonth == 4){
        document.getElementById("infocolumn").innerHTML += '<img id="season" src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210316134609-01-wisdom-project-spring.jpg">';
        document.getElementById("season").style.width = "99%";
        document.getElementById("season").style.border = "2px solid pink";
    }
    else if (todayMonth == 5 || todayMonth == 6 || todayMonth == 7){
        document.getElementById("infoclumn").innerHTML += '<img id="season" src="https://wallpaperaccess.com/full/6606130.jpg">';
        document.getElementById("season").style.width = "99%";
        document.getElementById("season").style.border = "2px solid sandybrown";
    }
    else if (todayMonth == 8 || todayMonth == 9 || todayMonth == 10){
        document.getElementById("infocolumn").innerHTML += '<img id="season" src="http://adminassets.devops.arabiaweather.com/sites/default/files/field/image/autumn-fallen-leaves.jpg">';
        document.getElementById("season").style.width = "99%";
        document.getElementById("season").style.border = "2px solid orange";
    }
}

function getDayFun02(){
    var weekDays = ["nedÄ›le", "pondÄ›lĂ­", "ĂşterĂ˝", "stĹ™eda", "ÄŤtvrtek", "pĂˇtek", "sobota"];
    var months = ["ledna", "Ăşnora", "bĹ™ezna", "dubna", "kvÄ›tna", "ÄŤervna", "ÄŤervence", "srpna", "zĂˇĹ™Ă­", "Ĺ™Ă­jna", "listopadu", "prosince"];
    var today = new Date().getDay();
    var todayMonth = new Date().getMonth();
    var todayDate = new Date().getDate();
    var todayYear = new Date().getFullYear();
    document.getElementById("output").innerHTML = "<p>Dnes je " + weekDays[today] + " " + todayDate + ". " + months[todayMonth] + " " + todayYear + "</p><br><br>"; 
}  

function checkInputs(isDivision){
    document.getElementById("num2").style = "none";
    if ((document.getElementById("num1").value && document.getElementById("num2").value) && !isDivision){
        return true;
    }
    else if ((document.getElementById("num1").value && document.getElementById("num2").value) && (document.getElementById("num2").value && isDivision)){   
        if (parseInt(document.getElementById("num2").value) != 0 && isDivision){
        return true;
        }
        else if (parseInt(document.getElementById("num2").value) == 0 && isDivision){
            document.getElementById("num2").focus();
            document.getElementById("num2").style.backgroundColor = "red";
        }
    }
    if (!document.getElementById("num1").value){
        document.getElementById("num1").focus();
    }
    else if (!document.getElementById("num2").value){
        document.getElementById("num2").focus();
    }
    return false;
}

function hasWhiteSpace(s) {
    return (/\s/).test(s);
}

function calAdd(){
    if (!(hasWhiteSpace(document.getElementById("num1").value))){
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        if (checkInputs(false)){
            document.getElementById("caloutput").innerHTML = num1 + num2;
            document.getElementById("history").innerHTML += "<p>" + num1 + " + " + num2 + " = " + (num1 + num2) + "</p>";
        }
    }
    else{
        alert("Do kaĹľdĂ©ho pole zadej jen jednu hodnotu.");
        document.getElementById("num1").focus();
    }
}
    
function calDeduct(){
    if (!(hasWhiteSpace(document.getElementById("num1").value))){
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        if (checkInputs(false)){
            document.getElementById("caloutput").innerHTML = num1 - num2;
            document.getElementById("history").innerHTML += "<p>" + num1 + " - " + num2 + " = " + (num1 - num2) + "</p>";
        }
    }
    else{
        alert("Do kaĹľdĂ©ho pole zadej jen jednu hodnotu.");
        document.getElementById("num1").focus();
    }
}
 
function calMultiply(){
    if (!(hasWhiteSpace(document.getElementById("num1").value))){
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        if (checkInputs(false)){
            document.getElementById("caloutput").innerHTML = num1 * num2;
            document.getElementById("history").innerHTML += "<p>" + num1 + " * " + num2 + " = " + (num1 * num2) + "</p>";
        }
    }
    else{
        alert("Do kaĹľdĂ©ho pole zadej jen jednu hodnotu.");
        document.getElementById("num1").focus();
    }
}

function calDivide(){
    if (!(hasWhiteSpace(document.getElementById("num1").value))){
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        if (checkInputs(true)){
            document.getElementById("caloutput").innerHTML = num1 / num2;
            document.getElementById("history").innerHTML += "<p>" + num1 + " / " + num2 + " = " + (num1 / num2) + "</p>";
        }
    }
    else{
        alert("Do kaĹľdĂ©ho pole zadej jen jednu hodnotu.");
        document.getElementById("num1").focus();
    }
}
 
function calRestDivide(){
    if (!(hasWhiteSpace(document.getElementById("num1").value))){
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        if (checkInputs(true)){
            document.getElementById("caloutput").innerHTML = parseInt(num1 / num2) + "  zb: " + num1 % num2;
            document.getElementById("history").innerHTML += "<p>" + num1 + " % " + num2 + " = " + parseInt(num1 / num2) + "  zb: " + num1 % num2 + "</p>";
       }
    }
    else{
        alert("do kaĹľdĂ©ho polĂ­ÄŤka zadej jen jednu hodnotu");
        document.getElementById("num1").focus();
    }
}

function histClear(){
    document.getElementById("history").innerHTML = "";
}

function calRadius(){
    if (document.getElementById("num2").value == false && document.getElementById("num1").value){
        var dat = document.getElementById("num1").value;
        var numStr = dat.split(" ");
        var nums = [];
        for (var i = 0; i < numStr.length; i++){
            nums.push(parseInt(numStr[i]));
        }
        var radCnt = 0;
        var i = 0;
        for (i; i < nums.length; i++){
            radCnt += nums[i];
        }
        document.getElementById("caloutput").innerHTML = radCnt / i;
        document.getElementById("history").innerHTML += "<p>Radius " + nums + " = " + (radCnt / i) + "</p>";
    }
    else{
        alert("ZadĂˇvej pouze do prvnĂ­ho polĂ­ÄŤka");
        document.getElementById("num1").focus();
        document.getElementById("num2").value = "";
    }
}

function calMax3(){
    if (document.getElementById("num2").value == false && document.getElementById("num1").value){
        var dat = document.getElementById("num1").value;
        var numStr = dat.split(" ");
        var nums = [];
        for (var i = 0; i < numStr.length; i++){
            nums.push(parseInt(numStr[i]));
        }
        var lar3 = [];
        if (nums.length < 3){
            lar3 = nums;

    document.getElementById("caloutput").innerHTML = lar3[0] + ", " + lar3[1] + ", " + lar3[2];
    document.getElementById("history").innerHTML += "<p>Max " + document.getElementById("num1").value + " = " + lar3 + "</p>";
        }
        else{
            var largest= 0;
            var index = 0;
            for (var j = 0; j < 3; j++){
                for (i = 0; i < nums.length; i++){
                    if (nums[i] > largest) {
                        largest = nums[i];
                        index = i;
                    }
                }
            lar3.push(largest);
            nums[index] = -9999999999999999999999999;
            index = 0;
            largest = -9999999999999999999999999;
            }
        document.getElementById("caloutput").innerHTML = lar3[0] + ", " + lar3[1] + ", " + lar3[2];
        document.getElementById("history").innerHTML += "<p>Max " + document.getElementById("num1").value + " = " + lar3 + "</p>";
        }
    }
    else{
        alert("ZadĂˇvej pouze do prvnĂ­ho polĂ­ÄŤka");
        document.getElementById("num1").focus();
        document.getElementById("num2").value = "";
    }
}

{
    function displayList1(e) {
    e.preventDefault();
    var x = document.querySelectorAll("#shop");
    for (i = 0; i < x.length;i++){
        x[i].style.display="block";
    }
    
}
function hideList1() {
    var b = document.querySelectorAll("#shop");
    for (i = 0; i < b.length;i++){
        b[i].style.display="none";
    }
    
}
function displayList2(e) {
    e.preventDefault();
    var x = document.querySelectorAll("#Services");
    for (i = 0; i < x.length;i++){
        x[i].style.display="block";
    }  
}
function hideList2() {
    var b = document.querySelectorAll("#Services");
    for (i = 0; i < b.length;i++){
        b[i].style.display="none";
    }
    
}
function displayList3(e) {
    e.preventDefault();
    var x = document.querySelectorAll("#Apple_Store");
    for (i = 0; i < x.length;i++){
        x[i].style.display="block";
    }
    
}
function hideList3() {
    var b = document.querySelectorAll("#Apple_Store");
    for (i = 0; i < b.length;i++){
        b[i].style.display="none";
    }
    
}
function displayList4(e) {
    e.preventDefault();
    var x = document.querySelectorAll("#val");
    for (i = 0; i < x.length;i++){
        x[i].style.display="block";
    }
    
}
function hideList4() {
    var b = document.querySelectorAll("#val");
    for (i = 0; i < b.length;i++){
        b[i].style.display="none";
    }
    
    }
}

{
    {
        var y = document.getElementById("sl");
    y.addEventListener("click", displayList1);

var a = document.getElementById("sl");
    a.addEventListener("dblclick", hideList1);}

{var y = document.getElementById("ser");
    y.addEventListener("click", displayList2);
    
 var a = document.getElementById("ser");
    a.addEventListener("dblclick", hideList2); }  
        
{var y = document.getElementById("as");
    y.addEventListener("click", displayList3);

var a = document.getElementById("as");
    a.addEventListener("dblclick", hideList3);}

{var y = document.getElementById("av");
    y.addEventListener("click", displayList4);

var a = document.getElementById("av");
    a.addEventListener("dblclick", hideList4);}

}
function dis(e) {
    e.preventDefault();
    var x = document.querySelectorAll(".navlink");
    console.log(x[0])
    for (i = 0; i < x.length;i++){
        x[i].style.display = "block";
        x.style.transition="2s";
    }
}
function ndis(f) {
    f.preventDefault();
    var x = document.querySelectorAll(".navlink");
    console.log(x[0])
    for (i = 0; i < x.length;i++){
        x[i].style.display = "none";
    }
}
var y = document.getElementById("yes");
y.addEventListener("click", dis)
var k = document.getElementsByClassName("xmark");
k.addEventListener("click", ndis);
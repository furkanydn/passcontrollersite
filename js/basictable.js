var modal = document.getElementById('pop-up');
var  btn = document.getElementById("btn-add");
var span = document.getElementById("closex");

btn.onClick = function () {
    modal.style.display ="block";
}

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}
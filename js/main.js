var visadBild = 0;
let allaBilder = ["../img/300x300.png", "../img/450x450.png", "../img/img-placeholder.png", "../img/logo.png", "../img/park.jpeg", "../img/park.png", "../img/present-placeholder.png" ]
function byt() {
    visadBild++;
    if (visadBild == 7) {
        visadBild = 0
    }
    document.getElementById("solutionimage1").src = allaBilder[visadBild]
}


let visa  =0;
function navhide() {
    var x = document.getElementsByClassName("navbar")[0];
    
    if(visa == 0) {
        x.style.visibility = "visible"
        visa = 1 
    }
    else {
        x.style.visibility = "hidden"
        visa = 0
    }
    
}

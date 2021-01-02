// INDEX PAGE - MAIN - GESTION DES PARAGRAPHES
// FUNCTION TO DEPLOY THE <p>

var p_number;

function developing (p_number) {

    if (p_number===1) {
        var element = document.getElementById("index-main-p1");
    element.classList.remove("p-nextstep1");
    } else if (p_number===2) {
        var element = document.getElementById("index-main-p2");
        element.classList.remove("p-nextstep2");
    } else {
        var element = document.getElementById("index-main-p3");
        element.classList.remove("p-nextstep3");
    }
}



// FUNCTION TO CLOSE THE <p>
function closing (p_number) {
    if (p_number===1) {
        var element = document.getElementById("index-main-p1");
    element.classList.add("p-nextstep1");
    } else if (p_number===2) {
        var element = document.getElementById("index-main-p2");
        element.classList.add("p-nextstep2");
    } else {
        var element = document.getElementById("index-main-p3");
        element.classList.add("p-nextstep3");
    }
}
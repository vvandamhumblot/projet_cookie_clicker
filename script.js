var compteur_cookie = 0
var click_base = 1
var prerequis_up1 = 10

var Nombre_cookie = document.getElementById("le_cookie")
Nombre_cookie.addEventListener("click", le_click)

var upgrade1 = document.getElementById("upgrade1")
upgrade1.addEventListener("click", upgrade1_click)

var prix_upg1 = document.getElementById("prix-up1")
prix_upg1.addEventListener("mouseover", prix_upgrade1)

var upgrade2 = document.getElementById("upgrade2")
upgrade2.addEventListener("click", upgrade2_click)

var upgrade3 = document.getElementById("upgrade3")
upgrade3.addEventListener("click", upgrade3_click)

function le_click(evenement) {
    compteur_cookie += click_base
    evenement.target.innerHTML = compteur_cookie + " cookie";
}

function upgrade1_click(evenement) {
    //boost de 2 click
    if (compteur_cookie >= prerequis_up1) {
        click_base = click_base + 2;
        evenement.target.innerHTML = "Amélioration achetée !";
        setTimeout(() => {
            evenement.target.innerHTML = "le clique est de " + click_base + " par clique";
        }, 5000);
        prerequis_up1 = prerequis_up1 * 2;
        setTimeout(() => {
            evenement.target.innerHTML = "l'amélioration coute " + prerequis_up1 + " cookie";
        }, 5000);
        setTimeout(() => {
            evenement.target.innerHTML = "Amélioration 1";
        }, 5000);
    } else {
        evenement.target.innerHTML = "vous n'avez pas assez de cookie !!";
        setTimeout(() => {
            evenement.target.innerHTML = "l'amélioration coute " + prerequis_up1 + "cookie";
        }, 5000);
        setTimeout(() => {
            evenement.target.innerHTML = "Amélioration 1";
        }, 5000);
    };

};

function prix_upgrade1(evenement) {
    evenement.target.innerHTML = "l'amélioration coute " + prerequis_up1 + " cookie";
}
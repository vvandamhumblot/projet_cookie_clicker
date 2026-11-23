var compteur_cookie = 0
var click_base = 1
var prerequis_up1 = 10
var prerequis_up2 = 125
var prerequis_up3 = 1575

var Nombre_cookie = document.getElementById("le_cookie")
Nombre_cookie.addEventListener("click", le_click)
Nombre_cookie.addEventListener("mouseover", update_cookie)

var upgrade1 = document.getElementById("upgrade1")
upgrade1.addEventListener("click", upgrade1_click)

var prix_upg1 = document.getElementById("prix-up1")
prix_upg1.addEventListener("mouseover", prix_upgrade1)

var upgrade2 = document.getElementById("upgrade2")
upgrade2.addEventListener("click", upgrade2_click)

var prix_upg2 = document.getElementById("prix-up2")
prix_upg2.addEventListener("mouseover", prix_upgrade2)

var prix_upg3 = document.getElementById("prix-up3")
prix_upg3.addEventListener("mouseover", prix_upgrade3)

var upgrade3 = document.getElementById("upgrade3")
upgrade3.addEventListener("click", upgrade3_click)

var total_click = document.getElementById("click-totale")
total_click.addEventListener("mouseover", update_click)

// function du compteur du cookie

function le_click(evenement) {
    compteur_cookie += click_base
    evenement.target.innerHTML = compteur_cookie + " cookie";
}

//upgrade n°1

function upgrade1_click(evenement) {
    //boost de 2 click
    if (compteur_cookie >= prerequis_up1) {
        click_base = click_base + 2;
        compteur_cookie -= prerequis_up1;
        evenement.target.innerHTML = "Amélioration achetée !";
        prerequis_up1 = prerequis_up1 * 2;
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

function update_cookie(evenement) {
    evenement.target.innerHTML = compteur_cookie + " cookie"
}

// upgrade n°2

function upgrade2_click(evenement) {
    // boost de 10 click
    if (compteur_cookie >= prerequis_up2){
        click_base = click_base + 10;
        compteur_cookie -= prerequis_up2
        prerequis_up2 = prerequis_up2 * 2;
        setTimeout(() => {
            evenement.target.innerHTML = "Amélioration 2";
        }, 5000);
    } else {
        evenement.target.innerHTML = "vous n'avez pas assez de cookie !!";
        setTimeout(() => {
            evenement.target.innerHTML = "l'amélioration coute " + prerequis_up2 + "cookie";
        }, 5000);
        setTimeout(() => {
            evenement.target.innerHTML = "Amélioration 2";
        }, 5000);
    };

};

function prix_upgrade2(evenement) {
    evenement.target.innerHTML = "l'amélioration coute " + prerequis_up2 + " cookie";
}

function update_cookie(evenement) {
    evenement.target.innerHTML = compteur_cookie + " cookie";
}

function update_click(evenement) {
    evenement.target.innerHTML = "puissance du click : " + click_base;
}

function upgrade3_click(evenement) {
    // boost de 50 click
    if (compteur_cookie >= prerequis_up3){
        click_base = click_base + 50;
        compteur_cookie -= prerequis_up3
        prerequis_up3 = prerequis_up3 * 2;
        setTimeout(() => {
            evenement.target.innerHTML = "Amélioration 3";
        }, 5000);
    } else {
        evenement.target.innerHTML = "vous n'avez pas assez de cookie !!";
        setTimeout(() => {
            evenement.target.innerHTML = "l'amélioration coute " + prerequis_up3 + "cookie";
        }, 5000);
        setTimeout(() => {
            evenement.target.innerHTML = "Amélioration 3";
        }, 5000);
    };

};

function prix_upgrade3(evenement) {
    evenement.target.innerHTML = "l'amélioration coute " + prerequis_up3 + " cookie";
}
var compteur_cookie = 0
var click_base = 1

var Nombre_cookie = document.getElementById("le_cookie")
Nombre_cookie.addEventListener("click", le_click)

var upgrade1 = document.getElementById("upgrade1")
upgrade1.addEventListener("click", upgrade1_click)

var upgrade2 = document.getElementById("upgrade2")
upgrade2.addEventListener("click", upgrade2_click)

var upgrade3 = document.getElementById("upgrade3")
upgrade3.addEventListener("click", upgrade3_click)

function le_click(evenement) {
    compteur_cookie++
    evenement.target.innerHTML = compteur_cookie + " cookie";
}

// command promt untuk panggil menu diatas

function replaceName(){
    let nama = prompt("Halo, welcome to Our Club, what would you like we to call you?","Pro Player");
    document.getElementById("welcome-name").innerHTML = nama;
}
replaceName();
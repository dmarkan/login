
let dugme = document.querySelector("#dugme");
let dugme2 = document.querySelector("#dugme2");
let forma = document.querySelector(".forma");



dugme.addEventListener("click", function(){
    let ime = document.querySelector("#ime").value;
    let sifra = document.querySelector("#sifra").value;
    let sifra2 = document.querySelector("#sifra2").value;
if (sifra === sifra2) {
    alert("Šifre se poklapaju");
} else {
    alert("Šifre moraju da se poklapaju");
}
})

dugme2.addEventListener("click", function(){
    let ime = document.querySelector("#ime").value;
    let ime2 = document.querySelector("#ime2").value;
    let sifra = document.querySelector("#sifra").value;
    let sifra3 = document.querySelector("#sifra3").value;

if (sifra === sifra3 && ime === ime2) {
    alert("Uspešno si se ulogovao!");
} else {
    alert("Logovanje neuspešno, proveri podatke koje si uneo!");
}
})


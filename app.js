let div1 = document.getElementById('div12');

try {
    div1.innerHTML = "blablabla je sais y'a une faute";
}

catch (e) {
    alert('une erreur est survenue. Regarde ton objet ID, on sait jamais ;)');
}
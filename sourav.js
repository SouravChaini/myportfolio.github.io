var dn = document.getElementById('dn-toggle');
dn.onclick = function () {
    document.body.classList.toggle('darktheme');
    if (document.body.classList.contains('darktheme')) {
        dn.classList.remove('fa-moon')
        dn.classList.add('fa-sun')
    }
    else {
        dn.classList.remove('fa-sun')
        dn.classList.add('fa-moon')

    }
}

var ham = document.getElementById('hamburger');
ham.onclick = function () {
    document.getElementById('navbar-container').style.visibility='visible';
}
var closetab = document.getElementById('closetab');
closetab.onclick = function () {
    document.getElementById('navbar-container').style.visibility='hidden';
}

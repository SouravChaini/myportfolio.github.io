var dn = document.getElementById('dn-toggle');
dn.onclick = function () {
    document.body.classList.toggle('darktheme');
    if (document.body.classList.contains('darktheme')) {
        dn.classList.remove('fa-moon')
        dn.classList.add('fa-sun')
        document.getElementById('abtmebox').style.backgroundColor='var(--primary-color)';
        document.getElementById('abtmebox').style.color='white';
    }
    else {
        dn.classList.remove('fa-sun')
        dn.classList.add('fa-moon')
        document.getElementById('abtmebox').style.backgroundColor='white';
        document.getElementById('abtmebox').style.color='black';

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

var abt=document.getElementById('about');

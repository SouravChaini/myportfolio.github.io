var dn = document.getElementById('dn-toggle');
dn.onclick = function () {
    document.body.classList.toggle('darktheme');
    if (document.body.classList.contains('darktheme')) {
        dn.classList.remove('fa-moon')
        dn.classList.add('fa-sun')
        document.getElementById('contactbox1').style.backgroundColor='var(--primary-color)';
        document.getElementById('contactbox2').style.backgroundColor='var(--primary-color)';
        document.getElementById('contactbox3').style.backgroundColor='var(--primary-color)';
        document.getElementById('text').style.backgroundColor='var(--primary-color)';
        document.getElementById('email').style.backgroundColor='var(--primary-color)';
        document.getElementById('submit').style.backgroundColor='var(--primary-color)';
        document.getElementById('reset').style.backgroundColor='var(--primary-color)';
        document.getElementById('message').style.backgroundColor='var(--primary-color)';
    }
    else {
        dn.classList.remove('fa-sun')
        dn.classList.add('fa-moon')
        document.getElementById('contactbox1').style.backgroundColor='white';
        document.getElementById('contactbox2').style.backgroundColor='white';
        document.getElementById('contactbox3').style.backgroundColor='white';
        document.getElementById('text').style.backgroundColor='white';
        document.getElementById('email').style.backgroundColor='white';
        document.getElementById('submit').style.backgroundColor='white';
        document.getElementById('reset').style.backgroundColor='white';
        document.getElementById('message').style.backgroundColor='white';

    }
}

var ham = document.getElementById('hamburgercontact');
ham.onclick = function () {
    document.getElementById('navbar-container').style.visibility='visible';
}
var closetab = document.getElementById('closetab');
closetab.onclick = function () {
    document.getElementById('navbar-container').style.visibility='hidden';
}

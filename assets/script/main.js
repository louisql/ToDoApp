window.addEventListener('DOMContentLoaded', function() {

    let elForm = document.querySelectorAll('[data-js-form]');
    for (let i = 0, l = elForm.length; i < l; i++) {
        new Form(elForm[i]);
    }

    let elListe = document.querySelectorAll('[data-js-liste-taches]');
    for (let i = 0, l = elListe.length; i < l; i++) {
        new Liste(elListe[i]);;
        
    }

})
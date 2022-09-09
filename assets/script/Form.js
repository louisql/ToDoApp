let $i = 0;

class Form {
    constructor(el) {

        
        this._el = el;

        this._elBtn = this._el.querySelector('button');

        this._elTache = this._el.tache;
        this._elDescription = this._el.description;
        this._elRadio = this._el.radioBtn;

        this._elRequired = this._el.querySelectorAll('[required]');

        this._elListeTaches = document.querySelector('[data-js-liste-taches]')
        this._elcontainer = document.querySelector('[data-js-liste-taches-container]')
        
        this.init();
    }

    init() {

        this._elBtn.addEventListener('click', function (e) {
            e.preventDefault();
            this.checkRequired();
        }.bind(this));
    }





    checkRequired() {
        let tache = {
            nom: this._elTache.value,
            description: this._elDescription.value,
            priorite: this._elRadio.value
        },
            elTacheWrapper = this._el.querySelector('[data-js-tache-wrapper]'),
            elRadioWrapper = this._el.querySelector('[data-js-radio-wrapper]'),
            isValide = true;
        ;

        if (tache.nom == '') {
            this.ajoutErreur(elTacheWrapper);
            isValide = false;
        } else {
            if (elTacheWrapper.classList.contains('error')) {
                this.supprimeErreur(elTacheWrapper);
            }
        }

        if (tache.priorite == '') {
            this.ajoutErreur(elRadioWrapper);
            isValide = false;
        } else {
            if (elRadioWrapper.classList.contains('error')) {
                this.supprimeErreur(elRadioWrapper);
            }
        }

        if (isValide == true){
            taches.push(tache);
            this.injectTaches(tache);
            this.clearFields();
        } 

        //injecter éléments dans le DOM 

    }


    /**
 * Modification interface si erreur
 * @param {*} el
 */
    ajoutErreur(el) {
        el.classList.add('error');
    }


    /**
 * Faire revenir un champ non valide à valide
 * @param {*} el
 */
    supprimeErreur(el) {
        el.classList.remove('error');
    }

    /**
     * Nettoyage des champs lors de l'ajout d'une tache
     */
    clearFields(){
        this._elTache.value = '';
        this._elDescription.value = '';
        this._elRadio.value = '';

        for (let i = 0, l = this._elRadio.length; i < l; i++) {
            this._elRadio[i].checked = false;
        }
    }

    /**
     * Injection dans le DOM de la tâche créé
     */

    injectTaches(tache){
        let tacheDOM = `
                        <div class="containerListeTache" data-js-tache="${$i}">
                            <p>Tâche: ${tache.nom} - Importance: ${tache.priorite}</p>
                            <button data-js-afficher>Afficher le détail</button>
                            <button data-js-supprimer>Supprimer</button>
                        </div>
                        `;

        this._elcontainer.insertAdjacentHTML('beforeend', tacheDOM);
        $i++
        new Tache(this._elcontainer.lastElementChild)
    }


}



let $y = 0;

class Tache {
    constructor(el) {
        this._el = el;

        if (taches.length != 0) {
            this._elBtnAffich = this._el.querySelector('[data-js-afficher]');
            this._elBtnSupr = this._el.querySelector('[data-js-supprimer]');
            this._elListeTaches = document.querySelector('[data-js-liste-taches]');
            this._elcontainer = document.querySelector('[data-js-liste-taches-container]');
            this._elDetail = document.querySelector('[data-js-detail]');

            this._elDiv = this._el.querySelector('div');

            this._elDataset = this._el.dataset.jsTache;

            this.init();
        }
    }

    init() {
        this._elBtnAffich.addEventListener('click', function (e) {
            e.preventDefault();
            this.afficheDetail()
        }.bind(this));

        this._elBtnSupr.addEventListener('click', function (e) {
            e.preventDefault();
            this.supprTache();
        }.bind(this));
    }

    afficheDetail() {
        console.log('affiche')


        let detailDOM = `
                    Tâche: ${taches[this._elDataset].nom}<br>
                    Description: ${ (taches[this._elDataset].description !== '') ? taches[this._elDataset].description : "Aucune description" } <br>
                    Importance: ${taches[this._elDataset].priorite}<br>
                    `

        this._elDetail.innerHTML = detailDOM
    }

    supprTache() {

        console.log(taches);

        taches.splice(this._elDataset, 1)

        console.log(taches);
        let tacheDOM = ``;

        if (taches.length >= 1) {

            this._elcontainer.innerHTML = ``;

            for (let i = 0; i < taches.length; i++) {

                tacheDOM = `
            <div class="containerListeTache" data-js-tache="${i}">
                <p>Tâche: ${taches[i].nom} - Importance: ${taches[i].priorite}</p>
                <button data-js-afficher>Afficher le détail</button>
                <button data-js-supprimer>Supprimer</button>
            </div>
            `;

                this._elcontainer.insertAdjacentHTML('beforeend', tacheDOM);
                new Tache(this._elcontainer.lastElementChild);
                
            }

            $i = taches.length;
        }
        if (taches.length == 0) {
            this._elcontainer.innerHTML = tacheDOM;
            $i = 0;
        }
        


    }





}
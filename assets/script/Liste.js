class Liste {
    constructor (el){
        this._el = el;
        

        this._elBtnTriAlph = this._el.querySelector('[data-js-tri-alph]')
        this._elBtnTriImp = this._el.querySelector('[data-js-tri-importance]')
        this._elcontainer = document.querySelector('[data-js-liste-taches-container]');

        
        this.init();
    }

    init(){

        this._elBtnTriAlph.addEventListener('click', function(e){
            e.preventDefault();
            this.triAlph();
        }.bind(this))
        
        this._elBtnTriImp.addEventListener('click', function(e){
            e.preventDefault();
            this.triImp();
        }.bind(this))


    }

    triAlph(){
        
        if (taches.length != 0) {
            taches.sort((a ,b) => a.nom.localeCompare(b.nom));

            this.modificationDOM();
        }
    }

    triImp(){
        if (taches.length != 0) {
            taches.sort((a ,b) => a.priorite.localeCompare(b.priorite));
            this.modificationDOM();
        }
    }

    modificationDOM(){
        let tacheDOM = ``;

        this._elcontainer.innerHTML = tacheDOM;

            for (let i = 0; i < taches.length; i++) {
    
                tacheDOM = `
                <div class="containerListeTache" data-js-tache="${i}">
                    <p>Tâche: ${taches[i].nom} - Importance: ${taches[i].priorite}</p>
                    <button data-js-afficher>Afficher le détail</button>
                    <button data-js-supprimer>Supprimer</button>
                </div>
                `;

                this._elcontainer.insertAdjacentHTML('beforeend', tacheDOM);
                new Tache(this._elcontainer.lastElementChild)
            }

            $i = taches.length;

            
    }
}
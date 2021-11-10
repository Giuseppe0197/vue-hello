/* Stampare a schermo un messaggio all’interno di un h1,
utilizzando i data. */

/* andiamo a creare il contenitore tramite vue */

var titlePage = new Vue(

    {
        el: "#title",

        /* selezioniamo i data */

        data: {

            titleVue: "Quando vedi vue js per la prima volta",

            miaClasse: "blue",

            /* aggiungiamo un'immagine */

            image: "https://media0.giphy.com/media/37Fsl1eFxbhtu/200.gif"
        },

        /* facciamo una funzione per cambiare il colore del titolo */

        methods: {

            changeColor: function() {

                if(this.miaClasse === "blue"){

                    this.miaClasse = "red";

                } else if (this.miaClasse === "red") {

                    this.miaClasse = "green"

                } else {

                    this.miaClasse = "blue"

                }

            }

            

        }

    }

);

/* andiamo a creare un'altra sezione per far inserire il titolo all'utente */

var userTitle = new Vue (

    {
        
        el: "#yourTitle",

        data: {

            ownTitle: "",

            yourClass: "red"

        }

    }

)
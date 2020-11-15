


/*partie page d'accueil*/
const home = {
    template: `
    <div class="container-fluid p-0">
        <div class="row">
            <div class="col-md mx-auto">
                <div class="container-fluid p-0">
                <div id="demo" class="carousel slide carousel-fade" data-ride="carousel">
                <!-- Indicateurs -->
                <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                
                <!-- Carrousel -->
                <div class="carousel-inner fed-car">
                <div class="carousel-item active" data-interval="4000">
                <img src="assets/carroussel/livre2.jpg" alt="Carrousel slide 1" class="d-block w-100">
                </div>
                <div class="carousel-item" data-interval="2000">
                <img src="assets/carroussel/livre2.jpg" alt="Carrousel slide 2" class="d-block w-100">
                </div>
                <div class="carousel-item" data-interval="1000">
                <img src="assets/carroussel/livre2.jpg" alt="Carrousel slide 3" class="d-block w-100">
                </div>
                </div>
                
                <!-- Contrôles -->
                <a class="carousel-control-prev" href="#demo" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Précédent</span>
                </a>
                <a class="carousel-control-next" href="#demo" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Suivant</span>
                </a>
                </div>
                </div>
                
                <h1>La librairie qui vous redonne le gout de lire.</h1>
            </div>
        </div>

    </div>`,
};
/* fin partie page d'accueil*/

/* partie boutique*/
const boutique = {

    template:
        ` <div>
    <div class="row text-center">
        <div class="col-sm-8">
            <div class="row">
            <div class="col-sm-3 stx-justify" v-for="(livre) in librairie">
                <div class="card stx-cards" style="width: 18rem;">
                    <img :src="livre.couverture" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{livre.titre}}</h5>
                        <p class="card-text">date de parution :{{livre.datesortie}} <br> catégorie: {{livre.categorie}} <br> prix : {{livre.prix}}</p>
                        <a class="btn btn-light" v-on:click="ajoutpanier(livre)">acheter</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="panier">
                <p>panier<p>
                <div v-for="(livre) in panier">
                    <p>{{livre.titre}} {{livre.prix}}</p>
                </div>
            </div>
        </div>
    </div>
    </div>`,

    data: function () {
        return ({
            librairie: [
                { id: 1, titre: "One piece", categorie: "manga", couverture: "./assets/naruto1.jpg", datesortie: "16/01/2010", prix: "14.99" },
                { id: 2, titre: "two piece", categorie: "manga", couverture: "./assets/manga/naruto2.jpg", datesortie: "16/01/2012", prix: "12.99" },
                { id: 3, titre: "One piece", categorie: "manga", couverture: "./assets/manga/naruto3.jpg", datesortie: "16/01/2020", prix: "14.99" },
                { id: 4, titre: "two piece", categorie: "manga", couverture: "./assets/manga/naruto4.jpg", datesortie: "16/11/2007", prix: "12.99" },
                { titre: "One piece", id: 5, categorie: "manga", couverture: "./assets/manga/naruto5.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 6, categorie: "manga", couverture: "./assets/manga/naruto6.jpg", datesortie: "16/01/1983", prix: "12.99" },
                { titre: "One piece", id: 7, categorie: "manga", couverture: "./assets/manga/naruto7.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 8, categorie: "manga", couverture: "./assets/manga/naruto8.jpg", datesortie: "16/01/1985", prix: "12.99" },
                { titre: "One piece", id: 9, categorie: "manga", couverture: "./assets/manga/naruto9.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 10, categorie: "manga", couverture: "./assets/manga/naruto10.jpeg", datesortie: "16/01/1985", prix: "12.99" },
                /*10*/
                { titre: "One piece", id: 11, categorie: "roman", couverture: "./assets/roman/roman1.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 12, categorie: "roman", couverture: "./assets/roman/roman2.jpg", datesortie: "16/01/1985", prix: "12.99" },
                { titre: "One piece", id: 13, categorie: "roman", couverture: "./assets/roman/roman3.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 14, categorie: "roman", couverture: "./assets/roman/roman4.jpg", datesortie: "16/01/1985", prix: "12.99" },
                { titre: "One piece", id: 15, categorie: "roman", couverture: "./assets/roman/roman5.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 16, categorie: "roman", couverture: "./assets/roman/roman6.jpg", datesortie: "16/01/1985", prix: "12.99" },
                { titre: "One piece", id: 17, categorie: "roman", couverture: "./assets/roman/roman7.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 18, categorie: "roman", couverture: "./assets/roman/roman8.jpeg", datesortie: "16/01/1985", prix: "12.99" },
                { titre: "One piece", id: 19, categorie: "roman", couverture: "./assets/roman/roman9.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 20, categorie: "roman", couverture: "./assets/roman/roman10.jpeg", datesortie: "16/01/1985", prix: "12.99" },
                /*10*/
                { titre: "One piece", id: 21, categorie: "bande dessinée", couverture: "./assets/bd/bd1.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 22, categorie: "bande dessinée", couverture: "./assets/bd/bd2.jpg", datesortie: "16/01/1985", prix: "12.99" },
                { titre: "two piece", id: 23, categorie: "bande dessinée", couverture: "./assets/bd/bd3.jpg", datesortie: "16/01/1985", prix: "12.99" },
                { titre: "One piece", id: 24, categorie: "bande dessinée", couverture: "./assets/bd/bd4.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 25, categorie: "bande dessinée", couverture: "./assets/bd/bd5.jpg", datesortie: "16/01/1985", prix: "12.99" },
                { titre: "One piece", id: 26, categorie: "bande dessinée", couverture: "./assets/bd/bd6.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 27, categorie: "bande dessinée", couverture: "./assets/bd/bd7.jpg", datesortie: "16/01/1985", prix: "12.99" },
                { titre: "two piece", id: 28, categorie: "bande dessinée", couverture: "./assets/bd/bd8.jpg", datesortie: "16/01/1985", prix: "12.99" },
                { titre: "One piece", id: 29, categorie: "bande dessinée", couverture: "./assets/bd/bd9.jpg", datesortie: "16/01/1984", prix: "14.99" },
                { titre: "two piece", id: 30, categorie: "bande dessinée", couverture: "./assets/bd/bd10.jpg", datesortie: "16/01/1985", prix: "12.99" },
            ],
            panier: [{}]
        })
    },
    methods: {
        ajoutpanier(livre) {
            this.panier.push(livre);
        }



    }

}
/* fin partie boutique*/

/*  partie livre d'occasion*/
const occaz = {
    template: `<div> </div>`
};
/*  fin partie livre d'occasion*/

/*  partie contact*/
const contact = {// v-on:submit.prevent=""
    template: `<div>
    
    <form class="container-sm lex-contact" v-if="isshow">
    <div class="row justify-content-center">
      <div class="col-4">
        <label for="validation"><b><i>Nom</i></b></label>
        <input type="text" class="form-control" placeholder="nom">
      </div>
      <div class="col-4">
        <label for="validation"><b><i>Prénom</i></b></label>
        <input type="text" class="form-control" placeholder="prénom" />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4">
        <label for="validation"><b><i>E-mail</i></b></label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div class="col-4">
        <label for="validation"><b><i>Téléphone</i></b></label>
        <input type="text" class="form-control" placeholder="06...." />
      </div>
    </div>
    <div class="row was-validated justify-content-center">
      <div class="col-8 mb-3">
        <label for="validationTextarea"><b><i>Votre demande : </i></b></label>
        <textarea class="form-control is-invalid" id="validationTextarea" placeholder="votre commentaire ici"
          required></textarea>
          <button type="submit" v-on:click="isshow=!isshow" class="btn btn-warning">Envoyer</button>
      </div>
    </div>
  </form>
 
    </div>`,
    data: function () {
        return ({
            nom: "", prenom: "", email: "", telephone: "", message: "",
            isshow: true,
        })
    },
    methods: {

    }
};
/*  fin partie contact*/

/*   partie livre d'or*/
const goldbook = {
    template: `<div>
    <div class="row">
    <div class="col-sm-6">  
    <div class="component">
                <ul class="align">
                <li>
                    <figure class='book'>
                        <!-- Front -->
                        <ul class='hardcover_front'>
                            <li>
                                <div class="coverDesign blue">
                                    <h1>Livre</h1>
                                    <p>d'or</p>
                                </div>
                            </li>
                            <li></li>
                        </ul>
                        <!-- Pages -->
                        <ul class='page'>
                            <li></li>
                            <li>
                                <a class="btn-comment" href="#">laisser un commentaire</a>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <!-- Back -->
                        <ul class='hardcover_back'>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul class='book_spine'>
                            <li></li>
                            <li></li>
                        </ul>
                            </figure>
                        </li>
                    </ul>
    </div>
    </div>
    
        <div class="col-sm-6">
        <h2>Martin</h2>
        <h6>03/10/2020</h6>
        <p>c'est vraiment géniale, j'ai pu acheter le livre Vue.JS pour les Noobs <br>
        ça m'a vraiment aidé parce que je capte vraiment un beignet !!!</p>
        <br>
        <h2>Steven</h2>
        <h6>05/10/2020</h6>
        <p>Au top !!! j'ai plusieurs de mes Hentei qui avaient les pages collés, j'ai pu les racheter à moindre coup ! </p>
        <br> 
        <h2>Marou06</h2>
        <h6>06/10/2020</h6>
        <p> cette bibliotheque c'est de la balle, ca me donne trop envie d'apprendre à lire !!!</p>
        </div>
    </div>
    <div class="row">
    <div v-if="envoicomment=true">
    <h2>{{pseudo}}</h2>
    <h6>{{date}}</h6>
    <p>{{comment}}hi </p>
    </div>
</div>
<div class="row">
<div>
<p>Message</p>
<input v-model:"pseudo">
<p>Message</p>
<input v-model:"comment">
</div>
<button @click="envoicomment=!envoicomment">Envoyer</button>
</div>
</div>`,
    data: function () {
        return ({

        })
    },

    /*
 <div class="row">
    <div>
    <p>Message</p>
    <input v-model:"pseudo">
    <p>Message</p>
    <input v-model:"comment">
    </div>
    <button @click="envoicomment=!envoicomment">Envoyer</button>
    </div>*/


};
/*   fin partie livre d'or*/

/*partie panier*/
const panier = {
    template: `<div> </div>`
};
/*partie panier*/
/*partie lien inter-page*/
var routes = [
    { path: "/home", component: home },
    { path: "/boutique", component: boutique },
    { path: "/livre-seconde-vie", component: occaz },
    { path: "/contact", component: contact },
    { path: "/goldbook", component: goldbook },
    { path: "/panier", component: panier },

]

const router = new VueRouter({
    routes: routes
})
/*fin partie lien inter-page*/



/*vue.JS ici*/
var vm = new Vue({
    el: "#app",
    data: {
        show: true,
        panier: [{
        }],
        //   isshow=true,
    },

    components: {


    },
    router: router
});

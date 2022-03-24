var v1 = new Vue({
  el: "#app",
  data() {
    return {
      items: [{
        id: 1,
        name: "HTML 5",
        icon: "/images/icones/w30/html5_30.png",
        quantity: 1,
        dureemin: 3.5,
        dureemax: 14,
        projet: 4,
        projetdescriptif_fr: "E-portefolio, Site statique vitrine, Projet Fil Rouge"
      }, {
        id: 2,
        name: "CSS 3",
        icon: "/images/icones/w30/css3_30.png",
        quantity: 2,
        dureemin: 3.5,
        dureemax: 70,
        projet: 2,
        projetdescriptif_fr: "Site statique vitrine, Projet Fil Rouge,et bien plus ;)"
      }, {
        id: 0,
        name: "Javascript / Ajax",
        icon: "/images/icones/w30/js_30.png",
        quantity: 2,
        dureemin: 7,
        dureemax: 105,
        projet: 2,
        projetdescriptif_fr: "Site e-commerce panier, Krusty"
      }, {
        id: 4,
        name: "JQuery",
        icon: "/images/icones/w30/jQuery1_30.png",
        quantity: 1,
        dureemin: 3.5,
        dureemax: 35,
        projet: 1,
        projetdescriptif_fr: "Bomberlike"
      }, {
        id: 5,
        name: "Bootstrap",
        icon: "/images/icones/w30/bootstrap_30.png",
        quantity: 1,
        dureemin: 3.5,
        dureemax: 21,
        projet: 1,
        projetdescriptif_fr: "Àttable"
      }, {
        id: 6,
        name: "Wordpress",
        icon: "/images/icones/w30/wordpress4_30.png",
        quantity: 2,
        dureemin: 3.5,
        dureemax: 70,
        projet: 2,
        projetdescriptif_fr: "CarAuto, Plugin"
      }, {
        id: 7,
        name: "VueJs 2",
        icon: "/images/icones/w30/vuejs2_30.png",
        quantity: 1,
        dureemin: 21,
        dureemax: 49,
        projet: 1,
        projetdescriptif_fr: "Composant localisation"
      }, {
        id: 8,
        name: "PhP 7",
        icon: "/images/icones/w30/php_30.png",
        quantity: 4,
        dureemin: 35,
        dureemax: 140,
        projet: 3,
        projetdescriptif_fr: "Attable, Vide Grenier (N-tiers), Site Activite"
      }, {
        id: 81,
        name: "Curl : CLI et avec PhP",
        icon: "/images/icones/w30/curl_h30.png",
        quantity: 1,
        dureemin: 2,
        dureemax: 4,
        projet: 0,
        projetdescriptif_fr: ""
      }, {
        id: 9,
        name: "MySQL",
        icon: "/images/icones/w30/mysql_30.png",
        quantity: 1,
        dureemin: 3.5,
        dureemax: 35,
        projet: 3,
        projetdescriptif_fr: "via API Rest : Vide Grenier (N-tiers), Attable, Site e-commerce "
      }, {
        id: 10,
        name: "Référencement SEO",
        icon: "/images/icones/w30/SEO_30.png",
        quantity: 1,
        dureemin: 2,
        dureemax: 28,
        projet: 0,
        projetdescriptif_fr: ""
      }, {
        id: 11,
        name: "Java SE 8",
        icon: "/images/icones/w30/java1_30.png",
        quantity: 1,
        dureemin: 35,
        dureemax: 105,
        projet: 1,
        projetdescriptif_fr: "Vide Grenier (N-tiers)"
      }, {
        id: 12,
        name: "Framework JavaFX ",
        icon: "/images/icones/w30/SceneBuilderLogo_30.png",
        quantity: 1,
        dureemin: 3.5,
        dureemax: 70,
        projet: 1,
        projetdescriptif_fr: "Vide Grenier (N-tiers)"
      }, {
        id: 13,
        name: "JEE 8",
        icon: "/images/icones/w30/jee_30.png",
        quantity: 1,
        dureemin: 14,
        dureemax: 105,
        projet: 1,
        projetdescriptif_fr: "Site "
      }, {
        id: 131,
        name: "Hibernate",
        icon: "/images/icones/w30/hibernate_30.png",
        quantity: 1,
        dureemin: 7,
        dureemax: 14,
        projet: 0,
        projetdescriptif_fr: ""
      }, {
        id: 14,
        name: "Android 7",
        icon: "/images/icones/w30/android_30.png",
        quantity: 1,
        dureemin: 7,
        dureemax: 35,
        projet: 1,
        projetdescriptif_fr: "Vide Grenier (N-tiers)"
      }, {
        id: 15,
        name: "Git / Github",
        icon: "/images/icones/w30/git_30.png",
        quantity: 1,
        dureemin: 7,
        dureemax: 14,
        projet: 1,
        projetdescriptif_fr: "Projet Collaboratif"
      }, {
        id: 16,
        name: "Maquetage & Wireframe d'Applications Web / Desktop / Mobile",
        icon: "/images/icones/w30/balsamiq_30.png",
        quantity: 2,
        dureemin: 3.5,
        dureemax: 35,
        projet: 3,
        projetdescriptif_fr: "PPI"
      }, {
        id: 17,
        name: "Algorithmie",
        icon: "/images/icones/w30/algo_30.png",
        quantity: 1,
        dureemin: 7,
        dureemax: 35,
        projet: 0,
        projetdescriptif_fr: ""
      }, {
        id: 18,
        name: "UML2",
        icon: "/images/icones/w30/uml2_30.png",
        quantity: 1,
        dureemin: 7,
        dureemax: 35,
        projet: 1,
        projetdescriptif_fr: "FortBoyaux"
      }, {
        id: 181,
        name: "Merise",
        icon: "/images/icones/w30/merise_30.png",
        quantity: 1,
        dureemin: 7,
        dureemax: 35,
        projet: 1,
        projetdescriptif_fr: "PPI"
      }, {
        id: 19,
        name: "XML/XPath/XSLT",
        icon: "/images/icones/w30/xml_30.png",
        quantity: 1,
        dureemin: 3.5,
        dureemax: 14,
        projet: 1,
        projetdescriptif_fr: "Gestion inventaire avec Php "
      }, {
        id: 191,
        name: "JSon",
        icon: "/images/icones/w30/json_30.png",
        quantity: 1,
        dureemin: 1,
        dureemax: 3.5,
        projet: 0,
        projetdescriptif_fr: ""
      }, {
        id: 20,
        name: "Python",
        icon: "/images/icones/w30/python_30.png",
        quantity: 2,
        dureemin: 7,
        dureemax: 70,
        projet: 1,
        projetdescriptif_fr: "Scrap&Scripting"
      }, {
        id: 21,
        name: "Gestion de projet Agile : Scrum",
        icon: "/images/icones/w30/scrum_30.png",
        quantity: 1,
        dureemin: 3.5,
        dureemax: 70,
        projet: 1,
        projetdescriptif_fr: "Tous les projets peuvent être réalisés via Scrum"
      }, {
        id: 22,
        name: "Divers ateliers Agiles / Coaching",
        icon: "/images/icones/w30/diversagile_30.png",
        quantity: 1,
        dureemin: 3.5,
        dureemax: 7,
        projet: 3,
        projetdescriptif_fr: "Carpaccio, Cubes, Marshmallow Challenge"
      }, {
        id: 23,
        name: "Formations a venir ",
        icon: "/images/to-be-continued_h40.png",
        quantity: 0,
        dureemin: 0,
        dureemax: 0,
        projet: 0,
        projetdescriptif_fr: ""
      }, {
        id: 24,
        name: " -en prod- Node JS",
        icon: "/images/icones/w30/nodejs_30.png",
        quantity: 1,
        dureemin: 7,
        dureemax: 70,
        projet: 1,
        projetdescriptif_fr: "GestDevis"
      }, {
        id: 50,
        name: " -en prod- Java Server Faces",
        icon: "/images/icones/w30/jee3_30.png",
        quantity: 1,
        dureemin: 7,
        dureemax: 14,
        projet: 1,
        projetdescriptif_fr: "GestFilmotheque"
      }, {
        id: 25,
        name: " -en prod- TypeScript",
        icon: "/images/icones/w30/typescript_30.png",
        quantity: 1,
        dureemin: 3.5,
        dureemax: 14,
        projet: 1,
        projetdescriptif_fr: "PPI"
      }, {
        id: 26,
        name: " -en prod- Mongo DB",
        icon: "/images/icones/w30/mongodb_30.png",
        quantity: 1,
        dureemin: 7,
        dureemax: 14,
        projet: 1,
        projetdescriptif_fr: "GestDevis"
      }, {
        id: 27,
        name: " -a venir- Doctrine",
        icon: "/images/icones/w30/doctrine_30.png",
        quantity: 1,
        dureemin: 3,
        dureemax: 7,
        projet: 1,
        projetdescriptif_fr: "Passage Mysql Doctrine"
      }, {
        id: 28,
        name: " -a venir- Symfony",
        icon: "/images/icones/w30/Symfony2_30.png",
        quantity: 1,
        dureemin: 1,
        dureemax: 1,
        projet: 0,
        projetdescriptif_fr: ""
      }]
    }
  },

  computed: {
    totalDureemin() {
      return this.items.reduce((total, item) => {
        return total + item.dureemin
      }, 0)
    },
    totalQuantity() {
      return this.items.reduce((total, item) => {
        return total + item.quantity
      }, 0)
    },
    totalDureemax() {
      return this.items.reduce((total, item) => {
        return total + item.dureemax
      }, 0)
    },
    totalProjets() {
      return this.items.reduce((total, item) => {
        return total + item.projet
      }, 0)
    },
  },

  mounted() {
    //  this.addItem()
  },

  methods: {
    imgPreUrl(toto) {
      // console.log(toto);
      return "/files/";
    },
    addItem() {
      this.items.splice(2, 0, {
        id: 3,
        name: "Kiwis",
        quantity: 8
      })
    },
    moveItems() {
      this.items = this.items.reverse()

    },
    removeItem() {
      this.items.splice(2, 1)

    }
  }
})

var vanim = new Vue({
  el: "#appdemo",
  /* 
 0 Javascript / Ajax
 5 Bootstrap
 6 Wordpress
 7 VueJs2
 8 Php7
 9 MySQL
 16 Maquetage & Wireframe d'Applications Web / Desktop / Mobile
 20 Python
 21 Gestion de projet Agile : Scrum
 22 Divers ateliers Agiles / Coaching
 24 Node Js
 25 Typescript
 26 MongoDb 
 28 Symfony	
     */
  data() {

    return {
      etatanim: 3,
      items: [{}],
      listeitemsavoir: [{}],
      listforma: [0,5, 6, 8, 9, 16, 20, 21, 25, 28]
    }
  },

  computed: {
    totalDureemin() {
      return this.listeitemsavoir.reduce((total, item) => {
        return total + item.dureemin
      }, 0)
    },
    totalQuantity() {
      return this.listeitemsavoir.reduce((total, item) => {
        return total + item.quantity
      }, 0)
    },
    totalDureemax() {
      return this.listeitemsavoir.reduce((total, item) => {
        return total + item.dureemax
      }, 0)
    },
    totalProjets() {
      return this.listeitemsavoir.reduce((total, item) => {
        return total + item.projet
      }, 0)
    },
  },

  mounted() {
    rand = 0;//monte l'animation avec des éléments au hazard en en évitant certains

    let listformaafficher = [];

    //affiche la liste des formations a mettre en avant
    // console.log(this.listforma);

    //met dans un tableau 3 indices différents a afficher au hasard
    for (let indexfor = 0; indexfor < 3; indexfor++) {
      do {
        rand = Math.floor(Math.random() * (this.listforma.length - 1));
       // console.log("rand : " + rand)
      } while (listformaafficher.indexOf(this.listforma[rand]) != -1)
    //met l élément nouveau dans le tableau
      listformaafficher.push(this.listforma[rand]);
      //on cherche dans la liste de V1 l'élément qui a l'id correspondant et on retourne l'objet
      objapush= v1.items.find(element => listformaafficher[indexfor] == element.id);
      this.listeitemsavoir.push(objapush);
    }
    console.log("items a voir : " + listformaafficher);
  

  },
  methods: {
    retourneIddansListIemDeLID(idachercher) {

      v1.items.forEach(function (element, index) {
        if (idachercher == element.id) {

          console.log("index : " + index);

        }

      });

    },
    donne_etatanim() {
      return this.listeitemsavoir.length;
    },
    addItem() {
      if (vanim.donne_etatanim() < 4) {//pour eviter qu'on en lance trop en //
        if (flaganim == 7) {//change avec le precedent si jamais on a été arreté en cours

          vanim.listeitemsavoir.splice(3, 0, {
            id: 24,
            name: " -en prod- Node JS",
            icon: "/images/icones/w30/nodejs_30.png",
            quantity: 1,
            dureemin: 7,
            dureemax: 70,
            projet: 1,
            projetdescriptif_fr: "GestDevis"
          }
          
          );
          flaganim = 8;
        } else if (flaganim == 0 || flaganim == 8) {
          this.listeitemsavoir.splice(3, 0, {
            id: 7,
            name: "VueJs 2",
            icon: "/images/icones/w30/vuejs2_30.png",
            quantity: 1,
            dureemin: 21,
            dureemax: 49,
            projet: 1,
            projetdescriptif_fr: "Composant localisation"
          });
          flaganim = 7;
        }
      }

      if (visible) {
        //  console.log("addItem visible")
        setTimeout(() => {
          this.moveItems()
        }, 2000)
      }
    },
    moveItems() {
      this.listeitemsavoir = this.listeitemsavoir.reverse()
      if (visible) {
        //    console.log("moveItems visible")
        setTimeout(() => {
          this.removeItem()
        }, 3000)
      }
    },
    removeItem() {
      this.listeitemsavoir.splice(0, 1);
      if (window.visible) {
        //   console.log("removeItem visible")
        setTimeout(() => { //si element visible on continue l'animation
          this.addItem()
        }, 3000)
      }
    }
  }
})

// Déclenchement - Arret Animation de des compétences
var visible = false; // condition pour ne pas déclencher des millions de fonctions
var flaganim = 0;

// Arrêt de l'animation si l'élément n'est plus visible
function isElementVisible(elementToBeChecked) {
  var TopView = $(window).scrollTop();
  var BotView = TopView + $(window).height();
  var TopElement = $(elementToBeChecked).offset().top;
  var BotElement = TopElement + $(elementToBeChecked).height();
  return ((BotElement <= BotView) && (TopElement >= TopView));
}

$(window).scroll(function () {

  isOnView = isElementVisible("#appdemo");

  if (isOnView) {

    // le code si l'élément est visible
    if (!visible) {
      visible = true;
      if (vanim.donne_etatanim() < 4) {
        vanim.addItem();
      } //pour reprendre l'animation a l'etat ou on l'a quitteée
      else {
        vanim.removeItem()
      }
      //    console.log("jetevois"); 
    }
  } else {
    if (visible) {
      visible = false;
      //  console.log("jetevoisplus")
    }
  }
});
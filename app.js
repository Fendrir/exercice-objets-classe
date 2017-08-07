console.log("hey");

function Eleve(id, prenom, nom, sexe, age) {

    this.id = id;

    this.prenom = prenom;

    this.nom = nom;

    this.sexe = sexe;

    this.age = age;

    this.addAffiche = function () {

    	if (this.sexe == "m"){

    		this.sexe = "Monsieur";

    		console.log(this.sexe + " " + this.prenom + " " + this.nom);

    	} else if (this.sexe == "f"){


    		this.sexe = "Madame";
    		console.log(this.sexe + " " + this.prenom + " " + this.nom);

    	};

    };

};

// function Eleve( id, prenom, nom, sexe, age ) {
//  this.id = id;
//  this.prenom = prenom;
//  this.nom = nom;
//  this.sexe = sexe;
//  this.age = age;  this.affiche = function () {
//    var titre = 'M' == this.sexe ? 'Monsieur' : 'Madame ';
//    console.log(titre + " " + this.prenom + " " + this.nom);
//  }
// }

// var julien = new Eleve('id', 'Julien', 'Febvre', "m", 28);

// julien.addAffiche();


function Classe(){

	this.curIdEleve = 1;
	this.eleves = [];

	this.addEleve = function( prenom, nom, sexe, age) {

		this.eleves.push( new Eleve ( this.curIdEleve, prenom, nom, sex, age));
		this.curIdEleve++;


	}

	this.compteEleve = function (sexe = 'A'){


	}

}

var maClasse = new Classe();
maClasse.addEleve("Pierre", "De Soos", "M", 41);
maClasse.addEleve("Jean", "Vallat", "M", 22);
maClasse.addEleve("Louise", "Leontine", "f", 27);

console.log("Il y a " + maClasse.compteEleve('A') + " élèves dans la classe");
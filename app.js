console.log("hey");

function Eleve(id, prenom, nom, sexe, age) {

    this.id = id;

    this.prenom = prenom;

    this.nom = nom;

    this.sexe = sexe;

    this.age = age;

    this.addAffiche = function () {

        this.sexe == "m"?console.log("Monsieur " + this.prenom + " " + this.nom):console.log("Madame " + this.prenom + " " + this.nom);

    	// if (this.sexe == "m"){

    	// 	console.log("Monsieur " + this.prenom + " " + this.nom);  // | version longue

    	// } else if (this.sexe == "f"){

    	// 	console.log("Madame " + this.prenom + " " + this.nom);

    	// };

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

		this.eleves.push( new Eleve ( this.curIdEleve, prenom, nom, sexe, age));
		this.curIdEleve++;


	}

	this.compteEleve = function (sexe = "a"){

        var nombreEleveTotal = this.eleves.length;

        var compte = 0;

        if (sexe == "a"){

            return nombreEleveTotal;

        }else {

            for (i = 0; i < this.eleves.length; i++){

                 if (sexe == this.eleves[i].sexe){

                    compte++;

                
                }

                
            }

        return compte;

    	}

    }

    this.afficheEleves = function (){


        for (i = 0; i < this.eleves.length; i++){

            this.eleves[i].addAffiche();

        }


    }


}





var maClasse = new Classe();
maClasse.addEleve("Pierre", "De Soos", "m", 41);
maClasse.addEleve("Jean", "Vallat", "m", 22);
maClasse.addEleve("Louise", "Leontine", "f", 27);

console.log("Il y a " + maClasse.compteEleve("a") + " élèves dans la classe");
console.log("Il y a " + maClasse.compteEleve("f") + " élèves dans la classe");
console.log("Il y a " + maClasse.compteEleve("m") + " élèves dans la classe");

maClasse.afficheEleves();

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

var julien = new Eleve('id', 'Julien', 'Febvre', "m", 28);

julien.addAffiche();


// function Classe()
#!/usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')
const fs = require('fs-extra')
// Configuration des paramètres attendus
program
 .version('1.0.0')
 .option('-e, --eleves', )

 program.parse(process.argv)

// Maintenant on peut les utiliser
if (program.eleves){
	inquirer.prompt([ {
	  type: 'input',
	  message: 'Entrez votre question', 
	  name: 'nom'
	},{
	  type: 'input',
	  message: 'bonne réponse', 
	  name: 'good'

	},{
	  type: 'input',
	  message: 'Entrez la liste des reponses possibles', 
	  name: 'choices'

	},{
	  type: 'input',
	  message: 'entrer le nombre de point' , 
	  name: 'point '

	}
	]).then(answers => {
    	console.log(answers)

    	let words = answers.choices.split(',')
    	console.log(words)

    	fs.readJson('question.js', function(err, packageObj) {
  			console.log(packageObj)
		});

	})

}










#!/usr/bin/env node
console.log('pour lancer le qcm vieille choisir votre thémes en rajoutant le nom devant la ligne de commande')
console.log('pour le qcm des éléves: -e, si celui de culture_g: -g')

const program = require('commander')

// Configuration des paramètres attendus
program
 .version('1.0.0')
 .option('-e, --eleves', )
 .option('-g, --culture_g', )

// On parse (convertit en format utilisable) les options
// fonction synchrone

program.parse(process.argv)

// Maintenant on peut les utiliser
if (program.eleves) {
	const qcm1 = require('./qcm1.js')
}else if (program.culture_g){
	const inquire = require('./qcm2.js')
}
else{
	console.log('qcm nom selectionné')
}




 
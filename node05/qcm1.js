#!/usr/bin/env node

const inquirer = require('inquirer')
const fs = require('fs')

let result = 0
let nom = []

inquirer.prompt([ {
  type: 'input',
  message: 'Entrez votre nom d\'utilisateur', 
  name: 'username'

},{
  type: 'checkbox',
  name: 'question_1',
  message: 'nom',
  choices: [
    { name: 'a', value: 1},
    { name: 'b', value: 2},
    { name: 'c', value: 0},
    { name: 'd', value: 0}
  ]
}
]).then(async (answers) => {
 console.log(answers)

 nom = answers.username

let choix1 = answers.question_1

 result = parseInt(choix1) 

envoie = nom + ' ' + 'qcm1' + ' ' + result + ' | '

fs.appendFile('reponse.js', envoie, function (err) {
    if (err) throw err;
    console.log('envoie de vos réponses')})
   
 })





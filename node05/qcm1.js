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
  message: 'qui est le plus beau',
  choices: [
    { name: 'a', value: 1},
    { name: 'b', value: 2},
    { name: 'c', value: 0},
    { name: 'd', value: 0}
  ]
},{
  type: 'checkbox',
  name: 'question_2',
  message: 'qui est le plus fort',
  choices: [
    { name: 'a', value: 1},
    { name: 'b', value: 2},
    { name: 'c', value: 0},
    { name: 'd', value: 0}
  ]
}

]).then((answers) => {
 console.log(answers)

 nom = answers.username

fs.appendFile('reponse.js', nom, function (err) {
    if (err) throw err;
    console.log('Envoie de nom')})

fs.appendFile('reponse.js', ' qcm1 ', function (err) {
    if (err) throw err;
    console.log('du qcm')})


let choix1 = answers.question_2
let choix2 = answers.question_1

 result = parseInt(choix1) + parseInt(choix2)


fs.appendFile('reponse.js', result, function (err) {
    if (err) throw err;
    console.log('et des réponses')})
   
 })


module.exports = inquirer.prompt






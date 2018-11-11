#!/usr/bin/python
# entrer note et prénom
# mac platel
# 11/11/2018

#importation des modules

from time import sleep
from random import *
import sys
import re

# mettre les ramdom sous valeur changeable

min = 0
max = 100

secret = randint(min, max)
success = False
verif = randint(min, max)

#mettre le choix de l'ordinateur dans le fichier et le laissé s'amuser

file = open("test.txt", "w")
print("Bienvenue entrer un chiffre: ")
file.write(str(verif))
file.close()
file = open("test.txt", "r")
line = file.read()
file.close()

while success == False:

  if secret > int(line):
    min = int(line)
    verif = randint(min, max)
    file = open("test.txt","w")
    print("plus grand:  ")
    file.write(str(verif))
    file.close()
    nb = open("test.txt", "r")
    line = nb.read()
    file.close()

  elif secret < int(line):
    max = int(line)
    verif = randint(min, max)
    file = open("test.txt","w")
    print("plus petit: ")
    file.write(str(verif))
    file.close()
    nb = open("test.txt", "r")
    line = nb.read()
    file.close()

  elif secret == int(line):
    success = True
    file = open("test.txt", "w")
    file.write("gg")
    file.close()
    break



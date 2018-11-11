#!/usr/bin/env python3
# ecrire une liste de nom
# mac platel
# 17/10/2018

print("entre un nom et quitte avec q")

# déclaration des varriables
nom = 0
liste = []

import re
pattern = re.compile('^[a-z]$')

#entrer dans la liste

while nom == 0:
    print("entre un nom?")
    value = input()

#on verifie que ce soit un nom

    if value != pattern.match():
	  print('ce n\'est pas un nom')

#sortie de liste

    if value == "q":  
        liste = sorted(liste)
        for prenom in liste:
            print(prenom)
        break
    else:
        liste.append(value) #ajoute a la suite 

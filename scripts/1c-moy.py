#!/usr/bin/env python3
# entrer note et prénom
# mac platel
# 18/10/2018


import re
pattern = re.compile('^[a-z]$')
chiffre = re.compile('^[0-9]$')

print("saisie la note puis le nom")

# creer un dictionnaire
dictionary = {}
# creer une boucle
boucle = 0
#la somme des notes
somme = 0

while boucle == 0:
    print("saisissez un prenom")
    nom = input()
    #verif du nom
    if nom != pattern.match():
      print('ce n\'est pas un nom')
    if nom == "q":
        print("liste des notes")

        for liste in sorted(dictionary):
            full = dictionary[liste]
            print(full)

            somme += int(full)
        print("moyenne est égale a ")
        moy = somme / len(dictionary)
        try:
            moy == int(moy)
        except: sys.exit("please enter a grade")
        print(moy)
        break
    else:
        print("saisissez votre note")
        note = input()
        #verif du chiffre
        if note != chiffre.match():
          print('ce n\'est pas un chiffre')
        dictionary[nom] = note

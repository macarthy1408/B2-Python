#!/usr/bin/env python3
# additioner dux valeurs
# mac platel
# 15/10/2018

import re

#déclaration de valeurs
print ("entre deux chiffres")
number1 = input()
number2 = input()

pattern = re.compile('^[0-9]$')

#on verifie que ce soit un chiffre

if pattern.match(number1):
  tata1 = int(number1)
else:
	print('le premier n\'est pas un chiffre')
if pattern.match(number2):
  tata2 = int(number2)
else:
	print('le deuxieme n\'est pas un chiffre')

#on met la valeur sous int

toto1 = type(tata1)
toto1 = type(tata1)

#on additionne

if (toto1 == int) and (toto2 == int):
  input(tata1 + tata2)


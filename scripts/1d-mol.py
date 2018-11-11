#/usr/local/bin/python3
# entrer note et prénom
# mac platel
# 11/11/2018

from random import randint

chiffreale = randint(0, 100)

print("entre un chiffre")

com = input()
com
chiffrechoisit = int(com)
while com != chiffreale:
  if com < chiffreale:
    print("plus grand")
    com
    com = int(com)
  elif com > chiffreale:
    print ("plus petit")
    com
    com = int(com)
    break
print("gagne")

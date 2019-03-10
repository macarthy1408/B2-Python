#platel mac
# TP2  CCNA
##mises en place
on commence a créer 3 cartes réseaux dans virtual box 
on fait 4 clones de notre vm de base 2 routeurs, un clients et un serveur
on branche les cartes réseaux au vm correspondantes
on paramétres les addres ip correspondante dans le fichier ifcfg correspondants aux cartes réseaux avec la commande:
sudo vi /etc/sysconfig/network-scripts/ifcfg-enp0s3 (ou enp0s8)
on met les address ip en static et on rentre l address ip donné dans le tp
on relance avec systemctl restart network
une fois mis en place on active l'IPv4 forwarding avec nos 2 routeurs (sudo sysctl -w net.ipv4.conf.all.forwarding=1)
on écrit la ligne de commande (net.ipv4.conf.all.forwarding=1) dans le fichié (/etc/sysctl.conf)
on met en place les routes avec sudo ip route add 10.2.0.0/24 via 10.2.0.254 dev eth0 
cependant je n'ai pas téussit a trouvé le ficier pour créer les routes aprés reboot 
de ce fait je n' ai pas réussit a mettre en place les pings ou les captures d'écran
je suis passé directement a la mises en place du dhcp malheureussement apres avoir installer le paquet je n'ai pas réussit 
a le mettre dans le fichier /etc/dhcp/dhcpd.conf malgré les lignes 
mv dhcpd.conf /etc/dhcp/


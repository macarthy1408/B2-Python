const axios = require('axios')

const album = 'https://jsonplaceholder.typicode.com/albums/1'
const user = 'https://jsonplaceholder.typicode.com/users/1'
const photos = 'https://jsonplaceholder.typicode.com/photos/?albumId=1'

let utilisateur = {}

// fonction qui récupère l'album de l'utilisateur 1 
function getAlbums(callback, callback2){
    axios.get(album)
        .then((reponse)=>{
            utilisateur['userId'] = reponse.data.userId
            utilisateur['id'] = reponse.data.id
            utilisateur['title'] = reponse.data.title
            return callback(getUtilisateur)

        }).then((reponse)=>{
            utilisateur['user'] = reponse.data
            return callback2()
        })
        .then((reponse)=>{
            utilisateur['photos'] = reponse.data
            console.log(utilisateur)
        })
        .catch((err)=>{
            console.log('Error', err)
        })
}

// fonction qui récupère l'utilisateur 1
function getUtilisateur(callback){
    return axios.get(user)    
}

// fonction qui récupère les photos de l'album de l'utilisateur 1
function getPhotos(){
    return axios.get(photos)
}

// fonction start programme
function start(){
    getAlbums(getUtilisateur, getPhotos)
}

start()
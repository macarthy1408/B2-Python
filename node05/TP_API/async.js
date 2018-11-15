const axios = require('axios')

const album = 'https://jsonplaceholder.typicode.com/albums/1'
const user = 'https://jsonplaceholder.typicode.com/users/1'
const photos = 'https://jsonplaceholder.typicode.com/photos/?albumId=1'

let utilisateur = {}

const getAlbum = async()=>{
    try {
        const reponse = await axios.get(album);
        utilisateur = reponse.data
        utilisateur['id'] = reponse.data.id
        utilisateur['title'] = reponse.data.title
    } catch (error) {
        console.error(error);
    }
}

const getUtilisateur = async()=>{
    try {
        const reponse = await axios.get(user);
        utilisateur['user'] = reponse.data
    } catch (error) {
        console.error(error);
    }
}

const getPhotos = async()=>{
    try {
        const reponse = await axios.get(photos);
        utilisateur['photos'] = reponse.data
    } catch (error) {
        console.error(error);
    }
}

const start = async() =>{
    try {
        await getAlbum()
        await getUtilisateur()
        await getPhotos()
        console.log(utilisateur)
    } catch (error) {
        console.log('Error :', error)
    }
}

start()
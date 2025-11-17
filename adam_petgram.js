const pets = [];
const photos = [];
const follows = [];

function addPetProfile(pet){
    pets.push(pet);
    return pet
}

function uploadPhoto(petId, photo){
    const newPhoto = {
        ...photo,
        petId:petId,
        likes:0
    };
    photos.push(newPhoto);
    return newPhoto
}

function likePhoto(photoId){
    const photo = photos.find(p => p.id === photoId);
    if(photo){
        photo.likes++;
        return photo.likes;
    }
    return null;
}
 function getFeed(){
    return photos;
 }

 function followPet(followerId, followingId){
    follows.push({followerId,followingId});
    return {followerId,followingId};
 }

module.exports = {
    addPetProfile,
    uploadPhoto,
    likePhoto,
    getFeed,
    followPet
    //Functions:
    //addPetProfile
    //uploadPhoto
    //likePhoto
    //getFeed
    //followPet
}
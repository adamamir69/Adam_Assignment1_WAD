const users = [];
const photos = [];
const follows = [];

function addUserProfile(user){
    users.push(user);
    return user
}

function uploadPost(userId, photo){
    const newPhoto = {
        ...photo,
        userId:userId,
        likes:0
    };
    photos.push(newPhoto);
    return newPhoto
}

function likePost(photoId){
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

 function followUser(followerName, followingName){
    follows.push({followerName,followingName});
    return {followerName,followingName};
 }

 function getFollowing(userId){
    return follows.filter(f=>f.followerName ===userId)
    .map(f=>f.followingName);
 }

function getFollowers(userId){
    return follows
    .filter(f=>f.followingName === userId)
    .map(f=>f.followerName)
}

module.exports = {
    addUserProfile,
    uploadPost,
    likePost,
    getFeed,
    followUser,
    getFollowing,
    getFollowers,
}
const petgram = require('./adam_petgram.js');

//Add pet
petgram.addPetProfile({ id: 1, name: "Mochi", species: "Cat", owner: "Adam" });
petgram.addPetProfile({ id: 2, name: "Bibi", species: "Dog", owner: "Sarah" });
petgram.addPetProfile({ id: 2, name: "Yan Kai", species: "Dog", owner: "Shang Xian" });


// Upload photos
petgram.uploadPhoto(1, { id: 100, caption: "Mochi sleeping!" });
petgram.uploadPhoto(2, { id: 200, caption: "Bibi at the park!" });
petgram.uploadPhoto(2, { id: 200, caption: "Yan Kai is getting touched by Shang Xian" })
// Like photo
petgram.likePhoto(100);
petgram.likePhoto(100);

// Follow
petgram.followPet(1, 2);

// Show feed
console.log(petgram.getFeed());
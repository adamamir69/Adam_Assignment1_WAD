const instagram = require('./adam_instagram.js');

//Add pet
instagram.addUserProfile({ id: 1, name: "Mochi", age: "20", username: "mochimochi" });
instagram.addUserProfile({ id: 2, name: "Adam", age: "21", username: "Adam" });
instagram.addUserProfile({ id: 3, name: "Jun Hua", age: "24", username: "junhua" });
instagram.addUserProfile({ id: 4, name:"Mackenzy", age: "21", username: "mackenzychong"});

// Upload photos
instagram.uploadPost(1, { id: 100, caption: "Mochi sleeping!" });
instagram.uploadPost(2, { id: 200, caption: "Adam at the park!" });
instagram.uploadPost(3, { id: 250, caption: "Jun Hua eating spicy food" })
instagram.uploadPost(4, { id: 500, caption: "Mackenzy is in Gear 21" })

// Like photo
instagram.likePost(100);
instagram.likePost(100);
instagram.likePost(100);
instagram.likePost(100);
instagram.likePost(100);
instagram.likePost(100);


instagram.likePost(200);
instagram.likePost(200);
instagram.likePost(500);
instagram.likePost(250);




// Follow
instagram.followUser('Mackenzy', 'Adam');
instagram.followUser('Jun Hua', 'Mackenzy');
instagram.followUser('Yan Kai', 'Mackenzy');


// Show feed
console.log(instagram.getFeed());
console.log("Who does Mackenzy follow: ",instagram.getFollowers("Mackenzy"));
console.log("Who is following Mackenzy: ",instagram.getFollowing("Mackenzy"));
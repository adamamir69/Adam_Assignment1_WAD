# Instagram-Like Social Module

A simple Node.js module that simulates basic social media features such as  
creating profiles, uploading posts, liking posts, following users,  
and retrieving followers/following lists.

---

## Setup

1. Make sure you have **Node.js** installed.
2. To run the app, type 'node app.js' in the terminal

##Functions

1. addUserProfile(pet)

   Description:
   Adds a new user profile.

   Returns:
   The created user object.

2. uploadPost(userId, photo)

   Description:
   Creates a new post for a given user.

   Returns:
   A photo object containing { userId, caption, likes, ... }.

3. likePost(photoId)

   Description:
   Likes a post and increments its like count.

   Returns:
   The updated number of likes.

4. getFeed()

   Description:
   Retrieves the full list of posts from all users.

   Returns:
   An array of all photo objects.

5. followUser(followerName, followingName)

   Description:
   Creates a follow relationship from one user to another.

   Returns:
   An object: { followerName, followingName }.

6. getFollowing(userName)

   Description:
   Returns a list of users that the specified user is following.

   Returns:
   An array of usernames that the user follows.

7. getFollowers(userName)

   Description:
   Returns a list of users who follow the specified user.

   Returns:
   An array of usernames who follow the user.

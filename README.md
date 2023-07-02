# Social U

This repository contains the code for a secure social media app with full authentication capabilities, allowing users to register, securely log in, and customize their profiles. The app also includes features for following other users, viewing posts, engaging with posts through likes, and uploading profile pictures.

## Features

1. User Registration: The app provides a user-friendly interface for new users to register by providing necessary details like name, email address, and password. The registration process ensures that the user's password is securely stored and protected.

2. Secure Login: Once registered, users can securely log in to the app using their email address and password. The app employs robust authentication mechanisms to verify the user's credentials and prevent unauthorized access.

3. Profile Customization: Users can personalize their profiles by customizing various details such as profile pictures, bio, and other relevant information. This allows users to express themselves and make their profiles unique.

4. Following other Users: The app enables users to follow other users whose content they are interested in. By following someone, users can easily view their posts and stay updated with their activities.

5. Viewing Posts: Users can browse through a feed or timeline to view posts. This feature provides a seamless and intuitive way to stay connected with friends, family, or other interesting personalities.

6. Engaging with Posts: Users can engage with posts by liking them, expressing their appreciation for the content.

7. Uploading Profile Pictures: The app allows users to upload and change their profile pictures (for now only for one time). This feature gives users the flexibility to update their profile images as per their preference and ensures a personalized experience.

## Installation and Setup

1. Clone the repository:

```
git clone https://github.com/your-username/secure-social-media-app.git
```

2. Install the necessary dependencies:

```
### For server Side
cd server
npm install
node index.js
```
```
### For Client Side
cd client
npm install
npm start 
```

3. Set up a database: Create a database instance on MongoDB or MongoDb Atlas and configure the necessary credentials in the server/.env file file.
    ### You have make a .env file one for you that contain
        - MONGO_URL = <Your URL of Atlas or DB>
        - PORT  = 3001
        - JWT_SECRET = <Any string >
    ### Make sure to assign server PORT only to 3001 because frontend is using that location to read/write data from backend
   
5. Access the app: Open a web browser and navigate to `http://localhost:3000` to access the social media app.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB 
- Authentication: bcrypt for password hashing and JWT (JSON Web Tokens) for secure authentication
- bcrypt(for password encryption)
- cors(for cross origin request)
- dotenv(for enviornment variable)
- gridfs-stream( for file uploading)
- multer ( file saving locally in server/public/assets )
- multer-gridfs-storage ( file saving locally)
- helmet( safety)
- morgan(login)
- jsonwebtoken(authentication)
- mongoose (mongose)

# How to Deploy a MERN Stack Application

## Backend

### 1. Create a Heroku Account

### 2. Install the Heroku CLI

Follow this [link](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) to learn about the process

### 3. After installation type heroku login in your preferred terminal

This will prompt you to press any key, once you do it will take you to your browser where you will just need to click 'Log In'. You can close the browser window after doing so.

### 4. Add engines to package.json

Check your node and npm versions by using the commands `npm -v` and `node -v` and insert this piece of code right below the "main" property in package.json

![image](https://user-images.githubusercontent.com/80675137/178512794-6021454d-d50a-4515-b287-d974c9232b36.png)

### 5. Set Mongo DB IP Address

In a production app you do not want to allow all IP addresses to access your database! You will want to find the specific IP address that hosts your server-side and add just that one as allowed.
If your project doesn't contain any sensitive information then set the IP Address in Mongo DB to `0.0.0.0/0`. Just click the button that says `Allow Access from Anywhere`.

### 6. Port

Change the port that the app is listening to `app.listen(process.env.PORT || 5000)`. The `process.env.PORT` will be set by Heroku's .env.

### 7. Create a project on Heroku

Run the following command in terminal : `heroku git:remote -a my-project`
my-project is anything you want to name the project

### 8. Push code to server

First ensure that everything is committed and working branch is clean. We have both client and server present in our repo. But we just need to push server code to heroku. The command for that is :
`git subtree push --prefix server heroku master`

### 9. Config Variables

Under settings in heroku, click on config variables and add all your environment variables from the .env file.

### 10. Test
To test whether your server is deployed or not. Add this line of code in main index.js file. 
`app.get('/', (req, res) => { res.send('Hello from Express!')`
If you see the 'Hello from Express!' (or whatever test message you used) then that means your server is running correctly

## Frontend

### 1. Create an Account on Netlify

### 2. New Site

Under the option sites click on Add new site and then from the drop down click on the option Import an existing project
From the options select github and authorize github
Pick the project respository you want to deploy from your github 

### 3. Site Settings

Write the options according to the name of your client folder. Use `npm run build` if you used npm and `yarn build` in case you used yarn. But the /build remains same
![image](https://user-images.githubusercontent.com/80675137/178517361-a2d91ce8-50d2-45ed-a4eb-bbafe41b4b51.png)

### 4. Deply

Before deploying ensure that there are no unused variables or imports in your react files otherwise the deploy will fail.
Click on Deploy site
Under site settings you can go and change the name of the app by clicking on `Change site name`

### 5. Trigger Deploy

Near the top in the tabs located right under your team name and site name click on `Deploys`. Then click the Trigger deploy button which has a drop down with options. I always use clear cache and deploy site to ensure a fresh build that has all changes I've made.



## Connecting Frontend Application to Server

### 1. Install cors in server folder `npm install cors`

CORS stands for Cross Origin Resource Sharing, which uses additional HTTP headers to tell browsers to give a web application running at one origin, access to resources from different origin. For instance, if your frontend is hosted on a different platform than your backend so you'd need to make HTTP requests to get your data from there, which the browser blocks by default (as its hosted on a cross-origin, not same-origin). This is a security measure we take to protect our clients from CSRF attacks.

### 2. Basic Code

Import cors and call it like this:
`const cors = require("cors");
app.use(cors());`

By default config will be set to :
`{
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}`

"origin": "*" allows all the sites to access the server we don't want that

### 3. Adding url to Cors

Pass the url of the frontend like this to cors
`app.use(cors({
    origin: "https://your-frontend.com",
    credentials: true
}));`

Also pass the url of local server link of react app for development purposes and comment it out for now
`app.use(cors({
    origin: "http://localhost:300",
    credentials: true
}));`

ensure that there's no trailing /

### 4. Change url in front end
Wherever you're using the url of localhost server, replace it with link of server deployed on heroku
Comment the first line out and add url to second to a copied line. Uncomment first line and comment second line for development
`const res = axios.put(`/rooms/availability/${roomId}``
const res = axios.put(`https://stay-solutions.herokuapp.com/api/rooms/availability/${roomId}``

### 5. Headers
Add this piece of code after creating a file by the name _headers in the public directory of react app

![image](https://user-images.githubusercontent.com/80675137/178526764-6ec000f2-4128-4a5e-8efa-a21e20920774.png)

 this allows the frontend to access resources from all servers
 
 ### 6. Cloudinary (Only if your are uploading images to cloudinary via frontend)
 `
       const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dnzkakna0/image/upload",
        data
        data, {
        withcredentials: false
      }
`
in the post method for axios, add a config object with `withCredentials` set to false

### 7. Redirect
Sometimes netlify apps break on refreshing
In order to fix that create a folder with name _redirects inside public directory of react app
and add this piece of code
![image](https://user-images.githubusercontent.com/80675137/178528218-16745e09-1d70-4262-8614-93407fefbc79.png)

### 8. Push
Push the server to heroku using `git subtree push --prefix server heroku master`
Push the react code to github and netlify will automatically redeploy everything. 
If you face any issue go through all steps again and make sure everything is correct

# YOU'RE DONE!!


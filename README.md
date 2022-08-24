# Legal Advisor Appointment Booking Web Application

First of all, Thank you very much for this opportunity. This has helped me very much in learning new concepts.

Well, personally I would have prefered react with firebase by google as Backend.

creating backend with node JS and REST API routes was challenging enough for me. Anyway

for my development set up i have used.



`prefered tech stack would have been`

`React + Firebase.`

## Tech Stack used


Development environment setup

1. Front End : React JS
2. Back End : Node JS
3. Database : Postgres (Heroku)
4. IDE : VSCODE


Stepwise code walkthorugh:

I started with the backend:

- Created Postgres Database at heroku devcenter
(Please ignore the slow responses as this is the free tier database instance)
- Created a nodeJS application
    - `npm init`
    - Since this backend application is going to be used to serve Restful APIs. I installed express to do that.
    - And since we want to store our data in Postgres, installed `pg` to establish the connection from the node server application 
    - `npm install express pg` etc
- Create the API routes to perform Create Upate Delete operations on the database tables
- Building Routes with Postgres Queries

After creating the simple CRUD operations,
I started to use Google Auth to implement user Login.

However, I hit a wall on this as google auth now needs gapi-scripts in react frontend. I tried fixing that but then I got errors in authenticating the token in backend using passport.js.

After spending lot of time on it, I decided to use jwt token in order to register and authenticate users.

To use jwt, I installed `jsonwebtoken`.
then I created routes for authentication.
- register
- login

I have been using postman to test my API requests.

That was a bit about the backend.

## Moving on to the frontend:

Used useState() in react to hold the state of the data.

The setappointent component returns a fragment which includes a heading and a form element.
when u click on the set button, the onSet function is triggered.

- Build Set Appointment up component.
- Build List Appoitment component.
- Edit appointment component.
- JWT set up for login component

# Issues and scope of improvements:

- Missed the data model for Database tables. I would use an ORM such as `sequalize`
- Wasted two days on Google authentication and couldn't get it to work and rather ended up in `yak-shaving`
 If I would have used google in backend using passport before, it might have helped here.
- Wanted to add role based authentication (clients, advisor), Fell short of time
- Styling - I focused on backend as I had to learn it.
- in-app Message API - Fell short of time

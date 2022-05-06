# Expense Trackr
Expense Trackr is an application that helps you to organize your finances keeping track of all your expenses and incomes.

## Built with
- ReactJS
- Ruby on Rails
- PostgreSQL
- bcrpyt (password encryption)
- JSON Web Tokens
- Cloudinary (image storage and optimisation)
- Bootstrap
- CSS
## Try it on
You can access and use this application at: [Expense Trackr](https://expense-trackr0.netlify.app).

### Login
* email: Wayne@ga.co
* password: password

### Server Git Repo
[Expense Trackr Server Repo](https://github.com/Lyndating/expense_tracker).

## Technologies
Project is create with:
* ReactJS
* Rails API ([Back End Code](https://github.com/Lyndating/react-expense-trackr)).
* PostgreSQL
* JSON Web Tokens
* bcrpyt (password encryption)
* Cloudinary (image storage and optimisation)
* React Router Dom
* Bootstrap
* CSS
* Rechart

## Description


## Object model associations
![association](/public/images/associations.png)


---------------------------------------------------------------

## Approach

We started by agreeing on the core features of the site and their functionality. We also listed additional features that could be included if time permitted.

We then wireframed the database tables and their relationships. After some research & testing, we decided to use a Rails server / PostgreSQL back-end as we felt that a relational database would better serve our requirements. (Users > Transactions > Categories)

As soon as the Rails server and database were set up we tested the associations with seed data. We then set up routes and tested the api endpoints to ensure that JSON was being returned in a format that would be suitable for the front-end to work with.

Development tasks were split across the team; working on Sign In and Sign Up, User Authentication with JWT, Cloudinary image storage requests, Transactions - Display, Create and Edit. 

The back-end was deployed first to Heroku, and shortly afterwards the React build to Netlify. Configuration and testing was done to ensure the services were able to communicate and env variables were created to allow quick switching between servers.

Towards the end of the week we added functionality such as conditional Navigation (login status), mobile responsiveness, chart visualisation of data and transaction filtering.

Finally we worked on bug testing/fixing, UI refinements, code refactoring / tidy up and installed Framer Motion Library to make smoother page transitions.

This was our first time working collaboratively on a dev project. We all gained valuable experience in working collaboratively with GitHub (branching, solving merge conflicts etc), and more generally working on different parts of a larger application without breaking each other's code! It was also great to all work together to solve critical bugs/errors that were holding up progress at various points in the week.

---------------------------------------------------------------
## Screenshots

### Web view 

<span><img src="/public/images/w-login.png" width="400" alt="web login">
<img src="/public/images/w-signup.png" width="400" alt="web signup"></span>
<img src="/public/images/w-profile.png" width="400" alt="web profile">
<span><img src="/public/images/w-transaction1.png" width="400" alt="web transaction1">
<img src="/public/images/w-transaction2.png" width="400" alt="web transaction2">
<img src="/public/images/w-transaction3.png" width="400" alt="web transaction3"></span>



### Mobile Web view 

<span><img src="/public/images/m-login.png" width="250" alt="mobile web login">
<img src="/public/images/m-signup.png" width="250" alt="mobile web signup">
<img src="/public/images/m-profile.png" width="250" alt="mobile web profile"></span>
<span><img src="/public/images/m-transaction1.png" width="250" alt="mobile web transaction1">
<img src="/public/images/m-transaction2.png" width="250" alt="mobile web transaction2">
<img src="/public/images/m-transaction3.png" width="250" alt="mobile web transaction3"></span>


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

## Description
===================================


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

*** Any improvement areas ??? 
---------------------------------------------------------------


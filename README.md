# My Holly Youth Leagues Portal
A web application designed for the town of Mount Holly, NC or any town that provides youth athletic leagues. This site will be used for parents to sign up their children and as an information resource for parents, coaches, and league managers.

Try it Out !      https://mtholly-youthleague-portal.herokuapp.com/  

### The purpose of this application: 
1. Allow Parents to register their child for a sport
2. Allow Parents to see when and where the team will practice
3. Allow Parents access to the game schedule
4. Allow Coaches to create a practice schedule
5. Allow Administrators to create teams
6. Allow Administrators to assign coaches to teams
7. Allow Administrators to create a game schedule

### Technologies Used
* React
* Redux
* Express
* JSON Web Token
* Bcrypt
* PayPal API
* Validator
* Lodash
* React Loading Animation
* Redux Persist NPM Package
* Classnames NPM Package
* ShortId NPM Package
* Moment JS
* AXios
* mySQL / Sequelize
* Heroku

### The Landing Page

On this page a parent can create a new account or login to an existing account. It also provides the link to the coaches portal and the administrative portal. 

![image](https://user-images.githubusercontent.com/32331741/40692490-28827116-6380-11e8-9fa2-206842bbb42f.png)

Once a new account is created, you will receive a notification that the sign up was successful.  You can then log into the account. Passwords are stored encrypted and are starred out on the log in screen for security.  

![image](https://user-images.githubusercontent.com/32331741/40692570-9b49d040-6380-11e8-8cea-4c8bb5d9da35.png)

The parent can register all children that will be participating in a sport. Once the child is registered, it will show the registered child, what sport they are playing, and whether fees have been paid.  Parent's can pay for each child directly from this website using the PayPal API.  If you need to remove a child, you just click on the red X. 

![image](https://user-images.githubusercontent.com/32331741/40692633-ee0ba150-6380-11e8-8510-c006072e8924.png)

The parent selects a specific child and the team name, the practice schedule and the game schedule will be displayed. 

![image](https://user-images.githubusercontent.com/32331741/40731947-2e154a92-6400-11e8-83ff-4e2a6b6ec380.png)
![image](https://user-images.githubusercontent.com/32331741/40731857-fb3468ce-63ff-11e8-85e0-2f4962000751.png)


### Coaches Page

The Coach has the ability to see their assigned team and create practices for the team. 

![image](https://user-images.githubusercontent.com/32331741/40731688-97ef4202-63ff-11e8-867e-2a2cd3c3ff22.png)

The Coach can see the practice schedule for the team. By clicking on the red X, a practice can be cancelled. 

![image](https://user-images.githubusercontent.com/32331741/40744777-9a154936-6423-11e8-91a9-fde1c884504f.png)

The Coach can see the game schedule and their teams opponent.

![image](https://user-images.githubusercontent.com/32331741/40731773-c59b3c60-63ff-11e8-9d32-14ce8b6bc78d.png)


### Adminstration Page

The Administrator has the ability to create teams, assign players and coaches to a team, and to create the game schedule. 

![image](https://user-images.githubusercontent.com/32331741/40728025-34f4cb66-63f7-11e8-8974-8deb047c5208.png)  

![image](https://user-images.githubusercontent.com/32331741/40728218-9f406c5a-63f7-11e8-880b-54905b3a5092.png)

### Footer

The Footer on each page provides links to external resources that may be benificial to the parents.

![image](https://user-images.githubusercontent.com/32331741/40745796-708fc584-6426-11e8-91ab-3b7c112b171b.png)

### Database

We used mySql to create 8 relational databases

![image](https://user-images.githubusercontent.com/32331741/40730758-69de342e-63fd-11e8-95b6-9a2b12752c5e.png)



May 2018, Mitch Ramsey, Mostafa Sadek, Anthony Salemo, Rob Piccoline, Donna England

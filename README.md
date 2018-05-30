# My Holly Youth Leagues Portal
A web application designed for the town of Mount Holly, NC or any town that provides youth athletic leagues. This site will be used for parents to sign up their children and as an information resource for parents, coaches, and league managers.

Try it Out !   https://mtholly-youthleague-portal.herokuapp.com/  

### The purpose of this application: 
1. Allow Parents to register their child for a sport
2. Allow Parents to see when and where the team will practice
3. Allow Parents access to the game schedule
4. Allow Coaches to create a practice schedule
5. Allow Administrators to create a game schedule

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

### The Landing Page

On this page a parent can create a new account or login to an existing account. It also provides the link to the coaches portal and the administrative portal. Passwords are stored encrypted.

![image](https://user-images.githubusercontent.com/32331741/40692490-28827116-6380-11e8-9fa2-206842bbb42f.png)

Once a new account is created, you will receive a notification that the sign up was successful.  You can then log into the account. The password field is starred out for your protection. 

![image](https://user-images.githubusercontent.com/32331741/40692570-9b49d040-6380-11e8-8cea-4c8bb5d9da35.png)

The parent can register all children that will be participating in a sport. Once the child is registered, it will show the registered child, what sport they are playing, and whether fees have been paid.  Parent's can pay for each child directly from this website using the PayPal API.  If you need to remove a child, you just click on the red X. 

![image](https://user-images.githubusercontent.com/32331741/40692633-ee0ba150-6380-11e8-8510-c006072e8924.png)

### Coaches Page

The Coach has the ability to see their assigned team, create practices for the team, show the practices for the team and show the team game schedule. 

![image](https://user-images.githubusercontent.com/32331741/40729415-4bea7598-63fa-11e8-8f97-2773b678ab38.png)

![image](https://user-images.githubusercontent.com/32331741/40729952-8be532ea-63fb-11e8-9641-de21ebac8f61.png)


### Adminstration Page

The Administrator has the ability to create teams, assign players and coaches to a team, and to create the game schedule. 

![image](https://user-images.githubusercontent.com/32331741/40728025-34f4cb66-63f7-11e8-8974-8deb047c5208.png)  ![image](https://user-images.githubusercontent.com/32331741/40728218-9f406c5a-63f7-11e8-880b-54905b3a5092.png)

![image](https://user-images.githubusercontent.com/32331741/40728375-fa0cbd5a-63f7-11e8-9a41-61471b79bfb7.png)





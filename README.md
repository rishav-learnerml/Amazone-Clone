## Amazon Clone

An E-Commerce application used to order items of diffrent categories like electronics, pantry, etc. Built with React, JavaScript, Context-Api, Router, CSS, Firebase and Stripe

## Project Status

Completed the Frontend with React and Backend with Firebase Cloud Functions of the following components:

- Home - Contains the list of products with basic layout of Header and Footer.
- Login - Contains the Login page whre you can add valid email password to Create your new amazon clone account and Sign In.
- Checkout - All the products added to the basket will show here and can be removed using Remove to Basket button. After clicking Proceed to checkout you will be redirected to Payment Page.
- Payment - This page has a static Delivery address for now. You can Review your delivery items and Stripe-Api is used for the payment method it accepst Visa Card. You can add
  42424242...until it ends for the testing. It's a default Visa card for Stripe.
- Orders - After the successful payment the on clicking the buy now the you will be redirected to Orders. Whre you can see the summary of your Order, Total Amout and the associated Payment Id. You can also come to this by clicking Orders in the Header.
- Layout - Contains Header and Footer component.

#### Future Improvements:

This project is currently in development. Users can create and Sign in to thier account or use as an Guest, add/remove products to/from the basket, proceed to checkout and complete and Payment and view thier order details.

- Responsive Design for Mobile
- Animations
- Merchant Account

## Project Screen Shot(s)
![image](https://github.com/rishav-learnerml/Amazone-Clone/blob/master/public/amazone_clone_img.png?v=600s=330)
![caption](https://github.com/rishav-learnerml/Amazone-Clone/blob/master/public/amazon_clone_gif.gif)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install` or `yarn`

To Start Server:

`npm start` or `yarn start`

To Visit App:

`localhost:3000/` in your local environment.

Amazon Clone is hosted on [Firebase](https://lnkd.in/gch6qbY).

## Reflection

This was a 2 weeks long project built during the end of December 2020 and January 2021. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features. As a Full-Stack Developer,I have learnt about more concepts in the React like React-Router, Context-API, Firebase Auth, Hosting, Cloud Functions and Stripe Payment Gateway. In that way this project was challenging and therefore a great learning experince.

Originally I wanted to build an application that allowed users to order products from the app. I can use the learnings and steps involved in building this clone to develop similar E-Commmerce Apps for the local bussinesses or Company Requirements. I started this process by using the `create-react-app` boilerplate, then adding `react-router-dom` and `firebase-tools`.React,node etc was previouslly stup on my sytem. I have stup Firebase and and Stripe for the first time to build this project as I used to make my own Rest-Apis or Custom Backend in my other projects but I've to admit that firebase gave a smooth experiance and I was able to focus more on the frontend because of that!!

Few of the main challenges I ran into was payment integration, cloud functions deployment on firebase blaze plan and tackling products with same IDs. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. I used Array-Indexes in place of ID's to tackle products with similar IDs and also used firebase-tools properly to daploy the app.

At the end of the day, the technologies implemented in this project are React, React-Router, Context-API, Firebase, Stripe and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes.

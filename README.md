## Amazon Clone

An E-Commerce application used to order items of diffrent categories like electronics, pantry, etc. Built with React, JavaScript, Context-Api, Router, CSS, Firebase and Stripe

## Project Status

Complete the Frontend with React and Backend with Firebase Cloud Functions of the following components:

- Home - Contains the list of products with basic layout of Header and Footer.
- Login - Contains the Login page whre you can add valid email password to Create your new amazon clone account and Sign In.
- Checkout - All the products added to the basket will show here and can be removed using Remove to Basket button. After clicking Proceed to checkout you will be redirected to Payment Page.
- Payment - This page has a static Delivery address for now. You can Review your delivery items and Stripe-Api is used for the payment method it accepst Visa Card. You can add
  42424242...until it ends for the testing. It's a default Visa card for Stripe.
- Orders - After the successful payment the on clicking the buy now the you will be redirected to Orders. Whre you can see the summary of your Order, Total Amout and the associated Payment Id. You can also come to this by clicking Orders in the Header.
- Layout - Contains Header and Footer component.

#### Future Improvements:

This project is currently in development. Users can create and Sign in to thier account or use as an Guest, add/remove products to/from the basket, proceed to checkout and complete and Payment and view thier order details. Functionality to host cloud functions on firebase blaze or on Heroku is in the progress.

- Responsive Design for Mobile
- Animations
- Merchant Account

## Project Screen Shot(s)

[ PRETEND SCREEN SHOT IS HERE ]

[ PRETEND OTHER SCREEN SHOT IS HERE ]

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install` or `yarn`

To Start Server:

`npm start` or `yarn start`

To Visit App:

`localhost:3000/` in your local environment.

Amazon Clone is hosted on [Firebase](https://clone-4afa0.web.app/).

## Reflection

This was a 1 week long project built during the end of Summers in Covid Year 2020. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features. As I an Frontend Developer. Didn't had much experince with database and Payment Gateways. I have learnt about more concepts in the React like React-Router, Context-API, Firebase Auth, Hosting, Cloud Functions and Stripe Payment Gateway. In that way this project was challenging and therefore a great learning experince.

Originally I wanted to build an application that allowed users to order products from the app. I can use the learnings and steps involved in building this clone to develop similar E-Commmerce Apps for the local bussinesses or Company Requirements. I started this process by using the `create-react-app` boilerplate, then adding `react-router-dom` and `firebase-tools`.React,node etc was previouslly stup on my sytem. I have stup Firebase and and Stripe for the first time to build this project.

One of the main challenges I ran into was payment integration, cloud functions deployment on firebase blaze plan. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router, Context-API, Firebase, Stripe and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.

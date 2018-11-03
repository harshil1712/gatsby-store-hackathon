# Gatsby Starter eCommerce

Demo: <https://parmsang.github.io/gatsby-starter-ecommerce/>



## Getting started

Install the Gatsby CLI (click [here](https://www.gatsbyjs.org/tutorial/part-zero/#install-the-gatsby-cli))

Clone the repo. Hit the following command to clone the repo
`git clone https://github.com/harshil1712/gatsby-store-hackathon.git `

### Package Installation

To install packages

- If you have yarn installed

    `yarn install`

- or if you have npm

    `npm install`


### Running in development

Run the development server

`gatsby develop`

After successful build you will see the following message

```
You can now view gatsby-starter-ecommerce in the browser.

  http://localhost:8000/

View GraphiQL, an in-browser IDE, to explore your site's data and schema

  http://localhost:8000/___graphql

Note that the development build is not optimized.
To create a production build, use gatsby build
```

Opne your browser and go to `http://localhost:800` and you will see website

## Working With Git

Before you start making changes remember to create a new branch

`git checkout -b BRANCH_NAME`

Make all the changes (you will see the live changes, you don't have to restart the server again)

After you are done with the changes 

`git add .`

`git commit -m "COMMIT MESSAGE"`

`git push -u origin BRANCH_NAME`

### Additional Setup

Both a moltin and Stripe account are needed for this store to run successfully.

Create a `.env.development` and `.env.production` file at the project root with your moltin `client_id` and Stripe test `publishable key`.

```dosini
MOLTIN_CLIENT_ID=
STRIPE_PUBLISHABLE_KEY=
```

## Features

- Moltin eCommerce API
- React 16
- PWA (includes manifest.webmanifest & offline support)
- Eslint & Prettier
- Styled Components
- Google Analytics - (you enter the tracking-id)
- Semantic-UI
- Authentication via Moltin (Login and Register)
- Stripe checkout

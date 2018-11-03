# Gatsby Starter eCommerce

Demo: <https://parmsang.github.io/gatsby-starter-ecommerce/>



## Getting started

Install the Gatsby CLI (refer Gatsby docs)

Clone this repo

### Package Installation

If you don't have yarn install, install yarn.

once yarn is installed, go to the project directory and run 

`yarn install`

this will install all the packages


### Running in development

to run the development server use
`gatsby develop`

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

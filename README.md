<h1 align="center">
   Ecoleta Backend
</h1>

## Introduction

Ecoleta is a Web and Mobile application to help people find collection points for recycle. This Aplication was developed during NLW, event by RocketSeat.

The Ecoleta project was tree partes, this repository is a back-end.  
The front end is available here [ecoleta-web](https://github.com/mouracamila/ecoleta-web)
And the Mobile application here [ecoleta-mobile](https://github.com/mouracamila/ecoleta-mobile)

### Requirements

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## How to use

1. Clone this Repository:

   `$ git clone git@github.com:mouracamila/ecoleta-serv.git`

2. Installing dependencies:

   `$ npm install`

3. Create the data base:

```sh
    $ cd server
    $ npm run knex:migrate
    $ npm run knex:seed
```

4. Running project:

   `$ npm run dev`

##### Obs: **npm** should be run where **package.json** is in your project

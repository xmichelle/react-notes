# react-notes
A web app for JavaScript developers who want to save notes about what they have learned.

![image](https://user-images.githubusercontent.com/29046211/29438185-d88ff472-8369-11e7-821e-0c0d5e9b8f6d.png)

## Setup
Install [Git](https://git-scm.com/), [Node](https://nodejs.org/en/), and [Brew](https://brew.sh/).

    $ git clone https://github.com/xmichelle/react-notes.git
    $ cd react-notes
    $ npm install
    $ brew install postgresql
    $ brew services start postgresql
    $ createuser [username]
    $ createdb -O [owner] notes
    $ npm run watch

Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser.

## Technologies Used
  * [React](https://facebook.github.io/react/)
  * [Express](https://expressjs.com/)
  * [PostgreSQL](https://www.postgresql.org/)
  * [Mocha](https://mochajs.org/)
  * [Chai](http://chaijs.com/)

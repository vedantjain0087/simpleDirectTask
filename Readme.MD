# The SWAPI Crawler
## About The Project
This project was created to help the college kids to use the missing functionality of the swapi API mainly
`search by name/title`, `sort the results`

### Deployed on
[https://test-app-vedant.herokuapp.com/](https://test-app-vedant.herokuapp.com/)

### Built With

* Node.js
* Mysql

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* You should have `NodeJs version 14 or above`
* You must have `npm` installed as well

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/vedantjain0087/simpleDirectTask.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file in the root folder and copy the contents of the `.env-template` in it

4. If you are not having the credentials of the env file to fill then you must contact the author of this project or either check the project submission information.

5. Start the project
    ```sh
    npm start
    ```
## About the CRON Job
This project uses [node-cron](https://www.npmjs.com/package/node-cron) to create and schedule CRON JOBS. This job is scheduled to Sync DB every 30 mins
## Database

* The Database dialect is `MYSQL` hosted on [Heroku - Clear MySQL](https://devcenter.heroku.com/articles/cleardb)
* To understand the underlying schema, you can check the `models` folder in the root directory
## Abou the API

The baseUrl of the API is https://test-app-vedant.herokuapp.com/. The overall design of the API is
<br>
`https://test-app-vedant.herokuapp.com/query/<ENTITY>/?search=<YOUR_SEARCH_TEXT>&sort=<SORT_TYPE>`

* **ENTITY**: It can be one of the following [films, planets, species, people, vehicles, starships]

* **SEARCH_TEXT** : This can be your search value or keyword by which you want to search an entity

* **SORT_TYPE**: This can be either `asc` or `desc`.

## Test Cases
This project uses [Jest](https://www.npmjs.com/package/jest) and [SuperTest](https://www.npmjs.com/package/supertest) to write test cases and execute them.
1. To run the test cases
    ```sh
    npm run test
    ```
2. To run test cases ang get coverage report
    ```
    npm run test-report
    ```
<!-- CONTACT -->
## Contact

Vedant Jain - mainvedant.vns123@gmail.com

Project Link: [https://github.com/vedantjain0087/simpleDirectTask](https://github.com/vedantjain0087/simpleDirectTask)
<br>
Project URL: [https://test-app-vedant.herokuapp.com/](https://test-app-vedant.herokuapp.com/)
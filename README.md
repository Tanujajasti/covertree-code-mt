# Covertree-Code-MT

Covertree-Code-MT is a backend application to manage data for the employee database. This application retrieves data from MongoDB by creating the RestAPIs. All CRUD operations are allowed.

## Installation

To install Covertree-Code-MT, follow these steps:

1. Clone the repository from GitHub.
2. Install the required dependencies using `yarn install`.
3. Configure the application by modifying a `config.ts` file with your environment variables. (Specific mongodb connection string, etc.,)
4. Start the application using `yarn start`.

  ### Dependencies

  Covertree-Code-MT requires the following dependencies:

  - Node.js
  - MongoDB
  - Yarn

## Usage

To use the Rest API, follow these steps:

1. Open postman and use `http://localhost:8000/employee`.
2. Diffrent APIs exposed with this applications are:
    - Add employee: http://localhost:8000/employee (POST)
    - Get employees: http://localhost:8000/employee (GET)
    - Get employees - sorted data: http://localhost:8000/employee?sort=salary (GET) 
        - Value of the sort should be a valid column name
    - Get employees -  salary filter: http://localhost:8000/employee/filter?column=salary&start=1000000&end=5000000 (GET)
    - Get employees  : http://localhost:8000/employee/64216a6751179bd9ace18ec0 (GET)
    - Update employee - based on ID: http://localhost:8000/employee/642169d051179bd9ace18ebe (PUT)
    - Delete employee - based on ID: http://localhost:8000/employee/64216ec45c6dc35b5137442a (DELETE)

# Project Title

```
This is an Api for a cv_extractor application, dealing with different requests
and supplying the application with data from MongoDB that is hosted on the cloud.
```

## Getting Started

### You will need the following installed to run the application:

- Npm
- NodeJs

### First in the terminal run :

npm install

### Then run :

npm start

```
The application will run on your local host port 8000, to change the port number you should head to _Index.js_file and change the variable _PORT_ to your chosen number.
```

## The Api routes:

**ROUTE**                     | **FUNCTION**
----------------------------- | ----------------------------------------------
`get('/home')`                | get all the employees data
`get(/employee/:id)`          | get employee data by id.
`post(/employee)`             | creates a new employee.
`patch(/employee/:id)`        | edits the employee with this id.
`get(/employees/:page/:size)` | get SIZE of employees data for a certain page.
`delete(/employee/:id)`       | delete an employee of a certain id.
`post(/search)`               | search by a certain filter value.
`get(/project/:id)`           | get project data by id.
`post(/project)`              | creates a new project.
`patch(/project/:id)`         | edits the project with this id.
`delete(/project/:id)`        | deletes a project with this id.
                              

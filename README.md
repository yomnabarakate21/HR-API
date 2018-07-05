# Project Title
 ```
This is an Api for a cv_extractor application, dealing with different requests
and supplying the application with data from MongoDB that is hosted on the cloud.
```
## Getting Started

#### You will need the following installed to run the application:
- Npm
- NodeJs

#### First in the terminal run :
npm install
#### Then run :
npm start

```
The application will run on your local host port 8000, to change the port number you should head to _Index.js_file and change the variable _PORT_ to your chosen number.

```
## The Api routes:
 **ROUTE**  |  **FUNCTION**
--|--
  `get('/home')`|  get all the employees data
  `get(/employee/:id)`|  get employee data by id.
  `get(/employees/:page/:size)`|  get SIZE of employees data for a certain page.
  `delete(/employee/:id)`|  delete an employee of a certain id.
`get(/search/:param1/:param2/:param3?)`  |  search by a certain filter:** name ** :( _firstname_ , _lastname_) ,**email**...**etc**) and add the value.

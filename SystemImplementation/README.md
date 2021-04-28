# System Implementation  

## Overview

In our single page application, we chose to use the MEAN stack. MEAM stands for MongoDB, Express, Angular and Node.js. In the MEAN stack, Angular handles the front-end clientside application, MongoDB handles the backend database, and Node.js and Express handle the middle tier server. Specifically, Express handles services and getting data from the database, and node.js provides a runtime environment. 

![Structure of a MEAN stack](mean-stack.png)

Below is an example sequence diagram for our application which shows in more detail how the different parts of the stack work together:

![Sequence diagram](sequence-diagram.png)

## Database

MongoDB is a NoSQL database program which uses JSON-like documents. A NoSQL database is more scalable and flexible compared with traditional SQL databases. To make it easier to use data from the database, the Object Data Modeling (ODM) library Mongoose is used.

Below is the initial data model planned for the application:

![Entity relationship diagram](er_diagram_sugar_rush_v2.png)

However, during development, it was decided that for a minimum viable product the meals collection was not necessary and it was thus not implemented.

- the schema for each collection in the database was defined in the model files. 

## Server

- As stated before, Mongoose is used in our application with the server/middle-tier components to process requests from the front-end and to return the data from the database. 
- This is accessed through a RESTful API which used HTTP requests to operate data. 
- All of these is built on the Express framework. 
- Express is configured in the server.js
- Connection to database is established in server.js through a db.js file.
- server.js also set up the routing to the APIs

## Client-side Application

Angular has a couple of uses in developing a web application:
- a component-based framework
- a collection of libraries to handle features including routing, forms, client-server communication
- and a suite of developer tools to help develop, build, test and update the code.

### View
Using the component-based framework, each of the sections of the application is generated dynamically in the appcomponent. The structure of the components is as below: 
(Note that a dashed connection indicates that the connected component is a modal component that can be opened up from the parent component.
![component hierachy diagram](Component_diagram.png)
- something about how the html of the pages are generated on the client side

### Routing

## Additional Features
### Seeding the database
The database was seeded using a javascript file. The file makes use of mongoose to clear each collection (just to reset it) and then insert the new documents into the collections. This script is ran on start-up of the docker container along with the command to start the express server. This was accomplished by having a bash script that contained both of these commands in the docker-compose.yml file. There will be more details about the deployment of the site in the next section.

### Authentication (or lack thereof)
- We first considered incorporating authetication before our first user testing session. 
- But from the results of the user testing, we decided against this
- (Do we talk about this here or in the user testing session?)

## Deployment
For our application, Docker is used for deployment to provide a consistent runtime environment. Our application is run on two containers with one container running the node.js environment and one container running the database. 

A Dockerfile is used to build the nodejs container using the official image as a parent image. The database container is just the official image. A script is used to ensure that the nodejs container waits for connection to the database to be established before starting using a start up script mentioned in the previous section. 

In development, we had trouble with the the wait-for.sh script due to line endings being changed by git. As such, we edited the Dockerfile to download the wait-for script from its source each time the image is built.


- Stack architecture and system design (e.g. class diagrams, sequence diagrams)
    - Class diagrams
        - Brief description
        - Advantages and disadvantages of our setup
    - Sequence diagrams and brief description
        - Brief description
        - Are there any ways we could have improved this with more time?
- Back End - MongoDB - database implementation, the data model that you developed your back end from (e.g. entity relationship diagrams).
    - Entity relationship diagram
    - Why did we choose this model?
    - What design choices/changes did we make
        - Storing meals in food instead of meals
        - Removing the need of the meal collection
        - Use of arrays in collections  
- Middle Tier - Express, Node, the RESTful API
    - Express
        - What did we use Express for?
        - How was it implemented?
        - Why did we use it this way?
    - Node
        - How did we use node?
        - Wny did we use it this way?
    - RESTful API
        - How did we use node?
        - Why did we use it this way?
- Front End - Angular. Details of implementation.
    - How did we use angular?
    - How were the components organization?
    - Why did we decide to do it this way?
- Additional elements and components e.g. authentification. Tell us about any other aspects not covered above!
    - Why didn't we use user authentication?
    - What benefit would user authetication have had?
    - Seeding the database
    - Quiz techinical overview
    - Social media sharing (if completed)
- Deployment details (including Docker), include how you have been achieving continuous integration and deployment.
    - How have we achieved continuous integration?
    - Docker
        - Things we changed in the docker file
        - Ways we used docker
        - Instructions for how to deploy?

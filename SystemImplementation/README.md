## 3. System Implementation 
* [3.1 Overview](README.md#31-overview)
* [3.2 Database](README.md#32-database)
* [3.3 Server](README.md#33-server)
* [3.4 Client-side Application](README.md#34-client-side-application)
  * [3.4.1 View](README.md#341-view)
  * [3.4.2 Interactions](README.md#342-interactions)
  * [3.4.3 Injectables/Services](README.md#343-injectablesservices)
* [3.5 Additional Features](README.md#35-additional-features)
  * [3.5.1 Seeding the database](README.md#351-seeding-the-database)
  * [3.5.2 Authentication](README.md#352-authentication-or-lack-thereof)
  * [3.5.3 404 error page](README.md#353-404-error-page)
  * [3.5.4 Responsiveness](README.md#354-responsiveness)
* [3.6 Deployment](README.md#36-deployment)
  * [3.6.1 Docker Implementation](README.md#361-docker-implementation)
  * [3.6.2 Docker Optimisations](README.md#362-docker-optimisations)
  * [3.6.3 Continuous Integration](README.md#363continuous-integration)

### 3.1 Overview

In our single page application, we chose to use the MEAN stack. MEAN stands for MongoDB, Express, Angular and Node.js. In the MEAN stack, Angular[<sup>[1]</sup>](README.md#references) handles the front-end clientside application, MongoDB[<sup>[2]</sup>](README.md#references) handles the backend database, and Node.js[<sup>[3]</sup>](README.md#references) and Express[<sup>[4]</sup>](README.md#references) handle the middle tier server. Specifically, Express handles services and getting data from the database, and node.js provides a runtime environment. 

![Structure of a MEAN stack](mean-stack.png)

Below is an example sequence diagram for our application which shows in more detail how the different parts of the stack work together:

![Sequence diagram](sequence-diagram.png)

### 3.2 Database

MongoDB is a NoSQL database program which uses JSON-like documents. A NoSQL database is more scalable and flexible compared with traditional SQL databases. To make it easier to use data from the database, the Object Data Modeling (ODM) library Mongoose[<sup>[5]</sup>](README.md#references) is used.

Below is the initial data model planned for the application:

![Entity relationship diagram](er_diagram_sugar_rush_v2.png)

However, during development, it was decided that for a minimum viable product the meals collection was not necessary and it was thus not implemented.

- Schema for each collection in the database was defined in the model files in the ./models/ directory.
- API to access each collection was found in ./server/routes/ directory.
- More details on how the documents are accessed is described in the server section.

### 3.3 Server

![Node setup diagram](node-require-diagram.png)
- Several RESTful APIs were set up to access each of the collections in the database. Mongoose is used to process these requests and communicate with the database. These were all built on the express framework and setup as illustrated in the diagram above.
- server.js is the main file used to implement the server-side code for Node.js. In the server.js file, Express is configured, connection to database is established through the db.js file, and routing to the APIs are set up.

### 3.4 Client-side Application

Angular has a couple of uses in developing a web application:
- a component-based framework
- a collection of libraries to handle features including routing, forms, client-server communication
- and a suite of developer tools to help develop, build, test and update the code.

#### 3.4.1 View

Using the component-based framework, each of the sections of the application is generated dynamically in the appcomponent. The structure of the components is as below: 
(Note that a dashed connection indicates that the connected component is a modal component that can be opened up from the parent component.)

![component hierachy diagram](Component_diagram.png)

We utilised CSS/UI frameworks by importing various modules from Angular Material[<sup>[6]</sup>](README.md#references) and Bootstrap[<sup>[8]</sup>]. Some examples include:
- Angular Material selection list to display clickable food options in the food-quiz component
- Angular Material progress bar to show cumulative sugar consumption in the food-quiz component
- Angular Material button for navigation and selection throughout the site
- Bootstrap modal to display instructions on page-load in the village component
- Bootstrap 'jumbotron' to wrap content in the village and food-quiz components

#### 3.4.2 Interactions

Due to the quiz format of the application, the quiz component needs to change dynamically as the user interacts with it. This is achieved through conditional statements in the template (HTML) and class (typescript). The chart below illustrates the processes in this component:

(Yellow blocks shows user input, grey blocks show updated display, blue diamonds show conditional statements in the template, and the orange tracks shows how/when the boolean values checked in the conditional statements are updated.)

![flowchart for foodQuizComponent](quiz-flowchart.png)

#### 3.4.3 Injectables/Services

![injectables diagram](injectable.png)

The services generated using Angular allow us not only to access the collections from the database, but also allowed us to pass data between components through the front-end. We decided to use this instead of persistent storage as the results for the quiz should only be kept in that particular session and is only needed by the client-side. 

In our application, we need to keep track of the choices made during the quiz, the score, and the condition (win or lose) from the food-quiz component and pass that to the game-end component. 

Note that in order for the modal components to access a service, we found that the service needed to be first linked to MatDialog module. 

### 3.5 Additional Features
#### 3.5.1 Seeding the database
The database was seeded using a javascript file. The file makes use of mongoose.
- each collection is cleared using `delete.many({})` 
- new documents are initiated and saved into the collection

This script is ran on start-up of the docker container along with the command to start the express server. This was accomplished by having a bash script that contained both of these commands in the docker-compose.yml file. There will be more details about the deployment of the site in the [deployment](README.md#deployment) subsection.

#### 3.5.2 Authentication (or lack thereof)
We first considered incorporating user authentication (i.e., a login page) on the web app. During our first user testing session, however, we found that most people did not see the point of having authentication for this type of application and would have found it either confusing or concerning that it is required. As a result, we chose not to include in our design. 

#### 3.5.3 404 error page
We implemented a 404 error page by adding a PageNotFound component to our Angular project and setting up a wildcard path in the app-routing module. This presents users with an error message when they try to visit a page that cannot be found. For example, if they type in a URL wrong or if the page has been moved and not redirected properly.  

#### 3.5.4 Responsiveness
To implement responsiveness, we relied heavily on tools such as flexbox and bootstrap, taking advantage of their auto-alignment and scaling properties. Where possible, we also opted for em and percentage measurements for content in preference to pixels. This ensured that responsiveness was as inherent as possible in the application’s layout. Where appropriate, we also made use of a limited number of supporting media queries.

### 3.6 Deployment

#### 3.6.1 Docker Implementation
For our application, Docker[<sup>[7]</sup>](README.md#references) is used for deployment to provide a consistent runtime environment. Our application is run on two containers with one container running the node.js environment and one container running the database.

A Dockerfile is used to build the `nodejs` container within an Alpine image.
  - All packages listed in the project package.json folder are copied to the image
  - All other relevant project files are copied to the image
  - All relevant packages are installed using `npm install`
  - Windows line endings are removed from relevant scripts
  - The site is built using `ng build`
  - Port 3000 is exposed and node is run

The publicly availabe mongo:4.1.8-xenial image is used to run an instance of MongoDB in our `db` container.

A docker-compose.yml file is used to run both containers. It:
  - Sets relevant environment variables
  - Exposes ports to the host for both `db` and `nodejs` containers
  - Executes script to ensure `nodejs` does not run before `db` is running
  - Executes script to seed our database with site data 

#### 3.6.2 Docker Optimisations

Over the project period, we made several optimisations to improve our experience with Docker. When pulling files from our repository, Git changes the file endings based on someone's git configuration. When these files are copied over to the container, specifically shell scripts, the container can fail to build correctly due to unexpected characters in the file. We addressed this issue in two ways:
  - We installed the wait-for.sh script when building `nodejs`
  - We used dos2unix to remove Windows file endings from any scripts we planned to run within our container.

During development and testing, building docker containers required 2-15 minutes of build time, which made testing small site changes burdensome to implement. In order to address these issues, we made changes to improve general usability.
  - We allowed local connections to `db`. Mongo running on a local device will use port 27017 by default, and this can prevent database connection when running the site on a local host. In order to address this, we needed to do the following:
      - Add an additional environment variable to specify another port.
      - Expose a port for local database hosting
  - We added node_modules to a .dockerignore file. This directory is built when the container is built via `npm install`.

#### 3.6.3 Continuous Integration

Throughout our project, we achieved continuous integration using Git and GitHub. For more information on how continuous integration was used for in combination with sprints, see our [Sprints and Project Management section](/SprintsAndProjectManagement/#continuous-integration). Within our development cycle, continuous integration was used extensively when developing, testing, staging, and publishing our code. Within these stages we used different branches:
- The `main` branch was primarily used as a production or demo-ready environment. 
- The `develop` branch was primarly used as a staging environment for new code changes. 
- Individual feature branches were used to create and test new changes.

##### Development
When developing a new change for the website, an individual feature branch would be created from an up-to-date version of the `develop` branch. We planned co-dependent tasks sequentially across different sprints to avoid complicated merges. Althernatively, these co-dependent features could be developed in the same sprint by branching from the parent feature over `develop`. We chose this approach for simplicity. 

Branch creation had no set process. Team members could create a branch locally using Git and push the branch to the remote repository. When creating a branch locally, members needed to perform a `git pull` command to make sure their local repository matched the remote repository. Members could also create a branch on GitHub. Once a branch was created, it was developed locally with frequent commits and pushes to the remote repository. 

While developing features, we tested functionality as we went, but the methods for doing so evolved over the project. As mentioned above, we initially used docker to build our project to test any changes, regardless of complexity. This method took additional time because a Docker image needed to be at least partially built. Once we exposed local ports for the `db` container, we tested all small changes locally.

##### Testing 
After completing development of a feature, our processes called for more rigorous testing. The testing process was divided into different rounds. Simple changes required one round of testing. Complex, integrated changes required two rounds of testing, one performed by the developer and one by another team member. A round of testing consisted of following steps:
  1. Test website in feature branch
  2. Test website in `develop`
  3. Merge feature branch into local `develop` branch
  4. Test website in `develop`

Implementing steps 2 and 3 was extremely valuable to us. If testing fails during step 2, the developer knows there is an existing problem in develop. If testing fails after step 3, the developer knows a problem was introduced by the new feature.

##### Staging
After new features were successfully tested, they were staged by merging the changes into `develop` via a pull request. In general, we preferred the GitHub pull request over a `git push` terminal command. The `git push` command has few guardrails and limited documentation compared to the pull request feature. Pull requests also allow members to delete the remote feature branch with a single click during the merge. 

In some scenarios, merges could not be automatically completed within a pull request. These situations usually resulted from file conflicts, which would need to be manually resolved. We allowed two methods to complete the merge. The easier of the two methods involved simply performing a `git push` from our *local* repository, where conflicts were already resolved during testing. Members also had the option to follow steps GitHub recommended within the pull request. For both methods, Atom was used to resolve file conflicts.

After we staged any change, we performed a quick test to verify the application behaved as expected. Occasionally, staging `develop` created an issue with another part of the webiste. For example, once two different members made changes to the quiz component, and during conflict resolution a variable name was renamed incorrectly. The resulting change prevented sugar content from appearing within the quiz and was missed during testing. When these issues were spotted, they were handled differently depending on their severity. For severe issues, changes were made directly in `develop`. For less severe issues, they were fixed within an existing feature branch and eventually mgerged into `develop`.

##### Publishing
The final step of our continuous integration cycle was to publish features by merging `develop` into `main`. We chose to do this on a biweekly basis because we were more likely to find issues present in `develop` over a two-week period. When publishing changes, another testing process was performed to identify any potential issues discovered during the merge:
  1. Test website in `develop`
  2. Test website in `main`
  3. Merge `develop` into `main` via a GitHub pull request unless conflicts required otherwise.
  4. Test website in `main`

Although the decision to have a biweekly merge into `main` allowed it to remain stable and demo-ready, it also allowed merges to become complex. Though we never encountered issues with this strategy, a weekly merge could have improved our process by limiting the complexity of these merges.

### References:
1. Angular - https://angular.io/
2. MongoDB - https://www.mongodb.com/
3. Node.js - https://nodejs.org/en/
4. Express - Node.js web application framework - https://expressjs.com/
5. Mongoose ODM v5.12.7 - https://mongoosejs.com/
6. Angular Material UI component library - https://material.angular.io/
7. Docker: Empowering App Development for Developers - https://www.docker.com/
8. Bootstap · The most popular HTML, CSS and JS library in thr world. - https://getbootstrap.com/

[Previous Section](/BackgroundAndMotivation/README.md) | [Home](../README.md) | [Next Section](/UXDesign/README.md)

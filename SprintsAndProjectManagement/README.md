## 5 Sprints and Project Management
* [5.1 Team Communication](README.md#51-team-communication)
* [5.2 Team Member Roles](README.md#52-team-member-roles)
* [5.3 Sprint Overview](README.md#53-sprint-overview)
* [5.4 Continuous Integration](README.md#54-continuous-integration)
	* [5.4.1 Development](README.md#541-development)
	* [5.4.2 Testing](README.md#542-testing)
	* [5.4.3 Staging](README.md#543-staging)
	* [5.4.4 Publishing](README.md#544-publishing)

### 5.1 Team Communication
Throughout our group project we relied on Agile to help divide and plan our project. Our workflow was a slightly modified version of the Agile process[<sup>[1]</sup>](README.md#references). We did not incorporate Epics or Initiatives into our workflow as the entire project fit into one or two Epics. However, we did take advantage of several other aspects from Agile, namely: standups, sprints, and kanban.   

We initially considered using the waterfall project management style for our project. However, waterfall has some disadvantages which did not work well for our team[<sup>[2]</sup>](README.md#references):
* Waterfall-style projects inhibit team member specialisation because developers focus on only one part of the development stack during each stage. 
* Team member motivation can also be damaged if members are forced to work on uninteresting areas. 
* The planning aspect of waterfall is risky and could be eratic. Phases are large and all-encompassing, making them difficult to plan, and one phase of the project can force every subsequent phase to be delayed. 

Agile worked best for our team because it is more flexible and allows developers to specialise in areas they prefer. You can find out more about the specialization [in a section below](README.md#52-team-member-roles).
	
[Sprints](README.md#53-sprint-overview) were the primary tool that we used to group our project tasks and communicate goals. Regular meetings regarding sprints were the bulk of our team's communication. Notes from all meetings were recorded in OneNote ([click here to view a PDF version](allMeetingNotes.pdf)).

Additionally, we held three key meetings of note:

| Date | Members | Summary | Documentation |
| :---: | :---: | :--- | :---: |
| 29 March, 2021 | Angela, Kyle, Olivia, Zack, Zain | This session was used to review users feedback on our initial design plans and make critical design adjustments. | [UX Design - User Interviews](../UXDesign/README.md#44-user-interviews) |
| 12 April, 2021 |  Angela, Kyle, Zack | This session was used to connect the backend to our frontend. During this meeting, these three members worked together using paired-programming to implement services into Angular. | [System Implementation - Injectables/Services](../SystemImplementation/README.md#343-injectablesservices) |
| 10 May, 2021 |  Angela, Kyle, Olivia, Zack, Zain | This session was used to collaboratively outline the conclusion for our write up. This time was used as a reflection to talk about our processes and explore how the project went. | [Conclusion](../Conclusion/README.md) |

In addition to these meetings our team also used other means of communication: 
  - Instant messaging for one off questions and announcements
  - Video calls for discussing complicated questions and tasks
  - Paired programming for completing challenging development
  - 'Group study' sessions to focus on sprint tasks and simulate working concurrently in a computer lab

'Group study' sessions were introduced later in the project to induce certain working conditions. Throughout the project, team memebers felt they were missing the opportunity to work together like we would have without virtual learning. These sessions helped provide the team with an opportunity to ask questions or work individually throughout a set period of time.

### 5.2 Team Member Roles
Our members specialised in areas that initially piqued our interests. We agreed to have multiple people in each area, and if one area was uninteresting or frustrating, members could switch roles to maintain maximum motivation. When determining roles, we initially divided roles between front end and back end. Within front-end roles, members specialised in either Angular development or UX/UI. For back-end roles, members specialised in Mongo, Node, or Express. Members could choose 2-3 roles, and were able to mix and match between the two categories. In addition to these roles, we also assigned a project manager role. While we each specialized in a particular area, we also helped with other aspects of development, allowing for general knowledge in multiple areas. An overview of areas and contributions can be found below.

![Image](TeamRoles.png)  

### 5.3 Sprint Overview

During our project we used one-week sprints to plan our work. 
![Image](sprintSchedule.png)

The contents of each sprint were determined during our weekly sprint planning meetings, which took place on Friday mornings. To keep these planning sessions productive, we created goals and guidelines to follow. The agenda included the following:
  - Overview of previous sprint's accomplishments
  - Overall team goals for the next sprint
  - Tasks that help achieve these goals
  - Progress towards overall project objectives 

Tasks for the week were planned in the form of user stories, which were documented in a kanban board [(click here to view)](https://trello.com/b/ZzT0p21S/site-development). Within this tool, we used a backlog as a placeholder for all tasks we needed to produce our minimum viable product. We also had a secondary backlog for non-critical features we would like to implement if time permits. 

Following the planning meeting, the sprint would run the following week from Monday to Sunday. On each weekday we met for a standup meeting[<sup>[3]</sup>](README.md#references) to discuss the following:
  - Things we've done between the previous meeting and now
  - Things we're planning to work on today
  - Designs for integrated developement
  - General questions or topics about the project   
The primary goals of these meetings were to assign tasks, balance workload among members, and raise awareness of current tasks. Because standups are intended to be shorter meetings, we tried to keep the meetings between 15-30 minutes. 

Throughout our project, we had a total of five sprints, each lasting a single week. The first sprint occurred the week of 29 March 2021. Each sprint focused on a specific subset of tasks (you can click on each of the sprints to see more details about our plans): 
  - [Sprint I](SugarRushSprint1.pdf)
      - Have an application that builds successfuly
      - Implement components and site navigation
  - [Sprint II](SugarRushSprint2.pdf)
      - Convert components to match wireframe
      - Hardcode data for a mock backend
  - [Sprint III](SugarRushSprint3.pdf)
      - Create a functional quiz page
      - Connect application with database
  - [Sprint IV](SugarRushSprint4.pdf)
      - Make game end dynamic depending on quiz
      - Improve Github documentation
  - [Sprint V](SugarRushSprint5.pdf)
      - Improve Github documentation
      - Improve sugar indicators throughout application
  - [Sprint VI](SugarRushSprint6.pdf)
      - Add icons and colours to indicate sugar content
      - Add a meal summary to review quiz selections
      - Improve the colour scheme and graphics
      - Start incorporating responsive website design

Users stories were used to guide each sprint and the above goals. While the goal was to complete user stories within one sprint, unforeseen complications and competing priorities sometimes caused delays. When a user story was delayed, we evaluated the task to determine the root cause of the delay. We then adjusted future sprint planning to prevent similar delays in the future.

![Sprint Diagram](SprintDiagram.png)

During our sprints, three main features served as highlights for our project:

1. During Sprint III, when we finished the basic functionality for the quiz component we were much closer to accomplishing our minimum viable product. At this stage, we had connected the quiz to our food database and could pull question contents and information from it. The user could also complete a quiz that logged the total amount of sugar from their quiz answers. This was the most critical step in our project. 
2. During Sprint III and IV, we added functionality to allow user state to flow from one component to another via our services. We used this functionality to create a dynamic game-end component that allows users to review quiz results and answers. These features marked another step towards arriving at our minimum viable product.
3. Finally, another highlight was the successful implementation of Docker for all team members. Prior to functional Docker configuration, the team had encountered issues building the aplication after pulling changes from the remote repository. Using Docker allowed us to have a standard container for our applicaiton. Docker implementation also allowed us to seed our database identically and connect our website to expected data. 

These three accomplishments form the backbone of the current version of our product.

### 5.4 Continuous Integration
Throughout our project, we used Git with a Gitflow[<sup>[4]</sup>](README.md#references) style workflow to achieve continuous integration. Our initial strategy involved having two primary branches: the [main](../../../tree/main) branch was used as a demo-ready environment; the [develop](../../../tree/develop) branch was used to stage new development. When completing new developments, we started by creating user-story-based branches from `develop`. After completing the feature, we merged the changes back into `develop`. As our application took shape and became more complex, we implemented more rigorous processes to ensure changes did not cause loss of functionality.

![Image](DevProcess.png)

[Click here](SugarRushDevCycle.pdf) to see a more detailed plan of our process, which focused on key steps for each stage of the development cycle. The beginning of the cycle includes [ideation](../UXDesign/README.md) and sprint planning [(as discussed above)](README.md#53-sprint-overview). The remaining stages of development form our continuous integration.

#### 5.4.1 Development
Feature branches were used to develop functionality for user stories. Our process requiered these branches be made from an up-to-date `develop` branch. Some user stories were dependent on functionality from other features. To avoid complicated merges, we planned these dependent tasks sequentially so that they occurred in different sprints.  

#### 5.4.2 Testing 
Testing was required following completed development of a feature. In general, testing involved testing the application in the staging environment and the feature environment to make sure both had expected behaviour. Depending on the complexity of the change, additional team members performed testing on the change. For sprint planning, tesing time was bundled together with estimated development time.

#### 5.4.3 Staging
Following testing, all changes were merged into the remote `develop` branch. Changes within `develop` would then be included in any new branches. This continuous use of completed development while implementing new changes provided frequent use of existing changes, allowing them to become more robust.  

#### 5.4.4 Publishing
In order to publish changes, all changes in `develop` were merged into `main` on a biweekly basis, or every two sprints. We chose this schedule arbitrarily, but we liked the idea of incorporating changes from two whole sprints to see more noticeable changes in `main`. This decision allowed us to catch big issues in `develop` before they made it to `main`, which helped it remain stable. Stability in `main` was important for our group as we primarily used this branch for demos.

### Appendix
1. [Complete meeting notes](allMeetingNotes.pdf)
2. [Kanban board](https://trello.com/b/ZzT0p21S/site-development)
3. [Sprint I plan](SugarRushSprint1.pdf)
4. [Sprint II plan](SugarRushSprint2.pdf)
5. [Sprint III plan](SugarRushSprint3.pdf)
6. [Sprint IV plan](SugarRushSprint4.pdf)
7. [Sprint V plan](SugarRushSprint5.pdf)
8. [Sprint VI plan](SugarRushSprint6.pdf)
9. [Detailed development cycle plan](SugarRushDevCycle.pdf)

### References
1. Get started building an agile workflow | Atlassian - https://www.atlassian.com/agile/project-management/workflow
2. Waterfall vs agile: how to manage agile programs | Atlassian - https://www.atlassian.com/agile/project-management/program
3. Daily Standups: How to Run Them - Agile Coach (2019) - Youtube - https://www.youtube.com/watch?v=er9gntPjTJU
4. Gitflow workflow | Atlassian - https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

[Previous Section](/UXDesign/README.md) | [Home](../README.md) | [Next Section](/Evaluation/README.md)

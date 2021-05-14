## 7 Conclusion
* [7.1 Group Work Reflection](README.md#71-group-work-reflection)
	* [7.1.1 Agile Development](README.md#711-agile-development)
	* [7.1.2 Communication](README.md#712-communication)
* [7.2 Success Reflection](README.md#72-success-reflection)
* [7.3 Impact of Pandemic](README.md#73-impact-of-pandemic)
* [7.4 Social and Ethical Impact](README.md#74-social-and-ethical-impact)
	* [7.4.1 Product Ethicality](README.md#741-product-ethicality)
	* [7.4.2 Opportunities](README.md#742-oppotunities)
	* [7.4.3 Potential for Misuse](README.md#743-potential-for-misuse)
* [7.5 Future Work](README.md#75-future-work)

### 7.1 Group Work Reflection

#### 7.1.1 Agile Development
Our group took an Agile development approach towards the project, which focussed on developing a web application from a boilerplate codebase through a series of sprints. 

Initially, a git repository was established to support the foundational Angular framework, and a paper prototype was developed as an outline for the application. We then began holding daily standups where the focus was for each member of the team to communicate what they had worked on, what roadblocks they were experiencing, and which task they would be working on going forward. We worked in sprints, each one week long, and the final standup of every week was dedicated to sprint planning for the week ahead.

Our group found the daily standup meetings especially helpful. They provided an opportunity for us to voice any difficulties we were facing and to get help or redistribute the workload. The standups also encouraged accountability for the tasks each of us said we were going to perform. Without these, team members could have been more inclined to procrastinate on their work and isolate themselves from the group. Meanwhile, the group sprint planning helped to unify a vision for the project for all team members by establishing the most important features throughout different stages of development. We found that our Kanban board helped us to fulfil this vision by keeping track of tasks and managing our workflow. 

The Agile development process wasn’t without its challenges, however. A lot of the managerial tasks fell on the scrum master, and there were other assignments and classes that people were focusing on at times, causing project progress and standup attendance to sometimes dip. For weekly sprint plannings, sometimes it was difficult to estimate how long tasks might take and plan out the entire week, but we note that this was already made easier by the agile methods we employed if we compare it to more traditional project planning methods. With each team member specialising in specific areas, we were able to perform tasks more efficiently, but some members of the group found this to be a limitation when having to connect different parts of the application or review each others work. 

#### 7.1.2 Communication

Most of the problems we had with team communication were closely related to [the pandemic situation](README.md#73-impact-of-pandemic), as it was often difficult to get in contact with people remotely. We tried to work around this by having a team chat which allowed messages throughout the day, and by having 'group study' sessions, in which we would work on the app for 2-hour periods while on a call together. However, some team members found online meetings to be more tiring and harder to focus in than in-person meetings. Not being able to meet in person also meant that we missed out on potentially helpful group work techniques such as pair programming, although we did also try to replicate this through video chat and screen sharing. 

Overall, we were fortunate in that most group members were flexible with their times and we managed to conduct a good amount of communication through both meetings and the team chat channel.

### 7.2 Success Reflection

We felt that we were largely able to fulfill the brief of ‘design and build a web app that is based around the concept of “serious play”’. 

We designed our website with a colourful palette and a playful style, and included many game mechanisms such as a theme (with the hobbits), rewards (a score at the end of the quiz), and feedback (with the meal summary at the end of the game). We think that the use of Tolkien iconography makes the application more playful, and that the mechanic of feeding the hobbit is more engaging than simply quizzing a player on sugar in different foods.

Regarding the serious issue our website tackles, long term health problems which can stem from excessive sugar consumption can be very significant, and for this reason we feel this application addresses a serious topic. We designed a prototype that gives a general sense of relative amounts of sugar in certain types of foods, and based on this we produced an application which meets the following requirements for a minimum viable product:

    - Create a "Start" screen to welcome players, link to instructions, and allow a player to begin the food quiz
    - Develop a food quiz game which would populate food choices from a database for the player to select from
    - Keep track of total sugar consumption throughout the quiz, and display it to the player relative to a maximum sugar level
    - Populate a 'meal summary' at the end of the quiz which lists the player's food choice and their sugar content

However, there were some missed opportunities with both design and technical implementation:
- Link to an external food API (which would have given us more up to date and accurate food nutrition information).
- Score sharing on game end screen (although we did manage to enable sharing the website, given an actual domain name).
- Evaluatation of our product against the 11-18 age range, who statistically consumes the most excess sugar (issues with getting ethics approval).
- Attention to detail regarding meal combinations and portion sizes in the quiz questions.

Due to the above, overall we felt that we were able to fulfill most of our initial objectives outlined in the [introduction](../README.md), with the exception of connecting to an external API, and a score sharing function.

### 7.3 Impact of Pandemic

The coronavirus pandemic has certainly had a significant impact on the way groups work together. 

In a typical school year, students on the MSc course would have been attending classes together and getting to know each other in and out of the classroom. These experiences allow for bonding and rapport building which creates a foundation for team learning and cooperation. Those personal relationships aren’t developed when students aren’t meeting each other and working together in person, thus limiting their ability to communicate and work together remotely. This increases the impact of small roadblocks and technical issues. Individuals are also more likely to be distracted by other coursework and outside distractions when working remotely.

Some team members felt that the delivery of lectures could have been improved upon. Although the recorded lectures and walkthroughs were good quality, they were easy to miss and it was often unclear what was important.

There was also the psychological impact of the lockdowns, where people are not able to participate in social gatherings, or to simply go out and pursue their normal lives. With all your coursemates working from home, it is difficult to tell how everyone else is doing (e.g. if people are also struggling with the workload), which can be a big mental strain. Much is still unknown about the effects of this, but certainly many people are struggling with being isolated at home.

### 7.4 Social and Ethical Impact

#### 7.4.1 Product Ethicality

The purpose of our application is to raise awareness of sugar consumption so people can make more informed dietary decisions. This application arms people with the tools to eat healthier and improve their lifestyle. 

With consideration of virtue ethics, the intentions and deliverables of this project are ethical because they aim to improve the health of others. Likewise, from a consequentialist persepective, our application seeks to positively affect dietary behaviour and would thus be considered ethical. In addition, the privacy of our users are protected as no information about them is stored or requested when using our application. Through this decision, we have circumvented potential security and privacy breaches.

However, our application’s biggest ethical uncertainties can also be identified through consequentialism. For one, the mental and dietary consequences of our application are unknown because we did not receive guidance from healthcare or psychological professionals during development. Additionally, our application is solely targeted on sugar consumption and ignores other dietary factors (e.g. fat). This could inadvertantly encourage unhealthy eating behaviours for our players.

For our prototype, we mainly focused on its functionality and only incorporated a small subset of test foods. These food choices lack diversity and are heavily focused on Western food. These limited food choices could exclude certain populations from our product. For example, knowing the sugar content of different types of pastries might not be helpful for people who don’t usually include this type of food in their diet.

One target group of our application is children. During development, we were not able to interview children and learn how they would interact with our system. We also did not get input from child psychologists to verify our game design is viable for this age group. One potential consequence of this is that children will want to collect more icons, i.e. consume more sugar in the game. If children react this way, we could influence poor eating habits. 

Another concern is the addictive property of games[<sup>[2]</sup>](README.md#references). The final version of our game features a finite story that involves helping a fixed number of hobbits. However, this final version also incorporates competition and random food selections. This combination of features is meant to encourage replayability. Because the intention of these features is to improve dietary education of players, it is ethical with consideration of virtue ethics. However, in regards to consequentialism, these features may be unethical if they cause addictive behaviour.

Based on deontic ethics, following university ethical guidelines for user interviews improved the ethicality of our product. We accomplished this by limiting our interviews to people from non-vulnerable populations as indicated by our course’s ethics guidance. To get approval to interview minors, additional ethical review was requested, but not received during the timespan of this project.

When examining the “make IT for everyone” section of the BCS Code of Conduct[<sup>[3]</sup>](https://www.bcs.org/membership/become-a-member/bcs-code-of-conduct/), our project was unable to attain a high level of accessibility. We discussed implementing high-contrast colours and semantic HTML during our design phase, but we were unable to achieve proper development of these features during our time constraints. As a result, this aspect of our project could be considered unethical according to these guidelines.

#### 7.4.2 Opportunities

Overall, considering the intentions of our projects, the potential benefits of our application, and our obeisance of university guidelines, our project is ethical. However, unknown consequences of our application and unfinished accessibility development hinder the ethicality of our project. To improve these areas of our project, the following steps should be implemented:

- To ensure we are providing proper dietary education to our users, we should seek nutritional advice from healthcare professionals.
- To include a more diverse population for our application, we should implement a more diverse subset of foods and potentially include different localisation so populations see foods relevant to them.
- To verify our game design is effective for children, we should consult child psychology workers.
- To minimise the risk of addiction playing our game, we should carefully review the application’s design and remove features that encourage addictive behaviour. 
- To provide support for screen readers, we should fully implement high-contrast colours and incorporate semantic HTML.

#### 7.4.3 Potential for Misuse

While our application has good intentions, its core ideas and functionality could be extended for potentially unethical purposes.

Our existing product could be adapted to a website for commercial purposes. It could be modified to include in-page advertisements that collect user data. This change could introduce privacy and security concerns for the application, which could be considered unethical based on consequentialism. Additionally, the website’s food choices could be updated to specific products and become focused on advertising over dietary education. As a result, the site could become less ethical from the lens of virtue ethics.

As mentioned above, our product has a risk of becoming addictive. Further implementations of similar products could exacerbate the addictiveness of the through dark design patterns[<sup>[4]</sup>](https://www.darkpattern.games/). For example, an endless amount of levels could be implemented, or players could be required to feed the hobbit at different times throughout the day. In combination with in-game advertisements or purchases, the focus of the game could switch to profit over education. Consequentialism and virtue ethics both indicate that this implementation of our ideas would be unethical due to its health impact on players.

### 7.5 Future Work

During our project we implemented a basic prototype of our future vision. Current users can select a single food item for a hobbit meal, and afterwards, users see how much sugar was in the food. However, we could improve our product through a variety of facets.

#### Food Options

Currently, all food items in the quiz are fixed, and each time a player plays the quiz, they see the same options. Because we also reveal the sugar content of all food as the player progresses through the quiz, a small and fixed dataset reduces playability. 

In future versions, we would seek to improve this limitation. First, we would increase the size of our dataset to incorporate more food items. We would take advantage of public food APIs, such as FoodData Central[<sup>[1]</sup>](https://fdc.nal.usda.gov/) to maintain the data more easily. Though we would still need to generate a list of foods for the quiz, the nutrition information itself would be populated via API. Additionally, the API could make our nutrition data more robust. Common foods (e.g., chocolate) have many API results, and we could take an average of the nutrition information to generalise it. After increasing the size of our database, we would improve the variety of the quiz by making each meal contain a random subset of food items to enhance our application's playability.

#### Relevant Portion Sizes

In our prototype product, sugar content for each food iteam is generated based on a serving size of 100g. We can make the quiz more realistic by incorporating realistic serving sizes. To accomplish this, we would add an extra field to our food item schema to maintain portion sizes in our database.

#### Food Combos

In real life, meals consist of combinations of foods, not just singular food items. In future versions of the application, we would develop the quiz so that each meal option is a randomised subset of food items. Using these food combos adds several improvements to the game: 
  - Increased variability
  - Increased difficulty
  - More realistic experience
  - More educational opportunity for players

#### Hobbit Village

Our current product only features one version of the quiz, where the players choose meals for one hobbit. In the future vision of our product, we want to incoporate different levels of the quiz. Each level would feature a different hobbit with different dietary needs with increasing difficulty. Subsequent levels would be unlocked as a player completes the previous one. 

As discovered in our user interviews, people do not want to register an account for our application. To implement these changes, we would need to rely on another method to track a user's progress, such as website cookies.

#### Result Sharing

The share functionality of our prototype can only share the URL of the application. From our focus group session, we learned some players like the competitive aspect of the game and want to share the game's score. To satisfy this user group, we should implement additional sharing functionality on the End Game page.

#### Responsiveness

While we were able to meet some of our goals relating to the responsiveness of our website, we ran out of time to implement full scale responsiveness in our site – particularly in relation to our application’s display on mobile sites, with certain pages not fit for use. In future work, we would look to implement responsiveness across a broader range of devices to ensure our application is accessible to as broad a range of users as possible. 


#### Other Nutrition Data

Visualising sugar has proven informing and entertaining to interviewees as well as our team members. We believe we could extend our product to provide even more nutritional education. Because our product establishes a foundation for exploring nutrition data in foods, similar quizes could look at other information, such as protein or sodium. Our product could then allow users to focus on the education for nutritional data they desire.

#### Users Interviews

During our project, we initially planned three interviews with different purposes.
  - Interview 1 for initial design feedback.
  - Interview 2 for design implementation and website styling feedback
  - Interview 3 for user acceptance testing
Unfortunately, we were only able to conduct Interview 1. Though we did perform a focus group to get some feedback for the website, we weren't able to get individual feedback on any of our actual development. 

In order to gain this feedback for the website, we would perform Interview 2 to target our stylistic choices and measure any improvements from the first interview. After incorporating any necessary changes from Interview 2, we would then perform user acceptance testing.

#### Performance and Security Testing

To evaluate the quality of our application, we performed a series of unit and functional tests. However, there are other ways to evaluate a website.  Performance testing would ensure the website loads and responds well under heavy workloads. Security testing would help reveal and minimize our application's security vulnerabilities. To ensure our application maintains high quality, we should included processes for performance and security testing.

Overall, we were able to meet many of the goals we sought to achieve when first starting the Sugar Rush project. We have learned how to work together using agile practices and communicate as a team while working remotely. Through our accomplishments and setbacks, we were able to learn how to make this project come together, creating a prototype application using aspects of serious play.  

### References
1. FoodData Central - https://fdc.nal.usda.gov/
2. D. King, E. Koster, and J. Billieux, “Study what makes games addictive.,” Nature, vol. 573, no. 7774, p. 346, 2019. - https://doi.org/10.1038/d41586-019-02776-1
3. BCS Code of Conduct | BSC - https://www.bcs.org/membership/become-a-member/bcs-code-of-conduct/
4. DarkPattern.game » Healthy Gaming « Avoid addictive gaming dark patterns - https://www.darkpattern.games/

[Previous Section](/Evaluation/README.md) | [Home](../README.md)

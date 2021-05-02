## UX Design

### Ideation
To arrive at an idea for our project, we explored problems and potential solutions through the process of design thinking. Our ideation process began with a period of discovery where we determined ongoing societal problems and various game mechanics. We then created a chart to playful solutions to address these societal problems using the various game mechanics.  
![Image](IdeationChart.png)

We reviewed each of these solution and determined thse solutions were the most interesting through a group vote:
- Showing popular news trends around the world
- Quiz for sugar consumption.  

We began to develop these ideas into a potential application by writing [project proposals for each](../SugarRushProposal.pdf). When writing these proposals, we used group writing to help create a cohesive direction for the project. After completing the two briefs, we used another group vote to decide on the final project idea: Hobbit Sugar Rush. In our proposal, we identified awareness sugar overconsumption as our primary goal and outlined the methods by which we would address it. During this process we made key decisions about the goals of our project.
  - Create a playful and educational experience
  - Use hobbits to encourage empathetic connection with sugar consumption
  - Quiz format of seven different hobbit meals based on Tolkien mythology
  - Sugar thresholds will be determined by NHS guidelines

Once we completed our project proposal, we created an [initial ‘paper’ prototype](https://docs.google.com/presentation/d/1PUFuL9rSekN_tIJ1nDB9tv86x6KvYPRJFryo8T6m-Vk/edit?usp=sharing) to represent the vision of the application. For this process, we used Google Slides. Each slide represented the layout and expected behaviour of the different website pages and components. 

![image](paperPrototypeVillage.png)

This prototype helped us develop further features of the application.
  - Three food items per question in the food quiz
  - Hobbit having reactions to sugar content of foods
  - Wizard provides feedback on quiz answers (not implemented in MVP)
  - Graphical representation of sugar content, which provides a tangible representation of the amount of sugar in foods (see [Sugar Stacks](http://www.sugarstacks.com/)).
  - User registration process
  - Initial quiz review or meal summary
  - Levels with progressively challenging hobbits that have different dietary needs

After we had developed our original idea into our initial prototype and proposal, we collected the thoughts and generated a final proposal and wireframe for the project.
![Image](quizWireframe.png)

Following additional discussions, we determined the following hypotheses will be evaluated for this project: 
- Allowing users to control sugar consumption through the medium of another being would raise more conscious awareness of sugar consumption
- Allowing users to visualise sugar consumption with images would improve understanding of an amount of sugar in a food item.
- Playing the game will raise awareness about sugar consumption and the levels of sugar in certain foods.  

Throughout this process, we learned how to come up with an idea and hone in on the specifics to envision our product. However, evaluation became difficult due to lack of hypotheses in the beginning of our project. Developing them later helped further focus our goals and interviews. In order to improve our development in the future, we should strive to develop any hypotheses earlier in the design process, so we can incorporate them even more.

### User Groups
Although we had started to identify users during our project proposal, we took more time to define these users to specifically target our project design. We envisioned our app being playable by all, but we focused on users we felt would be more likely to use our application and created these three user groups:

- Children and teenagers
- University students
- Stable professionals  

Children and teenagers are likely to use the app if parents or schools encourage exploration of educational games, particularly those involving nutrition. This group could also be more likely to engage with social media trends. University students could be likely to engage with the game to learn more about nutrition, enjoy some fantasy references, or simply to explore an application created by other university students. Finally, stable professionals would be likely to engage with the game in their spare time and potentially discuss it with their friends and families, including children.

In addition to potential users, we also defined stakeholders as those who may play the game, but are particularly invested in how the game functions and affects its users. We identified two main stakeholders for our project

- Parents
- Healthcare workers  

To appeal to parents, the educational intent of the game will need to be clear and the content will need to be age appropriate. For healthcare workers, we will need to ensure the game displays accurate nutrition info and that the application does not negatively impact the health of those participating.

### Design Heuristics
After we determined our users, we needed to define approaches and heuristics by which we would design our application. One of main approaches for designing the software was ensuring a user-focused design. Design decisions needed to incorporate how the user would use them and what would be the clearest and most helpful for them. In order to maintain this focus for our design, we created user personas for our user groups and stakeholders. Finally, after getting the initial foundation for the application completed, future design choices and tasks took the form of user stories.

In addition to this design approach, we incorporate several design heuristics, which allowed us to have quick checks to ensure usability of our application. For this project, we derived design heuristics from Jakob Nielsen’s Heuristic Evaluation (source needed). Primarily, we wanted to focus on an aesthetic and minimalistic design. By keeping the website visually appealing and easy to navigate, users could focus on the intended experience we aimed to provide. Achieving consistency and standards between the different web pages would help aid users navigate through the application. Once they are comfortable navigating part of the website, they would be capable of navigating the rest of it, eliminating the need for tutorials on every screen.

In addition to these main heuristics, we also focused on several other design heuristics. We wanted users to be able to navigate the website and be able to leave at any time. In the initial wireframe, we carefully designed ways to exit the system whichever way the user wanted to play. In our final design, we ensured a way to return to the site home if necessary. During our design, we also incorporated ways for users to seek help if they needed additional guidance. We do this by ensuring instructions are presented to users when they first open the website and providing different ways to get help on each webpage. Finally, we strived to make sure necessary steps and actions for the user had visuals that matched the real world. When a user clicks on a house, they are taken to that house and its corresponding hobbit. When the user is selecting food, we aimed to have it represent what the user was actually selecting.


### User Interviews
In order to further understand our user groups, we created an interview and a walkthrough of our prototype to go through with potential users. For the interview we targeted university students and professionals. Due to the time allotted for this project and the inability to gain ethical approval prior to that time, we were unable to ask any minors for input on the prototype. We had a sample size n = 4, which is the minimum amount of people needed to perform qualitative studies on software design. For the interview, we created a prototype that combined the design in our paper prototype with the structure and behaviour of our wireframe. Following the interviews, these were updated to match the given feedback.

The interview allowed us insight into how users would use our application. We learned that users weren’t interested in registering for an application like ours and would prefer to use it without logging in. We also learned that the location and presentation of instructions is important to our user groups and needs to be easy to find and consistent. Finally, we learned that some users prefer challenges and fun, but others prefer the educational aspects of the game. This feedback means that we need to make sure the entertainment and knowledge provided by this game are strong to appeal to both types of users.

We interpreted this feedback from the interviewees and turned it into actionable design changes. Originally we needed registration to allow for different levels in our quiz, but we have now removed user registration and will rely on website cookies in order to keep a user’s progress for different levels. We also have strived to integrate instructions into the game by having default popups when first accessing the site. When performing the quiz, help is provided in dialogue from the hobbits. We’ve also renamed the button to ‘Instructions’ on other pages for increased clarity of the button’s function. In addition, users were interested in learning more about the sugar content of food, so we have changed the sugar-cube icons to teaspoons to better represent sugar content. We also will show the sugar content for each quiz item after each question. The originally intent was to show only the selected food items sugar content, but this masks the potential educational capabilities of the application.

### Conclusion
Through our design phase, we were able to gather information and create tools for us to guide the application’s development confidently to ensure we can satisfy the wants of our user groups. We created a final prototype that will be used for front-end development and guide any design choices. We created a final wireframe that will serve as a guide to website behaviour and layout. The wireframe will help guide front-end and back-end development. Finally, we created a user flow diagram to represent the intended user interaction of the website. This tool will guide website navigation and back-end development.


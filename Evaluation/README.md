## Evaluation

### Evaluation Techniques

#### Timeline of Evaluation

![Evaluation Timeline](evaluation_timeline.png)

We initially considered having another intermediate testing between the wireframe testing and final testing but did not have time to actualize this. However, we were able to perform a focus group test which was not initially planned. 

#### Observations

The type of observation we undertook was direct observation in a controlled environment. For our design (a game-like application played in short sessions), a controlled environment would not be too different from activity in the field. Direct observation was chosen over indirect observation as we found it to be more efficient to note down details during the process rather than capturing the process automatically and analysing for data later. We also did not have the human resources or time to record many tests. This might have limited our data collection in that some details might have been missed by the observer.

This method of evaluation was especially useful near the beginning of our sprints, as the open-ended nature of the participant's interaction with our prototype allowed us to gather information we did not previously consider regarding our design. However, the data collected using this technique is largely qualitative instead of quantitative, so the importance of certain design choices may not be exactly as we interpreted (for example, something that bothered one participant might not be as big of a problem to most of our target users).

#### Interviews

Our observations took place after a brief interview with the participants to find out more about their preferences in gaming. This allowed us to cross reference our findings from the observations with personas and thus create focused user stories.

Unfortunately, for both the interview and the observation, we were unable to interact with our original main target audience (teens and children) because this required an extra ethics approval, which we submitted but were not able to get in time for the project. This meant we only had data on a limited demographic.

For more information about what design choices we made based on the results of the inital round of interviews and observations, please refer to the [UX Design](/UXDesign#user-interviews) section of our report. You can also [click here](user_interview_round_1.pdf) to see our user interview script for the initial round.

#### Focus groups

Our focus group had a format similar to the inital observation and interview, with discussions between the observer and multiple participants at the same time. A focus group allowed us to obtain responses from more participants at once. However, because there were multiple participants, the navigation of the application was controlled by the interviewer, and he would ask the participants to instruct the next steps. Because this evaluation was closer to the end of the build process, we were also more clear of our design intentions and asked more pointed questions about certain design choices we made to get feedback on them. There was sometimes unprompted discussion or brainstorm about certain features of the application, which allowed us to see how our application was interpreted compared to our intentions, much like in the first round of evaluation. Encouraging discussion between the participants also may have resulted in some form of synergy - i.e. some ideas may arise which would not have during one-on-one discussion with just one participant.  

However, within a focus group, the group dynamic may have also affected the discussion negatively. For example, a stronger voice or opinion may overpower everyone else, or people may have been more inclined to voice an opinion in agreement. With a larger group of people, it was also sometimes more difficult to guide the discussion which meant that there were more (perhaps less helpful) tangental discussions. Also, the interviewer noted that the focus group was comprised of his own friends which could have resulted in biased opinion.

#### Questionnaires

We did not use questionnaires for our first evaluation because we wanted to record how the participants interacted with our prototype which would not be possible (or more difficult) with a questionnaire. We recognised, however, that some evaluation in the form of questionnaires might have been useful in allowing us to collect more quantitative data, and may have allowed us to collect a larger quantity of responses overall. This may have also been better suited for a final evaluation to identify how successful we were at achieving our overall goals and objectives.

#### Ethnography

Given that our application was a relatively straightforward game format, we felt that performing an ethnography would not be worth the amount of time and resources that would have needed to go into it. We also believe that none of us are qualified to extract accurate and useful data from this form of evaluation. As such, this was not a method that we considered.

### Unit testing

We used unit testing to evaluate behaviour of our application through a series of automated tests. Our unit testing strategy uses the Jasmine Test Framework [1], which is incorportaed into Angular during install. After the creation of a component or unit test, a `spec.ts` file is create alongside the `html`, `css`, and `ts` files of the component. 

For our project, all components and services run at least one unit test to show that it can be created. To complete this test, some components require the use of mock services.

```javascript
providers: [
   MealSummaryComponent,
   {provided: HobbitService, useClass: TestHobbitService}
]
```

Services and most components were not tested further than this, however, our more complex components have additional unit tests:
  - AppComponent
    - Check component has title 'sugarRush'
  - FoodQuizComponent
    - Check Next Meal button appears by default
    - Check End Game button replaces Next Meal button at end of quiz
    - Check End Game button routes to game-end component
  - QuizProgressComponent
    - Check hobbit has sugar tolerance
    - Check sugar threshold matches tolerance
    - Check initialised sugar teaspoon count is zero
    - Check teaspoon count increases with changed sugar level
  - SugarContentComponent
    - Check teaspoon representation of sugar exists
    - Check sugar content is only visible after selecting a food
  - GameOverComponent
    - Check correct end game message
    - Check correct score is visible
 
The unit tests for these components focus on ensuring dynamic HTML elements appear as expected under appropriate conditions. Components that rely on input, like the QuizProgressComponent, needed mock input to function:

```javascript
beforeEach(() => {
   fixture = TestBed.createComponent(QuizProgressComponent);
   component = fixture.componentInstance;
   component.hobbit = {
      name: "Test Hobbit",
      sugarTolerance: 42,
      sugarIntake: 0
   }
   component.sugarLevel = 0;
   fixture.detectChanges();
});
```

Use of the testing framework's `TestBed` and `ComponentFixture` allowed us to test the dynamic changes. After making changes to properties within a component, we could update its HTML by using a `detectChanges()` method. From here we could gather information about the element based on CSS classes and verify it contains the right information. We can use this strategy to check things like whether a component is visible:

```javascript
it('should show icon only when food selected', () => {
   let visibleValue = html.query(By.css('.iconWrapper'))
      .styles.visibility;
   expect(visibleValue === "hidden").toBeTrue();
   component.showAnswer = true;
   fixture.detectChanges();
   visibleValue = html.query(By.css('.iconWrapper'))
      .styles.visibility;
   expect(visibleValue === "visible").toBeTrue();
});
```

A complete list of unit tests can be reviewed [here](unitTests.png). To further improve our unit testing, we would add tests for the quiz that better mock food selection and the corresponding HTML changes, such as presence of the correct images and icons. In order to implement these changes, further research and understanding of the Jasmine testing framework is required.

### User Acceptance Testing

#### Strategy

We conduct another round of interviews using this [script](uat_interview_script.pdf). These interviews are split into two key sections each with their own objectives.

1) Test cases
- To test the functional requirements of the web-app
- te test the usability and accessibility of the web-app
- To uncover any remaining bugs 

2) Browsing and feedback
- To verify that our design is visually engaging and interactice (or suggest how it could be improved)
- To ensure that we have a functioning quiz and that our product is ready for launch
- To determine whether our web-app is able to increase awareness of sugar consumption and influence dietary behaviour

[1] [Jasmine Testing Framework](https://jasmine.github.io/) 

*  Details of how you evaluated your designs (techniques used & awareness of their limitations). Description of  techniques suitable for your particular design. A timeline of evaluation of your design.  
    * Techniques to evaluate
        * Hypotheses driven --> these have been outlined in the design stage
        * What other methods did we use? Check out Interaction Design  5th edition for extra info
    * Limitations of techniques --> These are in the powerpoint for the HCI evaluation lecture. Reference these in a way that shows we understand, not just copy and pasted.
    * Description of techniques suitable to our design
        * Questionnaires
            * evaluate designs and ideas and get demographic info
            * feasible number of questions
            * How is this suitable to our design?
            * What limitations did this have?
        * Observations
            * Observe a user using the product, but record what you see without leading them
            * Are the products used as intended
            * Used throughout development
            * How is this suitable to our design?
            * What limitations did this have?
        * Interviews
            *  one to one interactions with stakeholders and end users
            *  How is this suitable to our design?
            *  What limitations did this have?
        * Focus Groups
            * group interviews to capture feelings and eperiences
            * We'll skip this one.
        * Ethnography
            * shadowing users or method acting and training to become an end user
            * Get a fine-grained understanding of user context (political, social, etc)
            * We can try this, but it might be difficult.
    * Timeline of evaluation
        * How often and when did we do the above methods?
*  Unit testing / Functional testing.
    * Unit testing
        * What methods did we use for Unit testing?
        * This is how we tested different components.
        * Which components did we test?
        * How did we test them?
        * What could have been better and or what was a limitation of the method we used?  
    * Functional testing 
        * What methods did we use?
        * This is a form of black-box texting.
        * What could have been better or what was a limitation of this method?
*  User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications.
    * User acceptance testing
        * Different from the user interviews, but the final round of user interviews and verifiying the 
    * Evaluation of design with users
        * Methods
            * Can user interviews go here? We can move that from the design section to here if so, and that is already drafted.
            * We can also do observations for this as well
        * Findings
            * Not just findings, but how did this align with our hypotheses?
            * How did we ask questions that were not leading questions?
            * Check out HCI evaluations PowerPoint on this as well. 
        * Implications
            * Did our methods work?
            * Could we expand from sugar to other types of nutritional information?
            * Can we use this method to raise awareness of quantity of sugar in food items?

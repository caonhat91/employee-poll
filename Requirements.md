# Project Instructions and Rubric

## Employee Poll Project Instructions
    Use React to build your application’s UI. Remember that composition is key. It’s rarely a mistake to break a component into smaller pieces. Look for opportunities to reuse your components.

    We recommend using Create React App to generate your submission since it's the easiest way to ensure you have everything the project reviewer will need to install and run your app.
    By walking through the Planning Stage and the Coding Stage of the Chirper Project, we’ve given you a useful template for building Redux applications. We recommend using this template for building your “Employee Polls” Project. Remember that planning your project and its architecture before starting to code will save you a lot of debugging time later on!
    Use Redux to manage your application state. For this application, most of the application’s state should be managed by Redux. You may use the component state to handle form input fields and controlled components. Otherwise, the rest of the state for your application should be controlled by your reducers.
    In order to create unit tests for your project, you'll need to install jest and testing-library for the unit testing, snapshot testing, and DOM testing. You can add these to your project with npm.

    While the focus (and specification) of this project is based on functionality rather than styling, please ensure that your app is presentable and easy to navigate.
    Please carefully test your app against the rubric to make sure all of the rubric requirements are met. Your project must meet all of the rubric criteria in order to pass.

---

## Project: Employee Polls Rubric

### Application Setup

1. *Is the application easy to install and start?*
     - [x] The application requires only `npm install` and `npm start` to install and launch. 
2. *Does the application include README with clear installation and launch instructions?*
     - [x] A README is included with the project. The README includes a description and clear instructions for installing and launching the project.


### Login Flow

1. *Does the application have a way to log in and log out?*
2. *Does the application work correctly regardless of which person the user impersonates?*
     - [x] There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.)
     - [x] The application works correctly regardless of which user is selected.
     - [x] The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
     - [x] Once the user logs in, the home page is shown.
     - [x] Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.


### Application Functionality

1. *Does the home page have the desired functionality?*
     - [x] The answered and unanswered polls are both available at the root.
     - [x] The user can alternate between viewing answered and unanswered polls.
     - [x] The unanswered questions are shown by default.
     - [x] The name of the logged in user is visible on the page.
     - [x] The user can navigate to the leaderboard.
     - [x] The user can navigate to the form that allows the user to create a new poll.
2. *Are the polling questions listed in the correct category (Unanswered vs Answered), and do they have the desired functionality on the home page?*
     - [x] Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.
     - [x] A polling question links to details of that poll.
     - [x] The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).
3. *Are the details of each poll displayed with all of the relevant information?*
     - [x] The details of the poll are available at `questions/:question_id`
     - [ ] When a poll is clicked on the home page, the following is shown:
       - [ ] the text “Would You Rather”
       - [ ] the avatar of the user who posted the polling question
       - [ ] the two options
     - [ ] For answered polls, each of the two options contains the following:
       - [ ] the text of the option;
       - [ ] the number of people who voted for that option;
       - [ ] the percentage of people who voted for that option;
     - [ ] The option selected by the logged in user should be clearly marked.
     - [ ] When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
     - [ ] The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)
4. *Does the voting mechanism work correctly?*
     - [ ] Upon voting in a poll, all of the information of the answered poll is displayed.
     - [ ] The user’s response is recorded and is clearly visible on the poll details page.
     - [ ] When the user comes back to the home page, the polling question appears in the “Answered” column.
     - [ ] The voting mechanism works correctly, and the data on the leaderboard changes appropriately.
5. *Can users add new polls?*
     - [x] The form is available at `/add`.
     - [x] The application shows the text “Would You Rather” and has a form for creating two options.
     - [x] Upon submitting the form, a new poll is created and the user is taken to the home page.
     - [x] The new polling question appears in the correct category on the home page.
6. *Does the leaderboard work correctly and have the desired functionality?*
     - [x] The Leaderboard is available at `/leaderboard`.
     - [x] Each entry on the leaderboard contains the following:
       - [x] the user’s name;
       - [x] the user’s avatar;
       - [x] the number of questions the user asked;
       - [x] the number of questions the user answered
     - [ ] Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.
7. *Is the application navigable?*
     - [x] The app contains a navigation bar that is visible on all of the pages.
     - [x] The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.
8. *Does the application interact with the backend correctly?*
     - [ ] The data that’s initially displayed is populated correctly from the backend.
     - [ ] Each user’s answer and each new poll is correctly recorded on the backend.
9. *Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using `key` for list items? Is the code formatted properly?*
     - [ ] The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.


### Architecture

1. *Does the store serve as the application’s single source of truth?*
   - [x] The store is the application’s source of truth.
   - [ ] Components read the necessary state from the store; they do not have their own versions of the same state.
   - [ ] There are no direct API calls in the components' lifecycle methods.
2. *Is application state managed by Redux?*
   - [ ] Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.
   - [x] Form inputs and controlled components may have some state handled by the component.
3. *Does application state update correctly?*
   - [ ] Updates are triggered by dispatching action creators to reducers.
   - [ ] Reducers and actions are written properly and correctly return updated state to the store.
4. *Does the architecture of the application make sense?*
   - [ ] The code is structured and organized in a logical way.
   - [ ] Components are modular and reusable.


### Unit Testing

1. *Are jest, `@testing-library/react`, and `@testing-library/jest-dom` present in the project?*
   - The package.json file should include the following under devDependencies:
     - [ ] `jest`
     - [ ] `@testing-library/react`
     - [ ] `@testing-library/jest-dom`
2. *Can all the unit test be run by entering the `npm start test` command?*
   - [ ] The application requires only npm start test in order to run all the unit tests in the project.
3. *Do all the unit tests pass?*
   - [ ] After running npm start test, all unit tests should pass. There should be no failing tests.
4. *Are there at least 10 unit tests?*
   - The project requires a minimum of 10 passing unit tests.
     - You will also be expected to write at least ten unit tests for the project. The first six should be the following:
       - [ ] For the _DATA.js file, write an async unit test for _saveQuestion to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.
       - [ ] For the _DATA.js file, write an async unit test for _saveQuestion to verify that an error is returned if incorrect data is passed to the function.
       - [ ] For the _DATA.js file, write an async unit test for _saveQuestionAnswer to verify that the saved question answer is returned and all expected fields are populated when correctly formatted data is passed to the function.
       - [ ] For the _DATA.js file, write an async unit test for _saveQuestionAnswer to verify that an error is returned if incorrect data is passed to the function.
       - [ ] Write a snapshot test for at least one file.
       - [ ] Write a DOM test for at least one file which uses the fireEvent function. For example use fireEvent.click() for clicking a button and verifying that something changed in a component or fireEvent.change() to add text to an input field or select an option in a dropdown. After doing this, verify the UI changed in some way using the expect() method from jest.
     - The remaining four unit tests can be to verify any function or component you are writing for this project. Here are some ideas:
       - [ ] On the login page, verify that a user name field, password field, and submit button are present on the page.
       - [ ] Verify that a user entering an incorrect username or password and clicking submit will see an error on the page.
       - [ ] Verify that the leaderboard is displaying the correct user name, number of questions asked, and number of questions answered.
       - [ ] For answered polls, verify that the percentage of people who voted for an option is calculated and displayed correctly.
       - [ ] Verify the navigation bar displays all expected links.
5. *Are There two unit tests written which test the `_saveQuestion()` function in `_DATA.js`?*
   - The following two unit tests must be present for `_saveQuestion()`:
     - [ ] An async unit test to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.
     - [ ] An async unit test to verify that an error is returned if incorrect data is passed to the function.
6. *Are there two unit tests written which test the `_saveQuestionAnswer()` function in _DATA.js?*
   - The following two unit tests must be present for `_saveQuestionAnswer()`:
     - [ ] An async unit test to verify that true is returned when correctly formatted data is passed to the function.
     - [ ] An async unit test to verify that an error is returned if incorrect data is passed to the function.
7. *Is there at least one snapshot test present?*
   - [ ] At least one test must call the `toMatchSnapshot()` function from jest. Doing this will generate a folder called snapshots where the snapshot will be stored.
8. *Is there is at least one DOM test which uses the fireEvent function?*
   - [ ] At least one unit test must use the render method from `@testing-library/react` to render one of your React components. The unit test should then perform some actions on the component using fireEvent such as `fireEvent.click()` or `fireEvent.change()`. After calling fireEvent, call the `expect()` method from jest to verify that a change occurred in the UI after the event was fired.

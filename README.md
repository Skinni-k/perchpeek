# Hello!

Hi! I'm Kevin Dewinter. I have completed this challenge using Create React App. I have added a couple of extra features. I hope you like it.

## Available Scripts

In the project directory, first run:

## `npm install`

Installs all the dependencies.

## `npm start`

Runs the app in the development mode.<br  />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Explanation:

Here I explan what I did and why I did it.

First you will be shown a Login screen.

The credentials are:
`email: ace@perchpeek.com`
`password: perchpeek`

When incorrect credentials are entered, an error message is shown below the password field.
When correct details are entered, the credentials are stored in the local storage. By doing so, in any protected route, we can check whether user is available. By storing what's essential in the user object in the local storage we can even prevent making unnecessary API calls.

After Login is successful, a dashboard type page (which is our homepage in this case) is shown. On the left we can see some links in the sidebar. Clicking on them takes us to 404 page at the moment. There is a Search bar on the top and a user icon on top-right corner. **Clicking the user icon will log you out.** The sidebar and the navbar have been made into a seperate component called PageLayout. By doing so, all we have to do is call that component at the top-level in any component and we will have the layout ready.

There are three tabs, Activity Feed, Stats and Documents. Clicking on Stats and Documents shows no data available.

Lastly, coming to Activity Feed, we have the add activity feature. When "Add new activity" is clicked, a modal opens up and we can select the type of activty (required field), add a URL (optional field), give a title to the URL (if URL is entered. Required field), add some notes (required field). When Activity type is selected as task, instead of add URL field, we have a dropdown of some dummy emails which can be selected. Adding an activity stores the activity not only in the store but also in Local Storage. By doing so, we can now persist the data even after the page refreshes.

## Note from developer:

Firstly, I apologise for not writing test cases. I have never written test cases before and due to time contraints and some personal situations, I didn't get enough time to learn and write them either.

Secondly, I hope you like this project. Thank you for this opportunity.

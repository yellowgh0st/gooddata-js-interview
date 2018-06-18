# gooddata-js-interview
Frontend Interview Examples

## GoodData Homework

### Prerequisites

To successfully complete this tutorial, you are required to:

* Be familiar with the modern JavaScript ecosystem.
* Have `node.js` and `yarn` installed in your development environment.
  * If you do not have these tools installed, you can get them from https://nodejs.org/ and https://yarnpkg.com/ respectively.
* Have an account on the GoodData platform.
  * If you do not have a GoodData account yet, [create one](https://secure.gooddata.com/account.html?lastUrl=%252F#/registration/projectTemplate/urn%253Agooddata%253AOnboardingProductTour).

### Initialization

1. Run `git clone git@github.com:gooddata/gooddata-js-interview.git`.
2. Run `cd gooddata-homework`.
3. Run `yarn install`.
4. Run `HTTPS=true yarn start`.
5. Visit https://localhost:3000/account.html, and log in using your GoodData account credentials.
   - If you do not have a GoodData account yet, [create one](https://secure.gooddata.com/account.html?lastUrl=%252F#/registration/projectTemplate/urn%253Agooddata%253AOnboardingProductTour).
   - After creating a GoodData account, you will be redirected to our Launch Product Tour (Dashboards tab). Feel free to close the web page and focus on your homework. The Product Tour is not related to the homework.
6. Visit https://localhost:3000/, and make sure that two column charts are loaded.

![Screenshot after initialization](https://github.com/gooddata/gooddata-js-interview/blob/master/public/screen.png "Initialization Screenshot")

### Task

__Make the dropdown work. That is, the dropdown `onChange` should reload the upper chart appropriately.__

When you are done, send us the link to your source code repo and the instructions how to run the demo.

---

We are looking for re-usable code. You are strongly encouraged to "over-engineer" this to show off your software architecture and designing skills. Assume that this abstract application will be the first component of a large scale application.

### Documentation

http://sdk.gooddata.com/gooddata-js/

### Troubleshooting

###### Charts do not get loaded.
  * Most likely, you are not logged in correctly. Check the Network tab in Google Chrome DevTools. If you see `HTTP 401 ERROR`, visit https://localhost:3000/account.html and log in properly.

###### Anything else?
* Contact your recruiter for further information.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

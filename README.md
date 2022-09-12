## Auth-tool application

`auth-tool app` is a tool to help you create a new secured token with session authentication.

## Description

An authentication app to store and generate secure tokens for more secure login. Users can add, edit and delete the password in their account anywhere in the world.

## FAQ

*   How does the app work? The app stores tokens and login sessions in a memory address and saves it for next time the user wants to log in
*   How to use the application? To start using the application, you'll need to sign up or login, after creating an account, you'll see a button to create new session, once you created new session with an auth-method, for example using `Google` or `Facebook` you'll get a token that can be generated by you.

## How to validate the token

If you created a recent session with same details, you'll notice you can't create another session because your session already exist on the memory address.

### Make a request

Here is what is going on under the hood when making a request to the API

```javascript
/* Adding a new session to the sessions array. */
app.post("/session/add", (req, res) => {
  const new_session = req.body;
  const findSession = sessions.find(
    (findSession) => findSession.service === req.body.service
  );
  /* Checking if the session already exists. If it does, it will return a 401 status code with a
  message. If it doesn't, it will add the new session to the sessions array and return a 201 status
  code with the new session. */
  if (findSession) {
    res.status(401).send({
      message: "already existing session located",
    });
  } else {
    /* Setting the location property of the findLocation object to the location property of the
        req.body object. */
    // findLocation.location = req.body.location;
    sessions.push(new_session);
    res.status(201).send(new_session);
  }
});
```

## How to use the App

*   To get started, you must first have an account with us, to do so create an account using the method that pops up on the app
*   After you've successfully created an account, you must remember to validate your account otherwise it will be deleted with 7 days
*   Once that process is completed you can start adding new session login, also note that when the session page loads you get an example session already added, this is to brief out what's going on here, so you get a better understanding of which information you're giving to us.
*   You can add as many sessions as you want, with no limit.

## Features

*   [x] Multiple Session Login
*   [x] Token Generation
*   [x] Session Rest -using existing token
*   [x] have access to view last time, account was being used

More features are coming soon 👐

---

> Made with 💖

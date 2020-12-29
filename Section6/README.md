## Methods to maintain State

- HTTP is stateless.
- There are two ways to maintain state:
  - Through **cookies**.
    - Cookies are stored on the client side (in the browser).
    - Whenever the client makes a request, the cookies are sent along with it.
  - Through **session variables**.
    - Session variables are stored on the server.
    - Client is handed of a key to help identify those variables in subsequent requests.

`res.cookie(key, value, {options})` is used to set cookies.

---

## Accessing Cookies

- Cookies are sent inside the header of the request.

- Use the cookie-parser middleware which will parse the cookies from the head and place them on `req.cookies`.

- `req.cookies` now contains all the cookies.

- Use `req.cookies.<key>` to access a specific cookie.

---

## Removing Cookies

- `res.clearCookie(key, {options})` will clear the cookie with the given key from the users system (that we added as part of this domain).

- Always a good idea to clear the space and clear out any sensitive information.

---

`res.redirect` is used to send the user to some other url.

_Example of a USECASE_

```language
app.post('/process_login', (req, res, next) {
    if (case 1) {
        // do some stuff
        res.redirect('/path1');
    } else if (case 2){
        // do some other stuff
        res.redirect('/path2');
    } else {
        // do default stuff
        res.redirect('/path3')
    }
})
```

---

## Query String

1. Query Strings are extra variables added at the end of a url.
2. This is not a secure form of transmitting data. (Use body with https for that).
3. '**?**' seperates the path from the query string.
4. '**&**' seperates the key=value pairs.

`req.query` contains the list of all the query strings parsed as key value pairs.

---

## Route Parameters

- Another way to send data through a URL is through named route parameters.

  - Example: `protocol.domain.com/story/:storyID` => Here the `storyID` is a named route parameter.

- To create a named route parameter, prepend the parameter name in the url with a colon operator ,i.e, `:`

- The named parameter can be accessed at `req.params`. By default, `req.params` is equal to `{}`.

---

## Param method

- `app.param` is used to add callback triggers to name parameters.
- Syntax: `app.param([name], callback)`
- Syntax of the callback :

  `callback(req, res, next, value(name), name)`

---

## Response Headers

- `res.set` can be used to set headers on the response sent.
- Syntax:
  - `res.set(key, val)`
  - `res.set({ key1: val1, key2: val2, ...})`

---

## Download

- `res.download` sends a file as an attachment
- `res.download(path, filename, options, callback)`

  - Under the hood, `res.download` sets the `content-disposition` header to `attachment` and then uses res.sendFile
  - **NOTE**: If the headers are already sent, you can't send headers again. There is a bool to check whether headers are already sent called `res.headersSent`.

- `res.attachment([filename])` - sets the `content-disposition` header to `attachment`without transmitting the file. (ONLY SETS THE HEADERS.)

---

## Router

1. `express.Router()` creates a router object which allows to modularize the code.
2. routers behave like good-old middlewares.

#### Example

- Following section describes the main file where the app is defined.

```language
const express = require('express');
const app = express();

app.use(express.json());

const baseRouter = require('./theRouter');
const userRouter = require('./userRouter');

app.use('/', baseRouter);
app.use('/user', userRouter);

app.listen(3000);
```

- Following creates a router in a file `'theRouter.js'`

```language
const express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    msg: 'router works',
  });
});

module.exports = router;
```

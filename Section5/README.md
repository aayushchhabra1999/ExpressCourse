## What is Express:

1. It is a router.
2. It is a middleware.

Request ==> Middleware ==> Response

A middleware is just a piece of code (function) that runs between two other pieces of code.

### **Syntax**

```language
function middleware(req, res, next) {
    //do your stuff.

    // handover control to the next middleware.
    next();

    // note: without a next, the chain of middlewares will end.
}

app.use(route, middleware);

```

### **Insights**

1. `app.use(middleware)` will run the middleware on all paths and all methods

2. `app.use(route, middleware)` will run the middleware on the given route for all methods.

3. `app.${get/post/put/delete}(route, middleware)` will run the middleware on the given route and given method.

---

#### MORE

- `res.locals` is used to pass around variables.
- It persists for the duration of a given request response cycle.
- Every piece of middleware will have access to this object.

### **Some provided middlewares**

1. `express.json` - takes the json payload coming in, parses it, and adds it to req.body (determined by mime-type)

2. `express.urlencoded` - takes the urlencoded payload coming in, parses it, and adds it to req.body (determined by mime-type).

3. `helmet npm package` provides out of the box middleware to protect against common security vulnerabilities. ALWAYS USE THIS!

```language
terminal:
npm install helmet --save

application:
const helmet = require('helmet');
app.use(helmet());
```

### **Response**

It is important to set the correct content type before sending a response.

1. `res.send` sends the response back with content-type `text/html`.

2. `res.sendFile` sends a file as a response.

3. `res.json (res.jsonp)` sends the response back with content-type `application/json`. Uses JSON.stringify on the parameter passed.

4. `res.end` ends the response without any data.

### **Request**

1. `req.ip` contains the ip of the requester.
2. `req.path` contains the path of the requested url.
3. `req.body` contains key value pairs of data submitted in the request. Default: undefined. Set by body parsing inbuilt middleware like express.json and express.urlencoded

### **SET/GET**

1. `app.set(key, value)` is used to assign a key value pair.

2. `app.get(key)` is used to retrieve the value for a given key.

3. Some specific keys can be used to influence the behavior of the web server. Eg. "view engine"

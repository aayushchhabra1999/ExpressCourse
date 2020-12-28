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

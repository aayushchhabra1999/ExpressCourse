## CRUD

#### Create - POST request

```language
const express = require('express');
const app = express();
app.post(route, callback);
```

#### Read - GET request

```language
const express = require('express');
const app = express();
app.get(route, callback);
```

#### Update - PUT request

```language
const express = require('express');
const app = express();
app.put(route, callback);
```

#### Delete - DELETE request
```language
const express = require('express');
const app = express();
app.delete(route, callback);
```

## POSTMAN
 - Use this tool for making all kinds of http requests.
 - It is used for testing and debugging purposes.

 ## Serving static files
 - app.use takes in a middleware.

 - express.static() is a built in middleware to serve static files.

Example:
`app.use(express.static('public'))`
will serve the files inside the public directory.


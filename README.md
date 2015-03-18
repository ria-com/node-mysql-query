mysql-query
===========

Mysql service query interface for simple build sql query through mysql pool connections


Introduction
------------

Example:

```javascript
    var query = require('mysql-query');

    var qs = "show databases";

    query(qs, ['param1','param2'], 'master', function(err, rows, fields) {
        if (rows.length) {
            console.log(rows);
            process.exit(0);
        } else {
            new Error('There is an Error ');
        }
    });
```


Quick Start
-----------

**In your project directory, install and verify using npm:**

      my-project$ npm init

**Edit the default package.json file:**

(example fragment of package.json file):

```javascript
      "dependencies": {
         "mysql-query": "git://github.com/ria-com/node-mysql-query.git#master"
      }

      or

      "dependencies": {
         "mysql-query": "https://github.com/ria-com/node-mysql-query/tarball/master"
      }
```

**Install the package:**

      my-project$ npm install mysql-query

**Edit the mysql configuration file:**

      my-project$ vi config/default.js

```javascript
      module.exports = {
            database: {
                master: {
                    host: "localhost",
                    user: "root",
                    password: "",
                    port: "3306",
                    database: "test",
                    connectionLimit: 3
                }
      }
```
See [config](https://www.npmjs.org/package/config) about using 'config' module


Tests
-----

**In mysql-query module directory:**

(don't forget to edit 'config/default.js')

      mysql-query-dir$ npm install
      mysql-query-dir$ npm test

Advanced settings
-----------------
This module reconnects to database 5 times by default. But this limit may be exceeded. Therefore you can specify special section in config file **databasePool**. In this section **restartTimeout** must be specified. For example:

```javascript
module.exports = {
    databasePool: {
        restartTimeout: 10000
    },
    database: {
        master: {
            host: "localhost",
            user: "root",
            password: "",
            port: "3306",
            database: "test",
            connectionLimit: 3
        }
    }
}
```

It will tells node.js that it must reconnects to MySQL after 10 seconds

Pool object
-----------

You can access to connections pool object via this module. For example:

```javascript
var query = require("mysql-query");

query.pool.getConnection(function(connection){
  /* your code here */
})
```
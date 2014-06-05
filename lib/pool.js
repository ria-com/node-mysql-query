var mysql = require('mysql'),
    config = require('config'),
    database = config.database,
    poolCluster = mysql.createPoolCluster();
    for(var connection_name in database){
        poolCluster.add(connection_name, database[connection_name]);
    }
//console.log(poolCluster);
module.exports = poolCluster;
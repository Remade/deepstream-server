const deepstreamServer = require('deepstream.io');
const C = deepstreamServer.constants;
/*
 The server can take
 1) a configuration file path
 2) null to explicitly use defaults to be overriden by server.set()
 3) left empty to load the base configuration from the config file located within the conf directory.
 4) pass some options, missing options will be merged with the base configuration
 */
const server = new deepstreamServer({
    host: 'localhost',
    port: 6020
})

// start the server
server.start()
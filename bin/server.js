#! /usr/bin/env node

const Server = require('../dist/src/tools/server').default

// TODO: get port from argv
new Server()
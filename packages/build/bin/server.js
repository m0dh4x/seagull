#!/usr/bin/env node

const { Observer } = require('../dist/src/observer')

const options = {
  dataPath: '.data',
  vendor: ['react', 'react-dom', 'react-helmet', 'lodash', 'typestyle'],
}

new Observer(process.cwd(), options)
  .start()
  .then(() => console.log('started'))
  .catch(error => console.log('error', error))

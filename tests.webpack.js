/* eslint-env mocha */

const context = require.context('./src', true, /-test\.js$/)
context.keys().forEach(context)

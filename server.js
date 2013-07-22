#!/usr/bin/env node
'use strict'; /*jslint es5: true, node: true, indent: 2 */
var path = require('path');
var request = require('request');
var http = require('http-enhanced');
// var Cookies = require('cookies');
var logger = require('winston');
var argv = require('optimist').default({port: 1451, hostname: '127.0.0.1'}).argv;
var Router = require('regex-router');
var R = new Router();

// amulet.set({minify: true, root: path.join(__dirname, 'templates')});

// Cookies.prototype.defaults = function() {
//   var expires = new Date(Date.now() + 31*86400 *1000); // 1 month
//   return {expires: expires};
// };

R.get(/^\/favicon.ico/, function(m, req, res) { res.die(404, 'dammit chrome'); });
R.post(/^\/$/, function(m, res, req) {

});
R.get(/^\/(\w+)/, function(m, res, req) {

});

// attach independent routes
// R.default = require('./controllers/root');

http.createServer(function(req, res) {
  // req.cookies = new Cookies(req, res);

  var started = Date.now();
  res.on('finish', function() {
    logger.info('duration', {url: req.url, method: req.method, ms: Date.now() - started});
  });

  R.route(req, res);
}).listen(argv.port, argv.hostname, function() {
  logger.info('xframe proxy ready at ' + argv.hostname + ':' + argv.port);
});

#!/usr/bin/env node
 
var run_cmd= require('../lib/index.js');
 
var args = [];

process.argv.forEach(function (val, index, array) {
  args.push(val);
});

var foreiOS = new run_cmd(
    'forceios',args,
    function (me, buffer) { me.stdout += buffer.toString() },
    function () { console.log(foreiOS.stdout) }
);

var foreDriod = new run_cmd(
    'forcedroid',args,
    function (me, buffer) { me.stdout += buffer.toString() },
    function () { console.log(foreDriod.stdout) }
);
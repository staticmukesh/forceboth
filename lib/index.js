function run_cmd(cmd, args, cb, end) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var me = this;
    child.stdout.on('data', function (buffer) { cb(me, buffer) });
    child.stdout.on('end', end);
}

module.exports = run_cmd
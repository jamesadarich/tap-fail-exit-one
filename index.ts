#! /usr/bin/env node

import parser = require("tap-parser");
var p = parser(function (results) {
    if (results.fail + (results.failures || []).length > 0) {
        process.exit(1);
    }
    else {
        process.exit(0);
    }
});

process.stdin.pipe(p);
process.stdin.pipe(process.stdout);

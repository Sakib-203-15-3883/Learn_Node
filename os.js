//Node.js OS provides some basic operating-system related utility functions.

const os = require('os');

const currentOs = {
    userInfo : os.userInfo(),
    platform : os.platform(),
    hostName : os.hostname(),
    release : os.release(),
    type : os.type()
}


console.log(currentOs);
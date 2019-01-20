var moment = require('moment');

// Jan 1st 1970 00:00:00 am

var timestamp = moment().valueOf();
console.log(timestamp);

// 10:35 am
var date = moment();
console.log(date.format('h:mm a'));
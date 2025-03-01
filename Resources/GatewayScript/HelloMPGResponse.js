var sm = require('service-metadata');


// setting a variable to skip backside processing
sm.setVar('var://service/mpgw/skip-backside', true);

// setting a variable for dynamic backend routing
//sm.setVar('var://service/routing-url', '');

// setting the json response
session.output.write({
    "Message": "Welcome to IBM DataPower Devleopment Training",
    "Instructor": "Irfan Shahzad",
    "Company": "Tech El Macho"
});

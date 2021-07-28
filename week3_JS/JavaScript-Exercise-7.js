// Don't change the array
const companyNames = [
    'apple',
    'samsung',
    'google',
    'microsoft',
    'astrolabs',
    'siemens',
    'oracle',
    'facebook',
    'etisalat',
    'du',
    'starlink',
    'honda'
];

// For Bonus Step
const companyOrigin = {
    'apple': 'United States',
    'samsung': 'South Korea',
    'google': 'United States',
    'microsoft': 'United States',
    'astrolabs': 'United Arab Emirates',
    'siemens': 'Germany',
    'oracle': 'United States',
    'honda': 'Japan',
    'facebook': 'United States',
    'etisalat': 'United Arab Emirates',
    'du': 'United Arab Emirates',
    'starlink': 'United States',
}

// Your code below
const companyNamesFixed = [];

companyNames.forEach(
    function(theString) {
        // Make theString upperCase
        // Add the string to companyNamesFixed

        // For example: "APPLE" + ", " + "United States"
        theString = theString.slice(0,1).toUpperCase() + theString.slice(1); 
        //theString.slice(0,1) or theString[0]
        companyNamesFixed.push(
            theString + ", " + companyOrigin[theString.toLowerCase()]
        )
    }
)
/*
way to save into an array quicker
console.log(companyNamesFixed);
let companyNamesFixed2 = companyNames.map(
    theString => {
        theString = theString.slice(0,1).toUpperCase() + theString.slice(1); 
        return theString + ", " + companyOrigin[theString.toLowerCase()]     
    }
)
/* shorter way
companyNames.forEach(
    theString => {
        theString = theString.slice(0,1).toUpperCase() + theString.slice(1); 
        companyNamesFixed.push(
            theString + ", " + companyOrigin[theString.toLowerCase()]
        )
    }
)*/
// .map() will keep the size same
//.filter() will reduce the size of an array
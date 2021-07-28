//Part 1
const companyNames = [
    'apple',
    'samsung',
    'google',
    'microsoft',
    'astrolabs',
    'oracle',
    'facebook',
    'etisalat',
    'du',
    'starlink'
];

let companyNamesFixed=[];

companyNames.forEach(
    function(tString){
        companyNamesFixed.push(tString.toUpperCase());
    }
);
//console.log(companyNamesFixed);

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
//bonus step
let companyOriginFixed=[];
companyNames.forEach(
    function(tString){
        companyOriginFixed.push(tString.toUpperCase()+", " + companyOrigin[tString]);
    }
);
//console.log(companyOriginFixed);

//Part 2
/*companyNames.forEach(
    function(tString){
        companyOriginFixed.push(tString.toUpperCase()+", " + companyOrigin[tString]);
    }
);*/

//const companyNamesFixed = [];

companyNames.forEach(
    function(theString) {
        // Make theString upperCase
        // Add the string to companyNamesFixed

        // For example: "APPLE" + ", " + "United States"
        let string2 = theString.slice(0,1).toUpperCase() + theString.slice(1);
        companyNamesFixed.push(
            string2 + ", " + companyOrigin[theString]
        )
    }
)

console.log(companyNamesFixed);
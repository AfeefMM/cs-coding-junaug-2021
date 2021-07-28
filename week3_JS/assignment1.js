/*
     JavaScript Assignment 1
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

const cities = [
    'Abu Dhabi',
    'Abuja',
    'Cairo',
    '???',
    'Amman',
    'Islamabad',
    'Tokyo',
    'Beirut',
    '???',
    'Ottowa',
    'New Delhi',
    'Brasília'
];

const countries = [
    'UAE',
    'Nigeria',
    'Egypt',
    '???',
    'Jordan',
    'Pakistan',
    'Japan',
    'Lebanon',
    '???',
    'Canada',
    'India',
    'Brazil'
];

/******** Answers Section ********/

// 1. Create a for loop to iterate over 'cities'

function city(){
    for(index in cities){
        console.log(cities[index]);
    }
}
city();

// 2. Inside the for loop, console.log() the country for that city (e.g, "Abu Dhabi, UAE")
// Hint: use a counter variable to access both 'cities' and 'countries'
function cityCountry(){

    for(index in cities){
        if(cities[index].indexOf("???") || countries[index].indexOf("???")){
           
            let name = cities[index] + ","+countries[index];
            /* console.log(cities[index]);
             console.log(countries[index]);*/
             console.log(name);
        }        
    }

}
cityCountry();

// 3. If the name of a city is missing (i.e there is '???'), use console.log("Oops!")

function checkName(){
    for(index in cities){
        if(!cities[index].indexOf("???") || !countries[index].indexOf("???")){
            console.log("Oops!");
        }     
    }
}
checkName();
// NOTE: For 2 and 3, use if/else. There should be no '???' in the console!
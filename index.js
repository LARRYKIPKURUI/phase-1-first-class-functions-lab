 // Code your solution in this file!
 let  drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
 const returnFirstTwoDrivers = function (drivers) {
    // console.log(`${drivers[0]} ${drivers[1]}  `)

    return [ drivers[0] ,drivers[1]];
 }


 const returnLastTwoDrivers = function (drivers) {
        return [drivers[2],drivers[3]];
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 console.log(selectingDrivers[0](drivers)); 
 console.log(selectingDrivers[1](drivers)); 

 function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

function fareDoubler (fare) {
    return fare + fare 
}

function fareTripler (fare) {
 return fare * 3
}

function selectDifferentDrivers(selectingDrivers,functionn) {
    return functionn(selectingDrivers);
}
selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers)
selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers)
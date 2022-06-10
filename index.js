// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name0) {
    return array.filter((driverMatch) => driverMatch.toLowerCase() === name0.toLowerCase() )
}
//console.log(findMatching(drivers,"Jane"));

function fuzzyMatch(array, name1) {
    let letterArray = []
    for (const driver of array) {
        if (driver.slice(0,1) === name1.slice(0,1)) {
            letterArray.push(driver)
        }
    }
    return letterArray
}
//console.log(fuzzyMatch(drivers, "Annette")) 

const driversInfo = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function matchName(array, name2) {
    const matchArray = []
    for (const driver of array) {
        if (driver.name.toLowerCase() === name2.toLowerCase() ||
        driver.hometown.toLowerCase() === name2.toLowerCase()) {
            matchArray.push(driver)
        }
    }
    return matchArray
}
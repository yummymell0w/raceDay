let raceNumber = Math.floor(Math.random()*1000);
let earlyRegistrant = false;
let runnersAge = 25 ;
if (!earlyRegistrant) {
    raceNumber = raceNumber + 1000;
}
if (runnersAge > 18 && earlyRegistrant) {
    console.log(`Your race starts at 9:30 am and this is your number ${raceNumber}`);
} else if (runnersAge > 18 || earlyRegistrant) {
    console.log(`Your race starts at 11:00 am and this is your number ${raceNumber}`);
} else if (runnersAge < 18 && !earlyRegistrant) {
    console.log(`Your race starts at 12:30 pm and this is your number ${raceNumber}`);
} else {
    console.log('Please see the registration desk.');
}
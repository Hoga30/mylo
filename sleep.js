const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
      } else if (day === 'tuesday') {
        return 7;
      }
      else if(day === 'wednesday'){
        return 6;
      }
      else if(day === 'thursday'){
        return 5;
      }
      else if(day === 'friday'){
        return 4;
      }
      else if(day === 'saturday'){
        return 7;
      }
      else{
        return 10;
      }
};
console.log(getSleepHours('saturday')); // hours i sleep on the day mentioned

const getActualSleepHours = () => {
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') ;

  };

  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  console.log(getActualSleepHours()); //  print the sum of all sleep hours in the week
console.log(getIdealSleepHours()); 

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
    console.log('wow got perfect amount of sleep !');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('you got  more sleep than needed .get back to work');
  } else {
    console.log('ooh you got  less sleep than you needed this week. Get some rest.');
  }
};
  calculateSleepDebt();    
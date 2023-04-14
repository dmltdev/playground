const getSleepHours = (day) => {
    day = day.toLowerCase();
    switch (day) {
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 9;
        break;
      case "wednesday":
        return 7;
        break;
      case "thursday":
        return 5;
        break;
      case "friday":
        return 4;
        break;
      case "saturday":
        return 6;
        break;
      case "sunday":
        return 7;
        break;
      default:
        return "Incorrect input. It should be a weekday, such as monday";
    }
  };
  
  const getActualSleepHours = () => {
    return (
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday")
    );
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const difference = Math.abs(idealSleepHours - actualSleepHours);
    if (actualSleepHours === idealSleepHours) {
      console.log('You\'ve got a perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You\'ve got ${difference} hours more sleep than needed.`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You\'ve got ${difference} hours less sleep than needed.`);
    }
  }
  
  calculateSleepDebt();
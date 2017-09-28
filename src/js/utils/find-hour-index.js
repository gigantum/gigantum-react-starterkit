 //Since the Dark Sky API returns hourly data in an array, the app must know the
 //index corresponding to the user's commute time. This function return this hourly index.
 //If it is too far in advance of the next commute window (only 48 hours of data
 //are available), the function returns false.

export const findHourIndex = (time) => {

  var hourIndex, currentTime, currentHour, currentDay;
  currentHour = time.getHours();
  currentDay = time.getDay();
  if(currentHour>=18){ //if current time is at or after 6pm
      switch (currentDay) {
          case 5: //Friday
            hourIndex = false; //too soon to get hourly index for Monday morning
            break;
          case 6: //Saturday
            hourIndex = 24+(24-currentHour+8) //returns hour index for Monday morning commute
            break;
          default:
            hourIndex = 24-currentHour+8; //returns hour index for next morning commute
            break;
          }
        }
    else if(currentHour>=9&&currentHour<=17){ //if current time is between 9am and 6pm
        switch (currentDay) {
            case 6: //Saturday
              hourIndex = 24+(24-currentHour+7); //returns next Monday morning commute
              break;
            case 0: //Sunday
              hourIndex = 24-currentHour+7; //returns next Monday morning commute
              break;
            default:
              hourIndex = 17-currentHour; //returns coming evening commute
              break;
            }
          }
    else { //if current time is before 9am
        if(currentDay==6&&currentHour<7){ //Saturday before 7am
            hourIndex = false; //too soon to get hourly index for Monday morning
          }
        else{
          switch (currentDay) {
              case 6: //Saturday (after/at 7am)
                hourIndex = 48+(8-currentHour); //returns next Monday morning commute
                break;
              case 0: //Sunday
                hourIndex = 24+(8-currentHour);
                break;  //returns next Monday morning commute
              default:
                hourIndex = 8-currentHour; //returns current day's morning commute
                break;
            }
          }
        }
        return hourIndex;
    }

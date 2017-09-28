//Creates a string representation of commute time, based on the unix timestamp returned by weather data

export const setCommuteTime = (unix_time, hourly) => {

  var date, time, hours, minutes, morning, commuteBegin, commuteEnd;

  time = new Date(unix_time*1000);
  hours = time.getHours();
  minutes = "0" + time.getMinutes();
  morning = true;

  if(12-hours<=0){
    morning = false;
  }

  date = time.getMonth()+1 + "/" + time.getDate() + "/" + time.getFullYear();

  if(hourly===false){ //if hourly data is not available, commute must be in the morning
    return "8:00 AM-9:00 AM, " + date;
  }
  else if(morning){
    commuteBegin = hours%12 + ':' + minutes.substr(-2) + " " + "AM";
    commuteEnd = hours%12+1 + ':' + minutes.substr(-2)+ " " + "AM";
    return commuteBegin + "-" + commuteEnd +", " + date;
  }
  else{
    commuteBegin = hours%12 + ':' + minutes.substr(-2)+ " " + "PM";
    commuteEnd = hours%12+1 + ':' + minutes.substr(-2)+ " " + "PM";
    return commuteBegin + "-" + commuteEnd +", " + date;
  }
}

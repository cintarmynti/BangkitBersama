const CountDiffDate = (incomingDate) => {
   var dateFirst = new Date();
   var filterDate = incomingDate.replace(' 00:00:00', '')
   var dateSecond = new Date(filterDate);

if (dateFirst > dateSecond ){
var diffDays = 0;
} else {
   // time difference
   var timeDiff = Math.abs(dateFirst.getTime()-dateSecond.getTime());

   // days difference
   var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
}



   // difference
   return diffDays;
}

export default CountDiffDate;
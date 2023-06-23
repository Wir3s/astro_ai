import React from 'react';

function DateToday() {
  let today = new Date();

  let options = { weekday: 'long', month: 'long', day: 'numeric' };
  let dateString = today.toLocaleDateString('en-US', options);

  return (
    <div>
      {dateString}
    </div>
  );
}

export default DateToday;
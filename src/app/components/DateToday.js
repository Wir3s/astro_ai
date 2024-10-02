import React from "react";
import styles from "./DateToday.module.css";

function DateToday() {
  let today = new Date();

  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "America/Chicago",
  };
  let dateString = today.toLocaleDateString("en-US", options);

  return <div className={styles.date}>{dateString}</div>;
}

export default DateToday;

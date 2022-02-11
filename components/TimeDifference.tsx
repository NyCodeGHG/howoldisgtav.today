import { intervalToDuration } from "date-fns";
import { useNow } from "../hooks/now";
import styles from '../styles/TimeDifference.module.css';

function TimeDifference({ since }: { since: Date }): JSX.Element {
  const now = useNow();
  const difference = intervalToDuration({ end: now, start: since });
  const text = `GTA V is ${difference.years} years, ${difference.months} months and ${difference.days} days old today.`;
  return <p className={styles.differenceText}>{text}</p>;
}

export default TimeDifference

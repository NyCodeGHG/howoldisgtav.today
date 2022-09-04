import { intervalToDuration } from "date-fns";
import { useTranslation } from "next-i18next";
import { useNow } from "./../hooks/now";
import styles from '../styles/TimeDifference.module.css';

function TimeDifference({ since }: { since: Date }): JSX.Element {
  const now = useNow();
  const { t } = useTranslation('common');
  const { years, months, days } = intervalToDuration({ end: now, start: since });
  let time =  [];

  if (years != 0) {
    time.push(t('year', {
      count: years
    }))
  }

  if (months != 0) {
    time.push(t('month', {
      count: months
    }))
  }

  if (days != 0) {
    time.push(t('day', {
      count: days
    }))
  }

  let timeText = '';
  for (let i = 0; i < time.length; i++) {
    const part = time[i];
    timeText += part;
    if (i == time.length - 1) {
      break;
    }

    if (i == time.length - 2) {
      timeText += ' ' + t('and') + ' ';
      continue;
    }

    timeText += ', ';
  }

  const text = t('gta-v-is-old', {
    time: timeText
  });
  return <p className={styles.differenceText}>{text}</p>;
}

export default TimeDifference

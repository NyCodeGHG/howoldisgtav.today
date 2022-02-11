import { intervalToDuration } from "date-fns";
import { useTranslation } from "next-i18next";
import { useNow } from "../hooks/now";
import styles from '../styles/TimeDifference.module.css';

function TimeDifference({ since }: { since: Date }): JSX.Element {
  const now = useNow();
  const { t } = useTranslation('common');
  const difference = intervalToDuration({ end: now, start: since });
  const text = t('gta-v-is-old', {
    time: t('year', {
      count: difference.years
    }) + ', ' +
      t('month', {
        count: difference.months
      }) + ' ' +
      t('and') + ' ' +
      t('day', {
        count: difference.days
      })
  });
  return <p className={styles.differenceText}>{text}</p>;
}

export default TimeDifference

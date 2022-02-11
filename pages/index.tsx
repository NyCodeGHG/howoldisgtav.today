import type { NextPage } from 'next'
import TimeDifference from '../components/TimeDifference'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const GTA_V_RELEASE = new Date('September 17, 2013');

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <TimeDifference since={GTA_V_RELEASE} />
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

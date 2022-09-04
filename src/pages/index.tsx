import type { NextPage } from 'next'
import TimeDifference from '../components/TimeDifference'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

const GTA_V_RELEASE = new Date('September 17, 2013');

const Home: NextPage = () => {
  const { i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>GTA VI when?</title>
        <meta name="description" content="Tells you how old GTA V is" />
        <meta name="application-name" content="How old is GTA V today?" />
        <meta property="og:title" content="How old is GTA V today?" />
        <meta property="og:site_name" content='How old is GTA V today?' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://howoldisgtav.today' />
        <meta property='og:description' content="It's very old. Click the link to see how old it is." />
        <meta property='og:locale' content={i18n.language} />
        <meta name='twitter:card' content='summary'/>
        <meta name='twitter:creator' content='@NyCodeGHG'/>
      </Head>
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

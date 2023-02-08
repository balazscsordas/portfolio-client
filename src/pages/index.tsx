import MainBanner from '../components/MainBanner'
import Head from 'next/head'
import AboutMeBlock from '../../src/components/aboutMe/AboutMeBlock'
import ProjectsBlock from '../../src/components/projects/ProjectsBlock'
import ContactBlock from '../../src/components/contact/ContactBlock'
import Layout from '../../src/components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Balazs Csordas | Portfolio</title>
        <meta name="description" content="Balazs Csordas | Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainBanner/>
        <AboutMeBlock/>
        <ProjectsBlock/>
        <ContactBlock/>
      </Layout>
    </>
  )
}

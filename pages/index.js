import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import ImageShow from '../components/ImageShow/ImageShow'
import Reference from '../components/Reference/Reference'
import TargetSection from '../components/TargetSection/TargetSection'
import ValueAndStandards from '../components/ValueAndStandards/ValueAndStandards'


export default function Home() {
  return (
    <div>
      <Head>
        <title>BNM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      <main>
        {/* ========= Hero ======== */}
        <Hero />

        {/* ========= Target Section ========= */}
        <hr />
        <TargetSection />

        {/* ========= Image Show ======== */}
        <hr />
        <ImageShow />

        {/* ========= Value and Standards ========= */}
        <hr />
        <ValueAndStandards />

        
        {/* ========= Reference ========== */}
        <hr />
        <Reference />
        
       </main>
    </div>
  )
}

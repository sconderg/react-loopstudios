import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OurCreations from '../components/OurCreations';
import VrSection from '../components/VrSection';

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <title>Loopstudios</title>
      </Head>
      
      {/* Header */}
      <Header />
      {/* Vr-Section */}
      <VrSection />
      {/* Our-Creations-Section */}
      <OurCreations />
      {/* Footer */}
      <Footer />
    </div>
  )
}

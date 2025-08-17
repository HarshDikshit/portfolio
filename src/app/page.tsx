import Grid from '@/components/Grid'
import HeroSection from '@/components/Navbar/HeroSection'
import RecentProjects from '@/components/RecentProjects'
import { FloatingNav } from '@/components/ui/Floating'
import { HomeIcon } from 'lucide-react'
import AcademicTimeline from '@/components/AcademicTimeline'
import React from 'react'
import { navItems } from '@/data'
import TechStacksShowcase from '@/components/TechStack'
import ContactFormUI from '@/components/Contact'
import Footer from '@/components/Footer'

function Home() {
  return (
    <main className='relative bg-black flex flex-col sm:px-10 md:px-5 overflow-hidden mx-auto justify-center items-center'>
      <div className='max-w-7xl w-full'>
        <FloatingNav className='hidden md:flex'
          navItems={navItems}/>
        <HeroSection/>
        <Grid/>
        <RecentProjects/>
        <AcademicTimeline/>
        <TechStacksShowcase/>
        <ContactFormUI/>
        <Footer/>
      </div>
    </main>
  )
}

export default Home
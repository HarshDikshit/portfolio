import Grid from '@/components/Grid'
import HeroSection from '@/components/HeroSection'
import RecentProjects from '@/components/RecentProjects'
import { FloatingNav } from '@/components/ui/Floating'
import { HomeIcon } from 'lucide-react'
import AcademicTimeline from '@/components/AcademicTimeline'
import React from 'react'

function Home() {
  return (
    <main className='relative bg-black flex flex-col sm:px-10 px-5 overflow-hidden mx-auto justify-center items-center'>
      <div className='max-w-7xl w-full'>
        <FloatingNav
          navItems={[
            {name: 'Home', link: '#'},
            {name: 'About', link: '#about'}
          ]}/>
        <HeroSection/>
        <Grid/>
        <RecentProjects/>
        <AcademicTimeline/>
      </div>
    </main>
  )
}

export default Home
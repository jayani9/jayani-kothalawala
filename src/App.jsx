import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Pro from './Components/Pro'

// Fixed: Added braces for named imports and fixed double slashes (//)
import { ArchitectureViewer } from './Components/newcomponents/ArchitectureViewer'
import { InteractiveSandbox } from './Components/newcomponents/InteractiveSandbox'
import { ProjectContributions } from './Components/newcomponents/ProjectContributions'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 overflow-x-hidden font-sans">
      <Navbar />
      <main className="space-y-12 py-6">
        <Hero />
        <About />
        <Technologies />
        <Pro />
        {/* <ArchitectureViewer />
        <InteractiveSandbox />
        <ProjectContributions /> */}
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

export default App
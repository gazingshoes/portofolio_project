'use client';
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import BlurText from "../components/BlurText/BlurText";
import Beams from "../components/Beams/Beams";

export default function Experiences() {
  const ArrowLeft = LucideIcons.ArrowLeft;
  
  return (
    <div className="overflow-x-hidden bg-[#0e1111] scroll-smooth min-h-screen">
      {/* Background Beams - you might want to import this component */}
      <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full opacity-30">

        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#00ffea"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />

      </div>

      {/* headern */}
      <header className="container mx-auto relative z-10 px-6 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#00ffea] hover:text-white transition-all duration-300 font-medium hover:-translate-y-1 hover:scale-105"
        >
          <ArrowLeft size={20} />
          Kembali ke Home
        </Link>
      </header>

      {/* title mungkin */}
      <section className="container mx-auto relative z-10 px-6 py-16">
        <div className="text-center mb-16">
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '1rem'}}>
            <BlurText
              text="My Experiences"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={() => {}}
              className="text-5xl md:text-6xl font-black text-[#00ffea]"
            />
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-3xl text-center">
              <BlurText
                text="Maaf! Saya belum ada pengalaman kerja."
                delay={50}
                animateBy="words"
                direction="top"
                onAnimationComplete={() => {}}
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* educations */}
      <section className="container mx-auto relative z-10 px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Educations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1a1f20] p-6 md:p-8 rounded-lg border border-[#414a4c] transition-all duration-300 hover:border-[#00ffea]/50 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00ffea]/10">
                <h3 className="text-xl md:text-2xl font-bold text-[#00ffea] mb-2">SMAN 1 Kota Serang</h3>
                <h4 className="text-lg text-white mb-2">Jurusan MIPA</h4>
                <p className="text-gray-400 mb-4">2022 - 2025</p>
                <p className="text-gray-300">
                  Belajar di SMAN 1 Kota Serang di jurusan MIPA. Also had experience in the student council, being in the IT Division.
                </p>
              </div>
              
              <div className="bg-[#1a1f20] p-6 md:p-8 rounded-lg border border-[#414a4c] transition-all duration-300 hover:border-[#00ffea]/50 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00ffea]/10">
                <h3 className="text-xl md:text-2xl font-bold text-[#00ffea] mb-2">UNESA</h3>
                <h4 className="text-lg text-white mb-2">S1 Sains Data</h4>
                <p className="text-gray-400 mb-4">2025 - 2029 (cumlaude hopefully)</p>
                <p className="text-gray-300">
                  I'm still a new student, and looking for projects to work on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* personal projects */}
    <section className="container mx-auto relative z-10 px-6 py-16">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Personal Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-[#1a1f20] to-[#252b2c] p-6 rounded-lg border border-[#414a4c] transition-all duration-300 hover:border-[#00ffea]/50 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00ffea]/10">
              <h3 className="text-xl font-bold text-[#00ffea] mb-3">Roblox Game Developer</h3>
              <p className="text-gray-400 text-sm mb-3">2020 - Present</p>
              <p className="text-gray-300 mb-4">
                Started with my only private project, then founded a Group, called "3 am studio" as a small Roblox Game Dev Studio. Have 3 games published with thousands of visits.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#414a4c] text-white rounded text-xs">Lua</span>
              </div>
            </div>
    
            <div className="bg-gradient-to-r from-[#1a1f20] to-[#252b2c] p-6 rounded-lg border border-[#414a4c] transition-all duration-300 hover:border-[#00ffea]/50 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00ffea]/10">
              <h3 className="text-xl font-bold text-[#00ffea] mb-3">This Portofolio</h3>
              <p className="text-gray-400 text-sm mb-3">2025</p>
              <p className="text-gray-300 mb-4">
                This portofolio counts as one of my personal projects. Built with Next.js, React, and Three.js for the 3D effects.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#414a4c] text-white rounded text-xs">React</span>
                <span className="px-2 py-1 bg-[#414a4c] text-white rounded text-xs">TypeScript</span>
                <span className="px-2 py-1 bg-[#414a4c] text-white rounded text-xs">Tailwind CSS</span>
                <span className="px-2 py-1 bg-[#414a4c] text-white rounded text-xs">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Call to Action */}
      <section className="container mx-auto relative z-10 px-6 py-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00ffea] mb-8">Let's Build Something Amazing</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Meskipun experience saya belum banyak, saya selalu semangat buat belajar hal baru dan ngerjain project seru. Jangan ragu buat reach out ya!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/#contact" className="bg-[#00ffea] text-[#0e1111] px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00ffea]/25">
              Get in Touch
            </Link>
            <Link href="/#projects" className="border-2 border-[#00ffea] text-[#00ffea] px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-[#00ffea] hover:text-[#0e1111] hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00ffea]/25">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container mx-auto py-16 relative z-10 px-6">
        <div className="text-center border-t border-[#414a4c] pt-8">
          <p className="text-gray-500">© 2025 rajendra. built with next.js</p>
        </div>
      </div>
    </div>
  );
}
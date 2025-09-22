'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import Beams from "./components/Beams/Beams";

export default function Home() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleEmailClick = () => {
    setIsEmailModalOpen(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('rajendraabhyasa09@gmail.com');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const closeModal = () => {
    setIsEmailModalOpen(false);
    setCopySuccess(false);
  };

  return (
    <div className="overflow-x-hidden bg-[#0e1111] scroll-smooth">
      <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full">
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

      {/* Email Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4">
          <div className="bg-[#1a1f20] border border-[#414a4c] rounded-xl p-6 max-w-md w-full mx-auto relative animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ffea] to-[#00b8d4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#0e1111]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Get In Touch!</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Halo! Gmail gw bisa langsung di copy ya, kalo mau tanya-tanya bisa ke situ aja!
                </p>
              </div>

              {/* Email Display and Copy Button */}
              <div className="bg-[#0e1111] border border-[#414a4c] rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#00ffea] font-mono text-sm flex-1 text-left">
                    rajendraabhyasa09@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      copySuccess 
                        ? 'bg-green-500 text-white' 
                        : 'bg-[#00ffea] hover:bg-[#00b8d4] text-[#0e1111] hover:scale-105'
                    }`}
                  >
                    {copySuccess ? (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-[#414a4c] text-gray-300 rounded-lg hover:bg-[#414a4c] transition-colors"
                >
                  Close
                </button>
                <a
                  href="mailto:rajendraabhyasa09@gmail.com"
                  className="flex-1 px-4 py-2 bg-[#00ffea] text-[#0e1111] rounded-lg font-medium hover:bg-[#00b8d4] transition-colors"
                >
                  Open Email App
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="container mx-auto h-screen relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center gap-8 px-6">
          
          {/* Left Section - Lower z-index */}
          <div className="lg:col-span-6 relative z-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-3xl md:text-4xl text-white font-bold">bisa jadi</h1>
                <RotatingText 
                  texts={['frontend', 'backend', 'fullstack', 'developer']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-[#00ffea] to-[#00b8d4] text-[#0e1111] overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-xl md:text-2xl font-bold inline-flex transition-all"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2500}
                  />
              </div>
              <div className="flex flex-col items-start">
                <SplitText 
                  text="halooooooo!"
                  className="text-5xl md:text-6xl font-black text-start text-[#00ffea]"
                  delay={50}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="100px"
                  textAlign="left"
                />
                <SplitText 
                  text="saya rajendra!"
                  className="text-5xl md:text-6xl font-black text-start text-white"
                  delay={75}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="100px"
                  textAlign="left"
                />
              </div>
              
              {/* Simple CTA */}
              <div className="flex gap-4 mt-6">
                <a href="#projects" className="bg-[#00ffea] text-[#0e1111] px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors">
                  Lihat Project
                </a>
                <Link href="/experiences" className="border-2 border-[#00ffea] text-[#00ffea] px-6 py-3 rounded-lg font-bold hover:bg-[#00ffea] hover:text-[#0e1111] transition-colors">
                  Experiences
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Higher z-index for Lanyard */}
          <div className="lg:col-span-6 flex justify-center relative z-20">
            <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-32 relative z-10 px-6">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <ScrollReveal
              containerClassName="mb-8"
              textClassName="text-4xl md:text-5xl font-bold text-white"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
              rotationEnd="bottom bottom-=10%"
              wordAnimationEnd="bottom bottom-=10%"
            >
              About Me
            </ScrollReveal>
            
            <ScrollReveal
              containerClassName="mb-6"
              textClassName="text-lg md:text-xl text-gray-300 leading-relaxed"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={15}
              rotationEnd="bottom bottom-=20%"
              wordAnimationEnd="bottom bottom-=20%"
            >
              Halo, saya Rajendra, mahasiswa baru UNESA dari prodi Sains Data. Saya suka ngoding sih, cuman kurang suka kalo belajar matematika. Pengalaman ngoding saya sih ngga banyak, saya pernah ngerjain project Web Development, Game Development, personal projects juga sering, portofolio ini lah salah satunya.
            </ScrollReveal>
            
            <ScrollReveal
              containerClassName=""
              textClassName="text-lg md:text-xl text-gray-300 leading-relaxed"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={10}
              rotationEnd="bottom bottom-=30%"
              wordAnimationEnd="bottom bottom-=30%"
            >
              Selain coding, saya juga suka explore teknologi baru, contribute ke open source, dan berbagi knowledge dengan teman-teman sebidang juga.
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-32 relative z-10 px-6">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00ffea] mb-12 text-center">Skills & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1a1f20] p-6 md:p-8 rounded-lg border border-[#414a4c] hover:border-[#00ffea]/50 transition-colors">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Frontend</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-[#1a1f20] p-6 md:p-8 rounded-lg border border-[#414a4c] hover:border-[#00ffea]/50 transition-colors">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Backend</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Node.js</li>
                  <li>Python</li>
                </ul>
              </div>
              <div className="bg-[#1a1f20] p-6 md:p-8 rounded-lg border border-[#414a4c] hover:border-[#00ffea]/50 transition-colors">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Tools</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>Vercel</li>
                  <li>Figma</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-32 relative z-10 px-6">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Recent Projects</h2>
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-[#1a1f20] to-[#252b2c] p-6 md:p-8 rounded-lg border border-[#414a4c] hover:border-[#00ffea]/50 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-[#00ffea] mb-4">Roblox Game Development Group</h3>
                <p className="text-gray-300 text-base md:text-lg mb-6">
                  Founded a Roblox game development group called "3 am studio". Focused on recreating actual places into Roblox games. We've had few projects published, can be found under the "Experiences" tab under the group. Check it out!
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">Lua</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://www.roblox.com/communities/11904571/3-am-studio#!/about" target="_blank" className="text-[#00ffea] hover:underline font-medium">View on Roblox →</a>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#1a1f20] to-[#252b2c] p-6 md:p-8 rounded-lg border border-[#414a4c] hover:border-[#00ffea]/50 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-[#00ffea] mb-4">Portofolio Website</h3>
                <p className="text-gray-300 text-base md:text-lg mb-6">
                  This website also includes as one of my personal projects. Built with Next.js, React, and Three.js for the 3D effects.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">Three.js</span>
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">Next.js</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-[#00ffea] hover:underline font-medium">View Live →</a>
                  <a href="https://github.com/gazingshoes/portofolio_project" target="_blank" className="text-[#00ffea] hover:text-white font-medium">GitHub →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-32 relative z-10 px-6">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#00ffea] mb-8">Let's Work Together</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
                Punya project menarik? Atau mau ngobrol-ngobrol tentang teknologi? 
                Hit me up! Saya selalu excited untuk kolaborasi dan bikin project yang kece.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  onClick={handleEmailClick}
                  className="bg-[#00ffea] text-[#0e1111] px-8 py-3 rounded-lg font-bold text-lg hover:bg-white transition-colors"
                >
                  Copy Email
                </button>
                <a href="https://www.linkedin.com/in/rajendracahyono" target="_blank" className="border-2 border-[#00ffea] text-[#00ffea] px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#00ffea] hover:text-[#0e1111] transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
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
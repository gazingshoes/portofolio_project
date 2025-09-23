'use client';
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import BlurText from "@/app/components/BlurText/BlurText";
import Beams from "@/app/components/Beams/Beams";

export default function RobloxProject() {
  const ArrowLeft = LucideIcons.ArrowLeft;
  const ExternalLink = LucideIcons.ExternalLink;
  const Users = LucideIcons.Users;
  const Calendar = LucideIcons.Calendar;
  const Code = LucideIcons.Code;
  
  return (
    <div className="overflow-x-hidden bg-[#0e1111] scroll-smooth min-h-screen">
      {/* Background Beams */}
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

      {/* Header */}
      <header className="container mx-auto relative z-10 px-6 py-8">
        <Link 
          href="/experiences" 
          className="inline-flex items-center gap-2 text-[#00ffea] hover:text-white transition-all duration-300 font-medium hover:-translate-y-1 hover:scale-105"
        >
          <ArrowLeft size={20} />
          Back to Experiences
        </Link>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto relative z-10 px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 text-center">
            <div className="mb-16">
              <div className="flex justify-center mb-4">
                <BlurText
                  text="3 am studio"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => {}}
                  className="text-5xl md:text-6xl font-black text-[#00ffea]"
                />
              </div>
              <div className="flex justify-center mb-8">
                <BlurText
                  text="Roblox Game Development Group"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => {}}
                  className="text-xl md:text-2xl text-gray-300"
                />
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-2 bg-[#1a1f20] px-4 py-2 rounded-lg border border-[#414a4c]">
                  <Calendar size={20} className="text-[#00ffea]" />
                  <span className="text-white">2020 - Present</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1a1f20] px-4 py-2 rounded-lg border border-[#414a4c]">
                  <Users size={20} className="text-[#00ffea]" />
                  <span className="text-white">1000+ Visits</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1a1f20] px-4 py-2 rounded-lg border border-[#414a4c]">
                  <Code size={20} className="text-[#00ffea]" />
                  <span className="text-white">Lua</span>
                </div>
              </div>

              <a 
                href="https://www.roblox.com/communities/11904571/3-am-studio#!/about" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#00ffea] text-[#0e1111] px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00ffea]/25"
              >
                Visit on Roblox
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto relative z-10 px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Project Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#1a1f20] p-6 md:p-8 rounded-lg border border-[#414a4c]">
                <h3 className="text-2xl font-bold text-[#00ffea] mb-4">History</h3>
                <p className="text-gray-300 leading-relaxed">
                  3 am studio dibuat pada tahun 2020, awalnya hanya sebuah project pribadi saya, dan sempat nonaktif selama beberapa tahun. Setelah itu, mulai saya aktifkan kembali sebagai wadah untuk game-game yang dibuat oleh saya dan teman-teman. Kini sedang fokus untuk membuat kembali tempat-tempat di dunia nyata dalam game Roblox.
                </p>
              </div>
              
              <div className="bg-[#1a1f20] p-6 md:p-8 rounded-lg border border-[#414a4c]">
                <h3 className="text-2xl font-bold text-[#00ffea] mb-4">My Role</h3>
                <p className="text-gray-300 leading-relaxed">
                  Saya mempunyai peran sebagai founder dari Studio ini, serta menjadi bagian dari team developer, lebih spesifiknya dalam scripting. Setelah group ini saya alih fungsikan sebagai Hub, kepemilikan group ini tidak lagi di tangan saya, sekarang milik bersama dengan kedua teman saya.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-r from-[#1a1f20] to-[#252b2c] p-8 rounded-lg border border-[#414a4c] mb-12">
              <h3 className="text-2xl font-bold text-[#00ffea] mb-6">About the Project</h3>
              <div className="w-full">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Project kami sekarang adalah untuk membuat game yang berdasarkan tempat di dunia nyata. Untuk saat ini kami baru membuat game tempat kami bersekolah, dan juga sebuah game yang memuat alun-alun kota. Meskipun masih dibawah nama yang berbeda. Untuk game yang sudah di bawah nama 3 am studio, hanya ada satu game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="container mx-auto relative z-10 px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Highlights</h2>
            
            <div className="space-y-6">
              <div className="bg-[#1a1f20] p-6 rounded-lg border border-[#414a4c]">
                <h3 className="text-xl font-bold text-[#00ffea] mb-3">Lua Scripting</h3>
                <p className="text-gray-300">
                  Developed complex game mechanics, player interactions, and world systems using Roblox's Lua scripting environment. This includes everything from basic player movement to advanced game logic and data persistence.
                </p>
              </div>
              
              <div className="bg-[#1a1f20] p-6 rounded-lg border border-[#414a4c]">
                <h3 className="text-xl font-bold text-[#00ffea] mb-3">Game Design & UX</h3>
                <p className="text-gray-300">
                  Created intuitive user interfaces and engaging gameplay loops that keep players coming back. Focus on accessibility and user experience across different device types and player skill levels.
                </p>
              </div>
              
              <div className="bg-[#1a1f20] p-6 rounded-lg border border-[#414a4c]">
                <h3 className="text-xl font-bold text-[#00ffea] mb-3">Team Leadership</h3>
                <p className="text-gray-300">
                  Managed project timelines, coordinated with team members, and maintained quality standards across all published games. Experience in remote collaboration and project management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="container mx-auto relative z-10 px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Results & Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-[#1a1f20] p-6 rounded-lg border border-[#414a4c]">
                <div className="text-3xl font-bold text-[#00ffea] mb-2">3</div>
                <p className="text-white font-medium mb-1">Games Published</p>
                <p className="text-gray-400 text-sm">Active and playable experiences</p>
              </div>
              
              <div className="text-center bg-[#1a1f20] p-6 rounded-lg border border-[#414a4c]">
                <div className="text-3xl font-bold text-[#00ffea] mb-2">1K+</div>
                <p className="text-white font-medium mb-1">Total Visits</p>
                <p className="text-gray-400 text-sm">Across all published games</p>
              </div>
              
              <div className="text-center bg-[#1a1f20] p-6 rounded-lg border border-[#414a4c]">
                <div className="text-3xl font-bold text-[#00ffea] mb-2">5+</div>
                <p className="text-white font-medium mb-1">Years Experience</p>
                <p className="text-gray-400 text-sm">In Roblox development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto relative z-10 px-6 py-16">
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/#contact" className="bg-[#00ffea] text-[#0e1111] px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00ffea]/25">
              Get in Touch
            </Link>
            <a 
              href="https://www.roblox.com/communities/11904571/3-am-studio#!/about" 
              target="_blank"
              className="border-2 border-[#00ffea] text-[#00ffea] px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-[#00ffea] hover:text-[#0e1111] hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00ffea]/25"
            >
              Visit 3 am studio
            </a>
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
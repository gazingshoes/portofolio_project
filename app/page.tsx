import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import Beams from "./components/Beams/Beams";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#0e1111]">
      <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
          />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto h-screen relative z-10">
        <div className="grid grid-cols-12 h-full items-center">
          <div className="col-span-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <h1 className="text-4xl text-white font-bold">gw udah muak</h1>
                <RotatingText 
                  texts={['kontol', 'anjing', 'babi', 'meki']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-[#414a4c] text-white overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  />
              </div>
              <div className="flex flex-col items-start">
                <SplitText 
                  text="halooooooo!"
                  className="text-6xl font-semibold text-start text-[#00ffea]"
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
                  text="kenalin, gw rajendra!"
                  className="text-6xl font-semibold text-start text-white"
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
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-32 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 col-start-3">
            <ScrollReveal
              containerClassName="mb-8"
              textClassName="text-5xl font-bold text-white"
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
              textClassName="text-xl text-gray-300 leading-relaxed"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={15}
              rotationEnd="bottom bottom-=20%"
              wordAnimationEnd="bottom bottom-=20%"
            >
              gw udh cape, gw udh cape, gw udh cape, gw udh cape, gw udh cape, gw udh cape, gw udh cape, gw udh cape, gw udh cape, gw udh cape, gw udh cape, gw udh cape, gw udh cape, gw udh cape.
            </ScrollReveal>
            
            <ScrollReveal
              containerClassName=""
              textClassName="text-xl text-gray-300 leading-relaxed"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={10}
              rotationEnd="bottom bottom-=30%"
              wordAnimationEnd="bottom bottom-=30%"
            >
              CAPEEEEEEEEEEEEEEEEE
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto py-32 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-10 col-start-2">
            <h2 className="text-5xl font-bold text-[#00ffea] mb-12 text-center">Skills & Tech</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-[#1a1f20] p-8 rounded-lg border border-[#414a4c]">
                <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                  <li>Three.js</li>
                </ul>
              </div>
              <div className="bg-[#1a1f20] p-8 rounded-lg border border-[#414a4c]">
                <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <div className="bg-[#1a1f20] p-8 rounded-lg border border-[#414a4c]">
                <h3 className="text-2xl font-bold text-white mb-4">Tools</h3>
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
      </div>

      {/* Projects Section */}
      <div className="container mx-auto py-32 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-10 col-start-2">
            <h2 className="text-5xl font-bold text-white mb-12 text-center">Recent Projects</h2>
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-[#1a1f20] to-[#252b2c] p-8 rounded-lg border border-[#414a4c]">
                <h3 className="text-3xl font-bold text-[#00ffea] mb-4">E-Commerce Platform</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Full-stack e-commerce solution dengan payment gateway, inventory management, 
                  dan admin dashboard yang complete. Built with Next.js dan PostgreSQL.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">Stripe</span>
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">Tailwind</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#1a1f20] to-[#252b2c] p-8 rounded-lg border border-[#414a4c]">
                <h3 className="text-3xl font-bold text-[#00ffea] mb-4">3D Portfolio Website</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Interactive 3D portfolio dengan Three.js, featuring particle systems, 
                  smooth animations, dan immersive user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">Three.js</span>
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">GSAP</span>
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">WebGL</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#1a1f20] to-[#252b2c] p-8 rounded-lg border border-[#414a4c]">
                <h3 className="text-3xl font-bold text-[#00ffea] mb-4">Real-time Chat App</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Modern chat application dengan real-time messaging, file sharing, 
                  group chats, dan notification system menggunakan WebSocket.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">Socket.io</span>
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-[#414a4c] text-white rounded-full text-sm">JWT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto py-32 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 col-start-3">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-[#00ffea] mb-8">Let's Work Together</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Punya project menarik? Atau mau ngobrol-ngobrol tentang teknologi? 
                Hit me up! Gw selalu excited untuk kolaborasi dan bikin sesuatu yang keren.
              </p>
              <div className="flex justify-center gap-8">
                <a href="#" className="bg-[#00ffea] text-[#0e1111] px-8 py-3 rounded-lg font-bold text-lg hover:bg-white transition-colors">
                  Email Me
                </a>
                <a href="#" className="border-2 border-[#00ffea] text-[#00ffea] px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#00ffea] hover:text-[#0e1111] transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto py-16 relative z-10">
        <div className="text-center border-t border-[#414a4c] pt-8">
          <p className="text-gray-500">© 2025 rajendra. using next.js</p>
        </div>
      </div>
    </div>
  );
}
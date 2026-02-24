import Scene from "@/components/ui/banner";
import Tux from "@/components/ui/tux";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import Link from "next/link";
import GrenadeIcon from "@/components/ui/grenadeicon";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StorageIcon from '@mui/icons-material/Storage';
import KfetIcon from "@/components/ui/kfeticon";
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';

export const dynamic = 'force-dynamic';

export default async function Home() {
    return (
        <main className="relative w-full min-h-screen flex flex-col bg-white text-black overflow-x-hidden selection:bg-black selection:text-white grid-style">

            {/* Hero Section */}
            <div className="relative flex flex-col h-dvh w-full px-4 md:px-16 pt-8 pb-24 z-10">

                {/* Top Text */}
                <div className="flex-none mb-4">
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter w-full">
            <span className="block w-full text-justify leading-none" style={{ textAlignLast: "justify" }}>
              BIENVENUE CHEZ
            </span>
                    </h1>
                </div>

                {/* Center Visual */}
                <div className="flex-grow w-full relative overflow-hidden border-2 border-black bg-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group">
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <Scene />
                    </div>
                    {/* Overlay Text on Hover */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black px-3 py-1 font-mono text-sm border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        ...
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="flex-none mt-4 space-y-0">
                    <h2 className="text-2xl md:text-5xl lg:text-7xl font-medium tracking-tight w-full">
            <span className="block w-full text-justify leading-none" style={{ textAlignLast: "justify" }}>
              ASSOCIATION D&#39;INFORMATIQUE DE
            </span>
                        <span className="block w-full text-justify leading-none" style={{ textAlignLast: "justify" }}>
              L&#39;ENSAE PARIS
            </span>
                    </h2>
                </div>
            </div>

            {/* Floating Dock */}
            <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
                <div className="pointer-events-auto backdrop-blur-xl bg-white/90 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-8 py-3 flex items-center gap-8 transition-transform hover:scale-105 duration-300">
                    <Tux className="w-10 h-10 opacity-100" />
                    <div className="w-0.5 h-8 bg-black/10" />
                    <Link href="https://github.com/Tuxae" target="_blank" className="text-black/70 hover:text-black transition-colors transform hover:-translate-y-1">
                        <GitHubIcon fontSize="large" />
                    </Link>
                    <Link href="mailto:tuxae@ensae.fr" className="text-black/70 hover:text-black transition-colors transform hover:-translate-y-1">
                        <EmailSharpIcon fontSize="large" />
                    </Link>
                    <Link href="https://grenade.tuxae.fr" target="_blank" className="fill-black/70 hover:fill-[#d30b1f] transition-colors transform hover:-translate-y-1">
                        <GrenadeIcon className="w-8 h-8" />
                    </Link>
                    <Link href="https://kfet.tuxae.fr" target="_blank" className="text-black/70 hover:text-[#d30b1f] transition-colors transform hover:-translate-y-1">
                        <KfetIcon />
                    </Link>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="w-full bg-[#d30b1f] text-white py-4 overflow-hidden border-y-2 border-black">
                <div className="animate-marquee-left whitespace-nowrap flex gap-8 text-xl font-mono font-bold uppercase tracking-widest">
                    <span>Infrastructure</span>
                    <span>•</span>
                    <span>Robotique</span>
                    <span>•</span>
                    <span>Data Science</span>
                    <span>•</span>
                    <span>Développement Web</span>
                    <span>•</span>
                    <span>Deep Learning</span>
                    <span>•</span>
                    <span>Réseau</span>
                    <span>•</span>
                    <span>Infrastructure</span>
                    <span>•</span>
                    <span>Robotique</span>
                    <span>•</span>
                    <span>Data Science</span>
                    <span>•</span>
                    <span>Développement Web</span>
                    <span>•</span>
                    <span>Deep Learning</span>
                    <span>•</span>
                    <span>Réseau</span>
                </div>
            </div>

            {/* Features Grid Section */}
            <section className="w-full px-4 md:px-16 py-24 bg-white border-t-2 border-black">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1: Grenade */}
                    <div className="p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 bg-white">
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                            <GrenadeIcon className="w-8 h-8 fill-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Grenade</h3>
                        <p className="text-gray-600 mb-6">Le calendrier associatif de l&#39;ENSAE. Retrouvez tous les événements de la vie étudiante.</p>
                        <Link href="https://grenade.tuxae.fr" target="_blank" className="inline-flex items-center font-bold hover:underline group">
                            Ouvrir <ArrowOutwardIcon className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>

                    {/* Feature 2: Kfet */}
                    <div className="p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 bg-white">
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                            <KfetIcon strokeColor={"stroke-white"} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Kfet</h3>
                        <p className="text-gray-600 mb-6">L&#39;application de la Kfet de l&#39;ENSAE. Commandes, carte et gestion de compte.</p>
                        <Link href="https://kfet.tuxae.fr" target="_blank" className="inline-flex items-center font-bold hover:underline group">
                            Ouvrir <ArrowOutwardIcon className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>

                    {/* Feature 3: Unaite */}
                    <div className="p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 bg-white">
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                            <GroupsIcon fontSize="large" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Unaite</h3>
                        <p className="text-gray-600 mb-6">Tuxae fait partie d&#39;Unaite, fédération des associations d&#39;intelligence artificielle des grandes écoles françaises.</p>
                        <Link href="https://unaite.fr" target="_blank" className="inline-flex items-center font-bold hover:underline group">
                            Découvrir Unaite <ArrowOutwardIcon className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>

                    {/* Feature 4: Infrastructure */}
                    <div className="p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 bg-white">
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                            <StorageIcon fontSize="large" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Infrastructure</h3>
                        <p className="text-gray-600 mb-6">Tuxae possède plusieurs serveurs pour héberger les sites et des GPU pour les gros calculs.</p>
                        <Link href="https://komodo.tuxae.fr" className="inline-flex items-center font-bold hover:underline group">
                            Accès Membre <ArrowOutwardIcon className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>

                    {/* Feature 5: Ateliers */}
                    <div className="p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 bg-white">
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                            <SchoolIcon fontSize="large" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Ateliers</h3>
                        <p className="text-gray-600 mb-6">Organisation d&#39;ateliers : data, deep learning, code, challenges, infrastructure, développement web...</p>
                        <Link href="https://github.com/Tuxae/ateliers-data-2025-2026" className="inline-flex items-center font-bold hover:underline group">
                            Ressources <ArrowOutwardIcon className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>

                    {/* Feature 6: Github */}
                    <div className="p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 bg-white">
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                            <GitHubIcon fontSize="large" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Open Source</h3>
                        <p className="text-gray-600 mb-6">Retrouvez tous nos projets open source sur notre organisation GitHub.</p>
                        <Link href="https://github.com/Tuxae" target="_blank" className="inline-flex items-center font-bold hover:underline group">
                            Voir le GitHub <ArrowOutwardIcon className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Status Section */}
            <section className="w-full px-4 md:px-16 py-32 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/20 bg-white/5 text-sm font-mono tracking-wider">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 bg-green-500"></span>
                </span>
                        SYSTEM STATUS
                    </div>
                    <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">ALL SYSTEMS OPERATIONAL</h3>

                    {/**<div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono text-gray-500">
                     <div className="border border-white/10 p-4 bg-white/5">
                     <div className="text-xs uppercase tracking-widest mb-1">Uptime</div>
                     <div className="text-white text-lg">99.9%</div>
                     </div>
                     <div className="border border-white/10 p-4 bg-white/5">
                     <div className="text-xs uppercase tracking-widest mb-1">Members</div>
                     <div className="text-white text-lg">42+</div>
                     </div>
                     <div className="border border-white/10 p-4 bg-white/5">
                     <div className="text-xs uppercase tracking-widest mb-1">Projects</div>
                     <div className="text-white text-lg">12</div>
                     </div>
                     <div className="border border-white/10 p-4 bg-white/5">
                     <div className="text-xs uppercase tracking-widest mb-1">Coffee</div>
                     <div className="text-white text-lg">∞ L</div>
                     </div>
                     </div>**/}
                </div>
            </section>
        </main>
    );
}

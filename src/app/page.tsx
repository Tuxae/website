import Scene from "@/components/ui/banner";
import Tux from "@/components/ui/tux";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import Link from "next/link";
import GrenadeIcon from "@/components/ui/grenadeicon";


export default function Home() {
  return (
        <main className="w-full bg-white grid-style">
            <div className="absolute w-full inset-0 flex items-end justify-center pb-10">
                <div className="backdrop-blur-2xl flex flex-row gap-5 items-center justify-center pr-7 pl-4 py-2 border bg-transparent rounded-full hover:border-gray-500 group ">
                    <Tux className="w-12 h-12 transition-all duration-300 mr-0 group-hover:mr-2 opacity-50 group-hover:opacity-75 border-r border-black" />
                    <Link className="transition-all duration-300 opacity-50 hover:opacity-100" href={"https://github.com/Tuxae"}><GitHubIcon fontSize="large"/></Link>
                    <Link className="transition-all duration-300 opacity-50 hover:opacity-100" href={"mailto:tuxae@ensae.fr"}><EmailSharpIcon fontSize="large"/></Link>
                    <Link className="transition-all duration-300 opacity-50 hover:opacity-100 fill-[#d30b1f]" href={"https://grenade.tuxae.fr"}><GrenadeIcon className="w-10 h-10"/></Link>
                </div>

            </div>
            <div className="flex flex-col px-16 h-dvh">
                <div className="h-[15%] text-3xl md:text-7xl flex flex-col justify-end text-black w-full align-bottom">
                <span
                    className="inline-block align-bottom w-full"
                    style={{ textAlignLast: "justify" }}
                >
                    BIENVENUE CHEZ
                </span>
                </div>
                <div className="flex grow bg-black w-full text-white text-center text-9xl"><Scene /></div>
                <div className="h-[30%] text-2xl md:text-7xl flex flex-col justify-start text-black w-full align-bottom">
                <span
                    className="inline-block align-bottom w-full text-justify"
                    style={{ textAlignLast: "justify" }}
                >
                    ASSOCIATION D&#39;INFORMATIQUE DE<br />
                    L&#39;ENSAE PARIS
                </span>
                </div>
            </div>

        </main>
  );
}

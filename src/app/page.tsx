"use server"

import Scene from "@/components/ui/banner";
import Tux from "@/components/ui/tux";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import Link from "next/link";
import GrenadeIcon from "@/components/ui/grenadeicon";
import { KomodoClient, Types } from "komodo_client";


export default async function Home() {


    const komodo = KomodoClient("https://komodo.tuxae.fr", {
        type: "api-key",
        params: {
            key: process.env.KOMODO_API_KEY!,
            secret: process.env.KOMODO_API_SECRET!,
        },
    });

// Inferred as Types.StackListItem[]
    const stacks = await komodo.read("ListStacks", {});

  return (
        <main className="w-full flex flex-col items-center justify-center bg-white grid-style">
            <div className="absolute w-full inset-0 flex items-end justify-center pb-10">
                <div className="backdrop-blur-2xl pr-7 pl-4 py-2 border rounded-full hover:border-gray-500 group ">
                    <div className="flex flex-row gap-5 items-center justify-center">
                        <Tux className="w-12 h-12 transition-all duration-300 mr-0 group-hover:mr-2 opacity-50 group-hover:opacity-75 border-r border-black " />
                        <Link className="transition-all duration-300 opacity-50 hover:opacity-100" href={"https://github.com/Tuxae"}><GitHubIcon fontSize="large"/></Link>
                        <Link className="transition-all duration-300 opacity-50 hover:opacity-100" href={"mailto:tuxae@ensae.fr"}><EmailSharpIcon fontSize="large"/></Link>
                        <Link className="transition-all duration-300 opacity-50 hover:opacity-100 fill-[#d30b1f]" href={"https://grenade.tuxae.fr"}><GrenadeIcon className="w-10 h-10"/></Link>
                    </div>

                </div>

            </div>
            <div className="flex flex-col h-dvh w-full px-16">
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
            <div className="w-full px-16">
                <div className="w-full bg-black text-white p-10">
                    <h1 className="w-full text-3xl text-center">ALL SYSTEMS OPERATIONAL</h1>
                    <h1 className="w-full text-center">(ou pas...)</h1>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 my-10">
                        {stacks.map((s) => (
                            <div key={s.name} className="border-white border-dashed border-[0.5px] px-5 py-2 group opacity-70 hover:opacity-100 transition-all duration-300">
                                <h2 className="text-2xl">{s.name}</h2>
                                <p className="text-gray-300">{">"} {s.info.status}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </main>
  );
}

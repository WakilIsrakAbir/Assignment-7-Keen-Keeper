"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbHome, TbClock, TbChartLine } from "react-icons/tb";

const Navbar = () => {
    const pathname = usePathname();

    const links = [
        { name: "Home", path: "/", icon: TbHome },
        { name: "Timeline", path: "/Timeline", icon: TbClock },
        { name: "Stats", path: "/Stats", icon: TbChartLine },
    ];

    return(
        <div className="border-b-1">
            <div className="max-w-7xl mx-auto">
                <nav className="flex justify-between items-center py-4 px-4 lg:px-0">
                    <div className="text-lg font-bold"><span>Keen</span><span className="text-green-800">Keeper</span></div>
                    <div className="text-sm">
                        <ul className="flex gap-2">
                            {links.map((link) => {
                                const Icon = link.icon;
                                const isActive = pathname === link.path;
                                return (
                                    <li key={link.name}>
                                        <Link href={link.path} className={`flex items-center gap-2 px-3 py-2 rounded-md font-semibold cursor-pointer transition-colors ${
                                            isActive 
                                                ? "bg-[#285343] text-white" 
                                                : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                                        }`}>
                                            <Icon className="text-xl" />
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>     
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
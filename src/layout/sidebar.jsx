import {FaHeadphones, FaSearch, FaPlayCircle} from "react-icons/fa";
import {MdOutlineFavorite} from "react-icons/md";
import {BiBarChartSquare} from "react-icons/bi";

export default function Sidebar(){
    return <aside className="bg-indigo-700 py-6 w-16 md:w-60 fixed md:relative min-h-screen z-50">
        <div className="flex flex-col items-center h-12 md:h-28 gap-y-1 text-sm text-slate-200">
            <img className="w-10 md:w-16" src={"https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"}/>
            <span className="hidden md:inline-flex">Bob Smith</span>
        </div>
        <ul className="flex flex-col text-white gap-y-1">
            {sidebarLinks.map((link, index) => 
            <li key={index} 
                className="flex flex-row justify-center md:justify-start items-center text-sm py-3 pl-0 md:pl-3 gap-x-2 bg-gradient-to-r hover:from-indigo-500 cursor-pointer">
                {<link.icon className="w-5 h-5 md:w-16 text-gray-200"/>}
                <span className="hidden md:inline-flex">{link.label}</span>
            </li>)}
        </ul>
    </aside>
}

const sidebarLinks = [
    {
        icon: FaHeadphones,
        label: "Discover",
        url: ""
    },
    {
        icon: FaSearch,
        label: "Search",
        url: ""
    },
    {
        icon: FaPlayCircle,
        label: "Favourites",
        url: ""
    },
    {
        icon: MdOutlineFavorite,
        label: "Playlists",
        url: ""
    },
    {
        icon: BiBarChartSquare,
        label: "Charts",
        url: ""
    }
]
import {BiPlayCircle, BiHeart} from "react-icons/bi";
import {FiRepeat} from "react-icons/fi";
import {GiSpeakerOff} from "react-icons/gi";

export default function MusicControls(){
    return <div className="fixed right-0 w-11/12 bg-white/80 h-24 rounded bottom-0 drop-shadow-2xl flex items-center gap-x-3 p-2 pl-6">
            <div className="hidden md:inline-flex w-16 h-16 rounded bg-gray-500"/>
            <div className="hidden md:inline-flex text-base font-bold">Nothing's playing</div>
            <BiPlayCircle className="w-10 h-10"/>
            <div className="h-[1px] w-1/2 bg-gray-400 rounded"/>
            <div className="hidden md:inline-flex flex-row items-center gap-x-3">
                <BiHeart className="w-5 h-5"/>
                <FiRepeat className="w-5 h-5"/>
                <FiRepeat className="w-5 h-5"/>
                <GiSpeakerOff className="w-5 h-5"/>
            </div>
    </div>
}
import {BiArrowToLeft, BiArrowToRight} from "react-icons/bi"
export default function MusicPlaylist(props){
    return <section className="flex flex-col gap-y-2 w-3/4 md:w-11/12 ml-auto md:mx-auto">
        <div className="flex flex-row items-center justify-between md:justify-start text-sm uppercase gap-x-2">
            <div className="uppercase font-medium text-xs text-gray-400">{props.label}</div>
            <div className="hidden md:inline-flex grow h-[1px] bg-gray-300"/>
            <div className="flex flex-row text-indigo-600">
                <BiArrowToLeft fontSize={"1.4rem"}/>
                <BiArrowToRight fontSize={"1.4rem"}/>
            </div>
        </div>
        <div className="flex flex-row gap-x-3 overflow-auto scrollbar-hide">
            {props.children}
        </div>
    </section>
}
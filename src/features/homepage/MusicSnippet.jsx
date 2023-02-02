export default function MusicSnippet({
    image, 
    title
}){
    return <div className="bg-white text-xs shrink-0 w-60 md:w-20">
        <img src={image} className="w-full h-60 md:h-20 mb-1 rounded"/>
        <div>{title}</div>
    </div>
}
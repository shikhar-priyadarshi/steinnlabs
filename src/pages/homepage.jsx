import {MusicControls, MusicSnippet, MusicPlayList} from "../features/homepage"
import useHomepage from "../services/useHomepage";

export default function Homepage(){
    const { newReleases, featuredPlaylist, browseCategories } = useHomepage();
    
    return <>
        <div className="flex flex-col py-4 gap-6 overflow-y-auto">
            <MusicPlayList label={"released this week"}>
                {newReleases.data?.map((newRelease, index) => 
                <MusicSnippet key={index} image={newRelease.images?.[0]?.url} title={newRelease.name}/>)}
            </MusicPlayList>
            <MusicPlayList label={"featured playlist"}>
                {featuredPlaylist.data?.map((newRelease, index) => 
                <MusicSnippet key={index} image={newRelease.images?.[0]?.url} title={newRelease.name}/>)}
            </MusicPlayList>
            <MusicPlayList label="browse">
                {browseCategories.data?.map((newRelease, index) => 
                <MusicSnippet key={index} image={newRelease.icons?.[0]?.url} title={newRelease.name}/>)}
            </MusicPlayList>
            <br/>
            <br/>
        </div>
        <MusicControls/>
    </>
}
import {useEffect, useState} from "react";

const fetchNewReleases = async () => {
    return await (await fetch(`${import.meta.env.VITE_SPOTIFY_ENDPOINT}/browse/new-releases`, {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }})).json();
}

const fetchFeaturedPlaylist = async() => {
    return await (await fetch(`${import.meta.env.VITE_SPOTIFY_ENDPOINT}/browse/featured-playlists`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }})).json();
}

const fetchBrowseCategories = async() => {
    return await (await fetch(`${import.meta.env.VITE_SPOTIFY_ENDPOINT}/browse/categories`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }})).json();
}

export default function useHomepage(){
    const [newReleases, setNewReleases] = useState({
        data: [],
        isLoading: false
    });
    const [featuredPlaylist, setFeaturedPlaylist] = useState({
        data: [],
        isLoading: false
    });
    const [browseCategories, setBrowseCategories] = useState({
        data: [],
        isLoading: false
    });

    useEffect(() => {
        fetchAllData();
    },[])

    const fetchAllData = async () => {
        try{
            setNewReleases({...newReleases, isLoading: true});
            setFeaturedPlaylist({...featuredPlaylist, isLoading: true});
            setBrowseCategories({...browseCategories, isLoading: true});            
            const [newReleasesData, featuredPlaylistData, browseCategoriesData] = await Promise.allSettled([ 
                fetchNewReleases(),
                fetchFeaturedPlaylist(),
                fetchBrowseCategories()
            ])

            if(newReleasesData.status == "fulfilled"){
                setNewReleases({
                    ...newReleases,
                    isLoading: false,
                    data: newReleasesData.value.albums.items
                })
            }

            if(featuredPlaylistData.status == "fulfilled"){
                setFeaturedPlaylist({
                    ...featuredPlaylist,
                    isLoading: false,
                    data: featuredPlaylistData.value.playlists.items
                })
            }

            if(browseCategoriesData.status == "fulfilled"){
                setBrowseCategories({
                    ...browseCategoriesData,
                    isLoading: false,
                    data: browseCategoriesData.value.categories.items
                })
            }
        }
        catch(error){
            console.log(error);
        }

    }

    return {
        newReleases,
        featuredPlaylist,
        browseCategories
    }
}
import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI=import.meta.env.VITE_REDIRECT_URI;
const RESPONSE_TYPE=import.meta.env.VITE_RESPONSE_TYPE;


export default function LoginPage(){
    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash
        console.log(hash);
        let token = localStorage.getItem("token")
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = ""
            localStorage.setItem("token", token)
        }
        navigate(token ? `/dashboard/spotify`: "/")
    }, [])

    return <div className="h-screen w-full grid place-items-center">
            <button className="text-white bg-green-400 rounded py-2 px-4">
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                    Login with Spotify Account
                </a>
            </button>
    </div>
}
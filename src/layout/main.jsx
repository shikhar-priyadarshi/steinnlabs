import {Outlet} from "react-router-dom"
import Header from "./header";
import Sidebar from "./sidebar";
export default function MainLayout(){
    return <div className="flex flex-row min-h-screen">
        <Sidebar/>
        <div className="w-full overflow-hidden">
            <Header/>
            <Outlet/>
        </div>
    </div>
}
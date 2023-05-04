import '../index.css'
import {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Contacts from './contacts'
import Charts from './charts'
import Cross from '../assets/icons/cross.svg';
import MenuBurger from '../assets/icons/menu-burger.svg'


export default function Main(){

    const [sideBar,setSideBar] = useState(false)
    const sideNavRef = useRef(null);
    const [currentTab,setCurrentTab] = useState("contacts")
    const [menu,setMenu] = useState(true)
    

    useEffect(() => {
    // Add event listener to the document object
      document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when the component unmounts
      return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    }, []);
     

    function handleClickOutside(event) {
        if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
            setMenu(false)
        }
    }

    function onTabSelect(index){
        setCurrentTab(index)
        setMenu(false)
    }

    function hidemenu(){
        setMenu(!menu)
    }


	return(
		   <div className="h-screen flex p-2">
           <div ref={sideNavRef}  className={` ${menu ?"duration-500 -left-0" :"-left-[1000px] duration-500 lg:block"} absolute w-80 lg:static h-full lg:w-3/12  z-10`}>
            <div className="h-full border w-full shadow shadow-lg bg-gray-700 text-white rounded-2xl">
                 <div className="mx-5 h-20 items-center flex border-b justify-between">
                     <h1 className="p-4 text-xl font-bold">User Dashboard</h1>
                     <button onClick={hidemenu} className="lg:hidden"><img src={Cross} className="h-4 invert"/></button>
                 </div>
                 <div className="mx-5 mt-5">
                     <ul>
                       <li onClick={()=>onTabSelect("contacts")} className={`${currentTab === "contacts" ? "bg-white text-gray-500":""} cursor-pointer p-4 rounded-lg h-14 flex items-center text-md`}>Contact</li>
                       <li onClick={()=>onTabSelect("charts")} className={`${currentTab === "charts" ? "bg-white text-gray-500":""} cursor-pointer p-4 rounded-lg h-14 flex items-center text-md`}>Chart</li>
	                     </ul>
                    {/*<div className="p-2"><button onClick={logOut} className="cursor-pointer bg-red-400 px-2 py-1 rounded text-white">Sign out</button></div>*/}
                 </div>
                 
            </div>
            </div>
            <div className="w-full lg:w-9/12 overflow-y-scroll gap-10 px-4 py-1">
                 <div className="h-20 border flex justify-between px-10 items-center bg-white">
                    <div>
                        {/*<h1 className="font-bold">Hello,&nbsp;{info.username}</h1>*/}
                    </div>
                    <div>
                        <ul className="flex gap-3 items-center">
                          <li className="lg:hidden"><img src={MenuBurger} onClick={()=>setMenu(!menu)} className="w-6 cursor-pointer"/></li> 
                        </ul>
                    </div>
                </div>
                 <div className="mt-5">
                   {
                      currentTab === "contacts"? <Contacts/>: 
                      currentTab === "charts"? <Charts />:
                      <div>Nothing Here</div>
                   }
                </div>
                 
            </div>
        </div>   
		)
}
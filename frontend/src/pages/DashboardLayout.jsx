import React ,{useState, createContext, useContext}from 'react'
import { Outlet } from 'react-router-dom'
import { BigSideBar, SmallSideBar,Navbar} from '../components'
import Wrapper from '../assets/wrappers/Dashboard'
import AllMain from '../pages/allMain'
const dashboardContext =createContext();
export const useDashboardContext=()=>useContext( dashboardContext );

const DashboardLayout = () => {
  
  const user={name:'علاء الشيخ'};
    const [showSidebar, setShowSidebar] = useState(false);



const toggleSideBar = () => {
  console.log('before toggle:', showSidebar);
  setShowSidebar(!showSidebar);
  console.log('after toggle :', !showSidebar);
};


  const logoutUser=async()=>{
   console.log('user logedOut')
  }
  return (
    <dashboardContext.Provider value={{
      user,
      showSidebar,
      toggleSideBar,
      logoutUser

    }}>
    <Wrapper>
      <main className='dashboard'>
        <BigSideBar/>
        <SmallSideBar/>
        <div>
          <Navbar/>
          <div className='dashboard-page'>
            <Outlet/>
             <AllMain/>

          </div>
        </div>
      </main>
    </Wrapper>
    </dashboardContext.Provider>
  )
}

export default DashboardLayout



import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {NavBar, SideBar} from './components';
import { Campaign, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <SideBar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <NavBar />

        <Routes>
          <Route path="thirdweb-app/" element={<Home />} />
          <Route path="thirdweb-app/profile" element={<Profile />} />
          <Route path="thirdweb-app/create-campaign" element={<CreateCampaign />} />
          <Route path="thirdweb-app/campaign/:id" element={<Campaign />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
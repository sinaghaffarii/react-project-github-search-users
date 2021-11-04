import React from 'react'
import {Navbar, Search, Info, User, Repos} from '../Components'

const Dashboard = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* <Search/> */}
      <Info/>
      <User/>
      <Repos/>
    </div>
  )
}

export default Dashboard;

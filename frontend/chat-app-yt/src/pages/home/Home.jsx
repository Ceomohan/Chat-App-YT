import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className="flex  sm:h-[450px] md:h-[550px] bg-gray-400 overflow-hidden rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-0 bg-clip-padding">
      <SideBar />
    {/* Message container */}
    <MessageContainer />
    </div>
  )
}

export default Home
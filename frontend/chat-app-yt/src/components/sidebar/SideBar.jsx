import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const SideBar = () => {
  return (
    <div className="border-r border-slate-600 p-4 flex flex-col">
        {/* searchinput */}
        <SearchInput />
        <div className="divider px-3 "></div>
        {/* conversation */}
        < Conversations />
        {/* logout Button */}
        <LogoutButton />
        
    </div>
  )
}

export default SideBar




//STARTER CODE SNIPPET
// const SideBar = () => {
//   return (
//     <div className="border-r border-slate-600 p-4 flex flex-col">
//         {/* searchinput */}
//         <SearchInput />
//         <div className="divider px-3 "></div>
//         {/* conversation */}
//         < Conversations />
//         {/* logout Button */}
//         <LogoutButton />
        
//     </div>
//   )
// }

// export default SideBar
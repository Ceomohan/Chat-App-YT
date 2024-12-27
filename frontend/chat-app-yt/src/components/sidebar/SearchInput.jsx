import React, { useState } from 'react'
import {IoSearchSharp} from "react-icons/io5"
import useConversation from '../../zustand/useConversation'
import useGetConversation from '../../hooks/useGetConversation'
import toast from 'react-hot-toast'


const SearchInput = () => {

    const [search,setSearch] = useState("")
    const {setSelectedConversation} = useConversation()
    const {conversations} = useGetConversation()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!search) return
        if(search.length < 3){
            toast.error("The search must contain minimum 3 characters")
        }
        const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
        
        if(conversation){
            setSelectedConversation(conversation)
            setSearch("")
        }else {
            toast.error("No search Input")
        }
    }

    return (
       
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input type="text" placeholder="Search..." className="input input-bordered rounded-full" 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />
                <button className="btn btn-circle bg-sky-600 text-white" type="submit">
                    <IoSearchSharp className="w-6 h-6 outline-none" />
                </button>
            </form>
       
    )
}

export default SearchInput


// STARTER CODE SNIPPET
// import React from 'react'
// import {IoSearchSharp} from "react-icons/io5"

// const SearchInput = () => {
//     return (
//         <div>
//             <form className="flex items-center gap-2">
//                 <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
//                 <button className="btn btn-circle bg-sky-600 text-white" type="submit">
//                     <IoSearchSharp className="w-6 h-6 outline-none" />
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default SearchInput
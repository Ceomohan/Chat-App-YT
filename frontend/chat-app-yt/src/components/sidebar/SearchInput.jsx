import React from 'react'
import {IoSearchSharp} from "react-icons/io5"

const SearchInput = () => {
    return (
       
            <form className="flex items-center gap-2">
                <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
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
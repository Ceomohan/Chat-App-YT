import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'

const MessageContainer = () => {

    const {selectedConversation,setSelectedConversation} = useConversation()

    useEffect(()=>{
        // cleanup function (unmounts)
        return ()=> setSelectedConversation(null)
    },[setSelectedConversation])
    
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {
                !selectedConversation ? (
                    <NoChatSelected />
                ) : (
                    <>
                        <div className="bg-slate-600 px-4 py-2 mb-2">
                            <span className="label-text">To:</span><span className="text-pink-500 font-bold">{selectedConversation.fullName}</span>
                        </div>
                        {/* Messages */}
                        <Messages />
                        {/* MessageInput */}
                        <MessageInput />
                    </>
                )
            }
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2 ">
                <p>Welcome joe select a chat </p>
                <p>To send a Message</p>
                <TiMessages className="text-center text-3xl md:text-6xl " />
            </div>
        </div>
    )
}



// STARTER CODE SNIPPET
// const MessageContainer = () => {

//     const noChatSelected = true
//     return (
//         <div className="md:min-w-[450px] flex flex-col">
//             {
//                 noChatSelected ? (
//                     <NoChatSelected />
//                 ) : (
//                     <>
//                         <div className="bg-slate-600 px-4 py-2 mb-2">
//                             <span className="label-text">To:</span><span className="text-pink-500 font-bold">Thayal</span>
//                         </div>
//                         {/* Messages */}
//                         <Messages />
//                         {/* MessageInput */}
//                         <MessageInput />
//                     </>
//                 )
//             }
//         </div>
//     )
// }

// export default MessageContainer

import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'
const Message = ({ message }) => {

    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()
    const fromMe = message.senderId === authUser._id
    const formattedTime = extractTime(message.createdAt)
    const chatClassName = fromMe ? "chat-end" : "chat-start"
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
    const bubbleBgColor = fromMe ? "bg-sky-500" : ""


    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        src={profilePic}
                        alt="chat image"
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} `}>{message.message} </div>
            <div className="chat-footer text-xs opacity-50 flex gap-1 items-center">{formattedTime}</div>
        </div>
    )
}

export default Message


// STARTER CODE SNIPPET
// import React from 'react'

// const Message = () => {
//     return (
//         <div className="chat chat-end">
//             <div className="chat-image avatar">
//                 <div className="w-10 rounded-full">
//                     <img
//                         src={""}
//                         alt="chat image"
//                     />
//                 </div>
//             </div>
//             <div className={`chat-bubble text-white bg-sky-400 `}>I Love you </div>
//             <div className="chat-footer text-xs opacity-50 flex gap-1 items-center">12:45</div>
//         </div>
//     )
// }

// export default Message
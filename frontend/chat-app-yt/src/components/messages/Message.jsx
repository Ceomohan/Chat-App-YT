import React from 'react'

const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        src={""}
                        alt="chat image"
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-sky-400 `}>I Love you </div>
            <div className="chat-footer text-xs opacity-50 flex gap-1 items-center">12:45</div>
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
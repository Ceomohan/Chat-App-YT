import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({ conversation, emoji, lastIdx }) => {

    const { selectedConversation, setSelectedConversation } = useConversation()
    const isSelected = selectedConversation?._id === conversation._id

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500  rounded p-1 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""} `}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img
                            src={conversation.profilePic}
                            alt="user Image"
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="text-gray-400 font-bold">{conversation.fullName}</p>
                        <span className="text-xl">{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className="divider my-0 p-0 h-1 " />}
        </>
    )
}

export default Conversation



// STARTER CODE SNIPPET
// import React from 'react'

// const Conversation = () => {
//     return (
//         <>
//             <div className="flex  items-center hover:bg-sky-500 gap-2 rounded p-1 py-3 cursor-pointer">
//                 <div className="avatar online">
//                     <div className="w-12 rounded-full">
//                         <img
//                             src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Davatar&psig=AOvVaw2m4IJu6aIfAv0H1s2zBfy6&ust=1733841297696000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJCF4JH1mooDFQAAAAAdAAAAABAE"
//                             alt="user Image"
//                         />
//                     </div>
//                 </div>
//                 <div className="flex flex-col flex-1">
//                     <div className="flex gap-3 justify-between">
//                         <p className="text-gray-400 font-bold">Jhon Cena</p>
//                         <span className="text-xl">💀</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="divider my-0 p-0 h-1 "/>
//         </>
//     )
// }

// export default Conversation
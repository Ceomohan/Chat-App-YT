import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis'

const Conversations = () => {
  const { loading, conversations } = useGetConversation()
  
  return (
    
      <div className="py-2 flex flex-col overflow-auto">

        {conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))}


        {loading ? <span className="loading loading-spinner"></span>:null }
      </div>
    
  )
}

export default Conversations


//STARTER CODE SNIPPET
// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   )
// }

// export default Conversations
import React from 'react'
import "./EmojiButton.css";
const EmojiButton = ({emoji,setEmoji}) => {
  return (
    <div className='emojis' onClick={()=>
    {
        setEmoji(emoji);
    }
    }>
      {emoji}
    </div>
  )
}

export default EmojiButton

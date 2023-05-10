import { Card, CardContent, Typography } from '@material-ui/core'
import './Massage.css'
import React, { forwardRef } from 'react'

const Message = forwardRef(({ message, username }, ref) => {

  const isUser = username === message.username;

  return (

    <div ref={ref} className={`massage ${isUser && 'message__user'}`}>
      <Card className={isUser ? "massage__useCard" : "message__guestCard"}>
        <CardContent>
          <Typography
            color='white'
            variant='h5'
            component="h2"
          >{!isUser && `${message.username || 'Unknown User'}: `} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
})

export default Message
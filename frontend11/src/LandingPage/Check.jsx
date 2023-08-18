import React from 'react'
import {useEffect} from 'react'
import io from "socket.io-client"
const Check = () => {
const socket = io('http://localhost:5000')
console.log(socket);


useEffect(() => {
  socket.on("Connected",(data)=>{
    console.log(data)
  })
  socket.on("shi",(data)=>{
    console.log(data,"shi")
  })
  return () => socket.off("Connected")
}, [])

const handleClick=()=>{
    socket.emit("notify",{
        name:"Shivam",
        eventName:"Fairy",
        request:"Approve this event"
    })
}
  return (
    <>
    <div>Check</div>
    <button onClick={handleClick} type="button">Join Event</button>
    </>
  )
}

export default Check
import React from 'react'
import {useEffect} from 'react'
import io from "socket.io-client"
const New = () => {
    const socket = io('http://localhost:5000')
console.log(socket);

useEffect(() => {
  socket.on("Connected",(data)=>{
    console.log(data)
  })
  socket.on("show",(data)=>{
    console.log(data)
  })
  return () => { 
    socket.off("Connected")
    socket.off("show")
  }
}, [])
  return (
    <div>New</div>
  )
}

export default New;
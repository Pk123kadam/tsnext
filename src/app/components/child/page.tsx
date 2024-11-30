"use client"
import React, { ReactNode } from 'react'
import { useState } from 'react'
type Props = {
    inc?: number,
    setInc : React.Dispatch<React.SetStateAction<number>>,
    children : ReactNode,
    data:string,
    numbers:number
}

const ChildComponent = ({
    setInc ,
    inc,
    children,
    ...props
}: Props) => {
    console.log('props', props)
    const ab = (a : string,...b:any) : void=>{
console.log('b', b)
    }
    ab("pk",1,true)
  return (
    <div>
              <button onClick={()=> setInc(prev=>prev+= 1)}>{children}</button>   
    </div>
  )
}

export default ChildComponent
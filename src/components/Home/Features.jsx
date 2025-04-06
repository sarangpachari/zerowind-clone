import React from 'react'
import Relife from './features/Relife'
import Zwr from './features/Zwr'

function Features() {
  return (
    <>
     <div className="w-full flex flex-col justify-center items-center gap-8 px-12 mt-5">
      <div className="flex gap-8 w-full justify-evenly items-center">
      <Relife/>
     <Zwr/>    
      </div>
    </div>
    </>
  )
}

export default Features
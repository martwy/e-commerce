import React, { useState } from 'react'
import { Game as GameType} from '../utils/Game'

export default function Game({name, released, background_image, metacritic}:GameType) {
    const [showInfo, setShowInfo] = useState(false)
  return (
    <div className='flex flex-col text-sm text-white'>
        <div className='bg-gray-800 rounded-md' onMouseOver={() => setShowInfo(true)} onMouseOut={() => setShowInfo(false)}>
        <span><img className='object-scale-fill h-48 w-80 rounded-lg' src={background_image} /></span>
        <div className='flex flex-col ml-2 mt-1 pb-2'>
        <span className='text-xl'>{name}</span>
        {showInfo &&(
            <>
        <span>Released date: {released}</span>
        <span className='pb-2'>Metacritic: {metacritic}</span>
        </>
        )
    }
        </div>
        </div>
    </div>
  )
}

import React, { useEffect,useState } from 'react'

import { useFlag } from '../hooks/useFlag'
import Axios from 'axios'

export const Flag = ({ countryFlag }) => {
  
   
    const [countryFlagimg, countryFlagAlt] = useFlag(countryFlag)
    console.log('countryFlagimg:', countryFlagimg," countryFlagAlt", countryFlagAlt)
    return (
        <div>
            <img src={countryFlagimg|| countryFlagAlt}  />
        </div>
    )
}

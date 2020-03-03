import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export const useFlag = (country) => {

  const [countryFlagAlt, setCountryFlagAlt] = useState("")
  useEffect(() => {
    Axios.get(`https://pixabay.com/api/?key=14218850-657ec90f61321ccb7cbf65a74&q=${country}+flag&image_type=photo`)
      .then(res => setCountryFlagAlt(res.data.hits[0].largeImageURL))
      .then(res => console.log('countryFlagAlt:', res.data.hits[0].largeImageURL))
      .catch(err => console.error(err))
  }, [])

  const [flag, setFlag] = useState('')
  useEffect(() => {
    Axios.get(
      `https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
      .then(response => setFlag(response.data['0'].flag))

      .catch(error => console.error(error))

  }, [])

  return [flag, countryFlagAlt]
}

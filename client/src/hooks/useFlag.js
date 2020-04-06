import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export const useFlag = (country) => {

  const [countryFlagAlt, setCountryFlagAlt] = useState("")
  useEffect(() => {
    Axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAYKEY_}&q=${country}+flag&image_type=photo`)
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
// the pixabay api key is stored in an environment variable either on an express backend , 
// in a .env file that is listed in the .gitignore file to keep it from pushing to production or
//  on the server wherever you host the app ie netlify heroku aws etc
// process.env.REACT_APP_ALLCAPS_KEYNAME is standard syntax relevant to CreateReactApp. Gotta use this for it to pickup the key.

//file on root of client at package.json level 
//file name : .env
//REACT_APP_PIXABAYKEY_="###########################"
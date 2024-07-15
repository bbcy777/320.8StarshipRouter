import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Ship = () => {
  const [starship, setStatship] = useState([])
  const params = useParams()
  console.log(params);
  async function getStarship() {
    try{
        let data = await axios.get(`https://swapi.dev/api/starships/${params.id}/`)
        let Starship = data.data
        console.log(Starship);
        setStatship(Starship)
    } catch (err) {
        console.error(err)
    }
  }

  useEffect(()=>{getStarship()}, [])


  return (
    <div>
        <h2>{starship.name}</h2>
        {Object.entries(starship).map(([key, value]) => (
            <h4 key={key}>{key}: {value}</h4>
        ))}
   
    </div>
  )
}

export default Ship
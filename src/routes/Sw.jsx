import {useState, useEffect} from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Sw = () => {
    const [starship, setStarship] = useState([])
  
    async function getAllStarships() {
      try {
        let data = await axios.get('https://swapi.dev/api/starships')
        let allStarship = data.data.results
        console.log(allStarship)
        setStarship(allStarship)
      } catch (err) {
        console.error(err.message)
      }
    }
  
    useEffect( ()=> {getAllStarships()},[])
  return (
    <div>
        <h3>STAR WARS STARSHIPS</h3>
        <div className='content'>
          {starship.map((el)=> {
            const id = el.url.split('/').filter(Boolean).pop()
            return (
            <Card key={id} id={id} name={el.name} />)
            })} 
        </div>
    </div>
  )
}

export default Sw
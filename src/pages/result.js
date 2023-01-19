import axios from "axios";
import { useEffect, useState } from "react"


function Result(){
    
    let[beer, setBeer] = useState([]);

    let fetchBeers = () => {
        axios.get('https://api.punkapi.com/v2/beers').then(response =>{
            setBeer(response.data)
        })
    }

    useEffect(() => fetchBeers(), [])

    return(
        <div className="flex reuslt">
            <div>
                <article>
                <h2>{beer.name}</h2>
                <img width={500} src={beer.image_url}/>
                <p>{beer.description}</p>
                </article>
            </div>
        </div>
    )
}

export default Result
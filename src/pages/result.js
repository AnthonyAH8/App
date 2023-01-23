import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



function Result() {

    let params = useParams();
    let [beer, setBeer] = useState([]);

    let fetchBeers = () => {
        axios.get('https://api.punkapi.com/v2/beers').then(response => {


            let beers = response.data
            let beer = beers.find(beer => beer.id == params.id)

            setBeer(beer)
        })
    }

    useEffect(() => fetchBeers(), [])

    return (
        <div className="flex result">
            <div>
                <article>
                    <div className="presentation">
                        <img width={50} src={beer.image_url} />
                        <div>
                        <h2>{beer.name}</h2>
                        <p className="description">{beer.description}</p>
                        </div>
                    </div>
                    <p>Alc <span>{beer.abv}</span></p>

                    <div className="association">
                    <span>Food pairing </span>
                    <ul>
                        {beer.food_pairing?.map((i, index) =>
                        <li key={index}>{i}</li>)} 
                    </ul>
                    <div className="ebc"></div>
                    </div>
                    <p><span>Ibu</span> {beer.ibu}</p>
                    <p><span>Ebc</span> {beer.ebc}</p>
                    <button>Commander</button>
                </article>
            </div>
        </div>
    )
}

export default Result
    import { useEffect, useState } from "react";
    import axios from 'axios';
    import { Link } from "react-router-dom";

    function Beer() {

        let [beers, setBeer] = useState([])

        let fetchBeers = () => {
            axios.get('https://api.punkapi.com/v2/beers').then(response => {
                setBeer(response.data)
            })
        }
        useEffect(() => fetchBeers(), [])
        return (
            <div className="container">
                <input type='text' placeholder="Hoppy, Malt, Angry, New..."></input>
                <button disabled type='button'>Recherche</button>

                <div className="flex list">
                    {beers.map(beer =>
                        <article key={beer.id}>
                            <h2>{beer.name}</h2>
                            <img src={beer.image_url} alt='choice' />
                            <Link to={`/result/${beer.id}`}>
                                <button type="button">
                                    Voir
                                </button>
                            </Link>
                        </article>
                    )}
                </div>
            </div>
        )
    }

    export default Beer
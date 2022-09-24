import React,{useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

// import Pokesapi from './Pokesapi';

const SinglePoke = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const [poke, setPoke] = useState({});
    const [sprites, setSprites] =useState({});
    const [species, setSpecies] = useState({});
    // const [abilities, setAbilities] = useState([0]);
    // const [ability, setAbility] = useState({});
    console.log(poke);
    useEffect(()=>{
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const fetchData = async () =>{
            const res = await fetch(url);
            const data = await res.json();
            const sprites=await data.sprites;
            const species = await data.species;
            // const abilities = await data.abilities;
            // const ability = await data.ability;
            setPoke(data);
            setSprites(sprites);            
            setSpecies(species);
            // setAbilities(abilities);
            // setAbility(ability);
        }
        fetchData();
    }, []);
  return (
    <>    
       <div className="row">
        <div className="container1 col-5"><img src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} className="singlepic border col-4 justify-content-start" alt="pokemon" style={{height:"350px", width:"400px"}}/></div>
        <div className="container2 col-7">
        <h1 className=' mainheading text-uppercase'>{poke.name}</h1>
        <p className="mainhead"><strong>Id : </strong>{poke.id}</p>
        <p className="mainhead"><strong>order : </strong>{poke.order}</p>
        <p className="mainhead"><strong>height : </strong>{poke.height}</p>
        <p className="mainhead"><strong>Weight : </strong>{poke.weight}</p>
        <p className="mainhead"><strong>Species : </strong>{species.name}</p> 
        {/* <p><strong>Ability : </strong>{abilities.ability.name}</p> */}
        <p className="mainhead"><strong>Experience : </strong>{poke.base_experience}</p>
        <p className="mainhead"><strong>Location : </strong>{poke.location_area_encounters}</p>
        <p className="mainhead"><strong> Back Default : </strong>{sprites.back_default}</p>
        </div>
        <div className="container3">
          <button onClick={()=>navigate('/')} className='btn btn-primary'>Go Back</button>
        </div>
        </div>
    </>
  )
}

export default SinglePoke

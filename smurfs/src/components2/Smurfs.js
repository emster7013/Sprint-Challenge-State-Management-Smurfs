import React, {useContext} from 'react';
import axios from 'axios';
import {SmurfsContext} from '../context/SmurfsContext';

const Smurfs = ({smurf}) => {
    const {addSmurf, setAddSmurf} = useContext(SmurfsContext)
    const handleDelete = id =>{
        axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res =>setAddSmurf(addSmurf.filter(item=> item.id !==id)))
    };
    return(
        <div>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <button onClick={()=> handleDelete(smurf.id)}>Delete</button>
        </div>
    )
}
export default Smurfs;
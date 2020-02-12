import React, {useContext} from 'react';
import {SmurfsContext} from '../context/SmurfsContext';
import Smurfs from './Smurfs';

const SmurfList = () =>{
    const {addSmurf} = useContext(SmurfsContext);

    return(
        <div>
            {addSmurf.map(item =>{
                return <Smurfs key={item.id} smurf={item}/>;
            })}
        </div>
    );
};

export default SmurfList;
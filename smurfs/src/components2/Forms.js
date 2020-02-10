import React, {useState, useContext} from 'react';
import axios from 'axios';
import {SmurfsContext} from '../context/SmurfsContext';

const Forms = () =>{
    const {addSmurf, setAddSmurf} = useContext(SmurfsContext)
    const [postForm, setPostForm] = useState({
        name: '',
        age: '',
        height: ''
    });
    const handleChange = (e) => {
        e.preventDefault();
        setPostForm({...postForm, [e.target.name]: e.target.value})
    }
    const handleSubmit=(e) =>{
        e.preventDefault();
        axios.post('http://localhost:3333/smurfs', postForm)
        .then(res =>{
            setPostForm({
                name: '',
                age: '',
                height: ''
            })
            setAddSmurf([...addSmurf, res.data])
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='name'
            placeholder='name'
            value={postForm.name}
            onChange={handleChange}
            /><br/>

            <input 
            type='text'
            name='age'
            placeholder='age'
            value={postForm.age}
            onChange={handleChange}
            />
            <br/>

            <input 
            type='text'
            name='height'
            placeholder='height'
            value={postForm.height}
            onChange={handleChange}
            />
            <br/>
            <button type='submit'>Submit</button>
        </form>
    )
};

 export default Forms;
import React, {useState,useEffect} from 'react'; 
import {Button, Checkbox , Form} from 'semantic-ui-react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';


export default function Update() {
    let history = useNavigate();
    const [firstName,setFirstName]= useState('');
    const [lastName,setLastName] = useState('');
    const [checkbox,setCheckbox] = useState(false);
    
    const [id, setID] = useState(null);
    useEffect(()=> {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
        
    },[]);

    const updateAPIData = async () => {
        
        await axios.put(`https://6474b7b67de100807b1b9da2.mockapi.io/api/v1/FakeData/${id}`,{
        firstName,
        lastName,
        checkbox
    })

   
    // .then(()=> {
    //     history.push('/read')
    // })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e)=>setCheckbox(!checkbox)} />
                </Form.Field>
                <Link to="/read"><Button type='submit' onClick={updateAPIData}>Update</Button>
                
                </Link>
            </Form>
        </div>
    )
}
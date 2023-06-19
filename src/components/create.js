// import React from 'react';
// import { useState } from 'react';
// import {Button, Checkbox, Form} from 'semantic-ui-react';
// import { useNavigate,Link } from 'react-router-dom';

// import axios from 'axios';
// import Loader from './Loader';
// export default function Create() {
//     const [firstName,setFirstName]= useState('');
//     const [lastName,setLastName]= useState('');
//     const [checkbox,setCheckbox]= useState(false);
//     let history = useNavigate();

//     const postData=()=>{
//         axios.post(`https://6474b7b67de100807b1b9da2.mockapi.io/api/v1/FakeData`,
//         {
//         firstName,
//         lastName,
//         checkbox
//     })
//     // .then(()=> {
//     //     history.push('/read')
//     // })
//     };
//     return (
//     <Form className="create-form">
//         <Form.Field>
//             <label>First Name</label>
//             <input 
//             placeholder='FirstName'
//             onChange={(e) => setFirstName(e.target.value)}
//             />
//         </Form.Field>
//         <Form.Field>
//             <label>Last Name</label>
//             <input 
//             placeholder='LastName'
//             onChange={(e)=> setLastName(e.target.value)}
//              />
//         </Form.Field>
//         <Form.Field>
//             <Checkbox 
//             label='I agree to the Terms and Conditions'
//             onChange={(e)=> setCheckbox(!checkbox)} 
//             />
//         </Form.Field>
//         <Link to="/read">
//         <Button 
//         type='submit'
//         onClick={postData}
        
//         >
//             Submit
//         </Button>
        
//         </Link>

//     </Form>
//     )
// }


import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

export default function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = () => {
    setLoading(true);

    axios
      .post('https://6474b7b67de100807b1b9da2.mockapi.io/api/v1/FakeData', {
        firstName,
        lastName,
        checkbox
      })
      .then(() => {
        setLoading(false);
        navigate('/read');
      });
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="FirstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="LastName"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
      {loading && <Loader />}
    </Form>
  );
}

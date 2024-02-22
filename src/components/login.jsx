import {useState} from 'react';
import Input from './input';
import {login} from '../services/loginService';

function Login(){
    const [requestObj,setRequestObj] = useState({});
    const handleChange = ({ currentTarget: input }) => {
        const response = { ...requestObj };
        response[input.id] = input.value;
        setRequestObj(response);
      };

      const handleSubmit = async() =>{
        try{
            const {data : jwt} = await login(requestObj);
            localStorage.setItem("token", jwt);
            window.location = "/";
        }
        catch(ex){
            console.log("Error", ex);
        }
    }

    const renderInput = (name, label, type = "text") => {
       
        return (
          <Input
            type={type}
            name={name}
            label={label}
            value={requestObj[name]}
            onChange={handleChange}
            //error={errors[name]}
          />
        );
      };
      const renderButton = (label) => {
        return (
          <button
            type="submit"
            className="btn btn-primary"
            style={{ float: "right", width: "10%" }}
            onClick={handleSubmit}
          >
            {label}
          </button>
        );
      };

    return(
        <>
           {renderInput('email', 'Email')}
            {renderInput('password', 'Password','password')}
            <hr/>
            {renderButton("Submit")}
        </>
    )
}

export default Login;
import {useState} from 'react';
import {getBooks} from "../services/bookService"
import Input from './input';


function Main(){

    const [requestObj,setRequestObj] = useState({});
    const [result,setResult] = useState([])
 
    const handleChange = ({ currentTarget: input }) => {
        const response = { ...requestObj };
        response[input.id] = input.value;
        setRequestObj(response);
      };

    const handleSubmit = async() =>{
        try{
            const response = await getBooks(requestObj);
            if(response){
                let data = [...response.data.data]
                setResult(data)
            }
        }
        catch(ex){
            console.log("error",ex)
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
      
                {renderInput('title', 'Title')}
                {renderInput('author', 'Author')}
                {renderInput('genre', 'Genre')}
                {renderInput('pageNo', 'Page Number')}
                {renderInput('pageSize', 'Page Size')}
                <br/>
                {renderInput('publishedDateFrom', 'Published Date From:', 'date')}
                {renderInput('publishedDateTo', 'Published Date To:', 'date')}
               <hr/>
                {renderButton("Submit")}
                {result.length > 0 && <table className="table">  
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                     {result.map((row)=>(
                        <tr>
                        <td>{row.title}</td>
                        <td>{row.description}</td>
                        <td>{row.author}</td>
                        </tr>
                     )
                 
                      
                            
                 )}
                    
                </tbody>
                    </table>
                }

        </>
    )
}

export default Main;
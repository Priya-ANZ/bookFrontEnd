import http from "./httpService";

const apiEndpoint = "http://localhost:5000/book?";

export async function getBooks(reqObj) {

  try{
    let params = ''
    for (let key in reqObj) {
       params = `${params}${key}=${reqObj[key]}&`
      }
      params = params.slice(0, -1); 
   let endPoint = `${apiEndpoint}${params}`;
   const res =  await http.get(endPoint);
   return res;
  }
  catch(ex){
    console.log(ex)
  }
    
   
}

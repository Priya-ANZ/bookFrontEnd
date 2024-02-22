const Input = ({ name, label, ...rest }) => {
    return (
      <>
        <label  htmlFor={name}>{label}</label>
        <input
          id={name}
           {...rest}
         />
       
      </>
    );
  };
  
  export default Input;
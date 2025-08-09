import React, { useState } from "react";

function Form() {
 const InitialFormData  ={ firstName :'',
  lastName :'',
  admin :false,
 }
  const[formData ,setFormData] = useState(InitialFormData)



  function handleFormData(event) {
    const name = event.target.name
    let value = event.target.value
    //checkbox exeption
    if(event.target.type === 'checkbox'){
       value = event.target.checked
    }
    setFormData({
      ...formData , 
      [name] :value
  });
  }
  function handleSubmit(event){
    event.preventDefault()
    setFormData(InitialFormData)
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      name="firstName"
       onChange={handleFormData}
       value={formData.firstName} 
        />

      <input type="text"
      name="lastName"
       onChange={handleFormData}
       value={formData.lastName} 
        />
        <input type="checkbox"
        name="admin"
        onChange={handleFormData}
        value={formData.admin}
        />
      < button type="submit">Submit</button>
    </form>
  );
}

export default Form;

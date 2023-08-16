import React, { useState } from "react";


import DataStore from "../child/DataStore";

function Parents() {
  const [data, setData] = useState(" ");
  const [show, setShow] = useState(false);
 
  

  const takeDataHandle = (data) => {
    setData(data);
    console.log("in parent", data.product_name);
    if(show===false){
      setShow(true)
    }
    else{
      setShow(true)
    }
  };



  const deleteData=()=>{
    
    setData("")
 
    console.log("Delete")
    
  }
  const editData=()=>{
    
  if(show===true){
    setShow(false)

   
  
  }

    
  }
  return (
    <div className="container"> 
      <DataStore sendDataToParent={takeDataHandle} />
    { show&& <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product price</th>
            <th scope="col"> remaining items</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{data.product_Id ? data.product_Id : ""}</th>
            <td>{data.product_name ? data.product_name : ""}</td>
            <td>{data.product_item ? data.product_item : ""}</td>
            <td>{data.product_price ? data.product_price : ""}</td>
          
            <td><i className="bi bi-pencil-fill" onClick={editData}></i></td>
            <td><i className="bi bi-trash3-fill " onClick={deleteData}></i></td>
          </tr>
        </tbody>

      </table>
      
      }
        

    </div>
  );
}

export default Parents;

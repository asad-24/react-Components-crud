import React, { useState } from 'react'

const DataStore=({sendDataToParent})=> {
    const [pId,setId]=useState(" ")
    const [pName,setPName]=useState(" ")
    const [pPrice,setPPrice]=useState(" ")
    const [pItems,setPItems]=useState(" ")
    const [show,setShow1]=useState(true)
    const proName=(event)=>{
        setPName(event.target.value)
        console.log(pName)
    }
    const proPrice=(event)=>{
        setPPrice(event.target.value)
        console.log(pPrice)
    }
    const proItems=(event)=>{
        setPItems(event.target.value)
        console.log(pItems)
    }
    const id=(event)=>{
        setId(event.target.value)
        console.log(pId)
    }
    const obj={
product_id:"",
product_name:"",
product_price:"",
product_item:"",
    }
   obj.product_id=pId;
   obj.product_name=pName;
   obj.product_price=pPrice;
   obj.product_item=pItems;
   console.log(obj)

    const dataPass=()=>{
      sendDataToParent(obj)
      
      if(show===true){
        
        localStorage.setItem("change",false)
       let hi= localStorage.getItem("change")
       console.log("local",typeof(hi))
       let b=JSON.parse(hi);
       console.log("local",typeof(b))

        setShow1(b)
       
      }
     
    }
  
  return (
    
    <div className='container'>
  
   { show &&  <table className="table" id='dataStore' >
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product price</th>
      <th scope="col">Number of items</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><input type="text" onChange={id}/></th>
      <td><input type="text" onChange={proName} /></td>
      <td><input type="text"onChange={proPrice} /></td>
      <td><input type="text"onChange={proItems} /></td>
      <td><button type="button" className="btn btn-success"  onClick={dataPass}>confirm</button></td>
      
    </tr>
  
  </tbody>
</table> }
    </div>
  )
}

export default DataStore

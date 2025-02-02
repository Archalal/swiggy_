import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Content() {

    const[productData,setProductData]=useState([])

    useEffect(()=>{
        getProducts();

    },[])

    const getProducts= async()=>{

        let baseURL="https://dummyjson.com/recipes/"
       let getDataFetched=await fetch(baseURL);
      let convertedFetchedData=await getDataFetched.json();
      setProductData(convertedFetchedData.recipes);
      console.log(productData);
      
          

    }
  return (
    
        
    <div className='d-flex flex-wrap justify-content-center align-item-center' style={{gap:"20px"}}>
      
     {
        productData.map((a)=>(
            <>
             <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={a.image} />
     <Card.Body>
       <Card.Title>{a.name}</Card.Title>
       <Card.Text>
         {a.ingredients}
       </Card.Text>
       <Card.Subtitle className="mb-2 text-muted">Price :  8{a.reviewCount}</Card.Subtitle>
       <Button style={{backgroundColor:"orange",border:"none",color:"black"}}>ADD TO CART</Button>
     </Card.Body>
   </Card>
            </>
        ))
    
     }
    </div>
  )
}

export default Content

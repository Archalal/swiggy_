import React from 'react'



function Footer() {
  return (
   <div className='mainContainer d-flex justify-content-center align-item-center flex-wrap 'style={{gap:"60px",paddingTop:"30px",backgroundColor:"#e8eae8",letterSpacing:"2px",marginTop:"10px",padding:"50px"}}>
   
    <div>
      <h3 style={{paddingBottom:"15px"}}>Connect with us</h3>
      <h6>Facebbok</h6>
      <h6>Twitter</h6>
      <h6>Instagram</h6>
    </div>
    <div>
      <h3 style={{paddingBottom:"15px"}}>Info</h3>
      <h6>privacy Policy</h6>
      <h6>FAQs & Support</h6>
      <h6>Terms of Service</h6>
    </div>
    <div>
      <h3 style={{paddingBottom:"15px"}}>Contact</h3>
      <h6>mobile:+91 789069820</h6>
      <h6>email:Swiggy@gmail.com</h6>
    
    </div>

   </div>
  )
}

export default Footer

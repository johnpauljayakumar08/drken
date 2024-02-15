// import React,{useState} from "react";
// import axios from 'axios'
// export function Bussinessplan(){
//     // const checkout = () => {
//     //     alert("started")
//     //     // fetch("http://localhost:5000/create-checkout-session", {
//     //     //   method:"POST",
//     //     //   headers:{
//     //     //     "Content-Type":"application/json"
//     //     //   },
//     //     //   mode:"cors",
//     //     //   body: JSON.stringify({
//     //     //     items: [
//     //     //       {id:1,  price: 200 }
//     //     //     ]
//     //     //   })
//     //     // })

//     //     axios.post("http://localhost:5000/create-checkout-session",{
//     //         headers:{
//     //                 "Content-Type":"application/json"
//     //               },
//     //               mode:"cors",
//     //               body: JSON.stringify({
//     //                 items: [
//     //                   {id:1,  price: 200 }
//     //                 ]
//     //               })
//     //     })
//     //     .then(res => {
//     //       if (res.ok) return res.json()
//     //       return res.json().then(json => Promise.reject(json))
//     //     })
//     //     .then(({url})=>{
//     //       window.location = url
//     //     })
//     //     .catch(e => {
//     //       console.log(e.error)
//     //     })
//     //   }
//     const itemName = "License"
//   //  var itemPrice
//     const [quantity, setQuantity] = useState(1);
//     // const[finalAmount, setFinalAmount] = useState(itemPrice);
  
//     // const increment = () => {
//     //   setQuantity(quantity+1);
//     //   setFinalAmount(finalAmount+itemPrice);
//     // }
  
//     // const decrement = () => {
//     //   if(quantity <=1){
//     //     setQuantity(1);
//     //     setFinalAmount(itemPrice);
//     //   }
//     //   if(quantity > 1){
//     //     setQuantity(quantity - 1);
//     //     setFinalAmount(finalAmount - itemPrice);
//     //   }
//     // }
//       function checkout(itemPrice,quantity){
//         fetch("http://localhost:5000/create-checkout-session", {
//           method:"POST",
//           headers:{
//             "Content-Type":"application/json"
//           },
//           mode:"cors",
//           body: JSON.stringify({
//             items: [
//               {id:1, quantity: quantity, price: itemPrice, name: itemName}
//             ]
//           })
//         })
//         .then(res => {
//           if (res.ok) return res.json()
//           return res.json().then(json => Promise.reject(json))
//         })
//         .then(({url})=>{
//           window.location = url
//         })
//         .catch(e => {
//           console.log(e.error)
//         })
//       }
    
//     return(
//         <>
//          {/* <div className='w-full mx-auto'>
//       <div className='text-center font-raleway w-full max-w-5xl mx-auto my-6'>
//         <div className='font-extrabold text-transparent text-6xl my-10 bg-clip-text
//         bg-gradient-to-r from-yellow-400 to-yellow-800'>
//             Chocolate Corner
//         </div>
//         <div className='flex flex-col lg:flex-row justify-center items-center
//         mx-auto w-full my-16 border-2 bg-[#fcf6f6] border-slate-100 shadow-md py-4'>
//             <div className='flex lg:justify-end justify-center items-center mx-auto
//             my-24 w-full lg:w-6/12'>
//                 <img src={pic} alt=""/>
//             </div>
//            <div className='flex flex-col lg:w-6/12 w-full py-8'>
//              <div className='text-4xl font-bold text-yellow-700'>
//              {itemName}
//              </div>
//              <div className='text-3xl font-semibold my-6 text-slate-600'>
//                 price:&nbsp;&nbsp;₹{itemPrice}
//              </div>

//              <small className='mt-10 mb-3 font-semibold'>Add Quantity</small>
//              <div className='flex text-slate-900 justify-center items-center mb-10'>
//                 <span onClick={decrement} className='select-none w-auto px-4
//                 py-2 text-5xl bg-red-100 cursor-pointer'>-</span>
//                 <span className='w-auto px-4 py-2 text-3xl font-semibold'>{quantity}</span>
//                 <span onClick={increment} className='select-none w-auto px-4 py-2 text-5xl bg-green-100 
//                 cursor-pointer'>+</span>
//              </div>


//              <div className='my-6 text-xl'>Amount to be paid:
//              <span className='text-green-500 text-3xl font-bold pl-3'>₹{finalAmount}</span></div>
//              <div className='my-6'>
//               <button onClick={checkout} className='bg-green-400 text-white px-8 py-4 rounded-md text-2xl 
//               font-semibold'>
//                 Checkout
//               </button>
//              </div>
//            </div>
//         </div>
//       </div>
//     </div> */}
//             <div className="p-5">
//                 <p className="text-center container">Access to healthcare may vary across countries, communities, and individuals, influenced by social and economic conditions as well as health policies. Providing health care services means "the timely use of personal health services to achieve the best possible health outcomes".</p>
//                 <h3 className="text-center ">We Provide Best Catalogue</h3>
//             </div>
//             <div class="container-fluid" >
//                 <div class="container ">
//                 <div class="row">
//                     <div class="col-lg-4 col-md-12 mb-4 ">
//                     <div class="card h-100 shadow-lg ">
//                         <div class="card-body ">
//                         <div class="text-center p-3">
                           
//                             <span class="h2">$200</span>/month<br/><br/>
//                             <h4>10 License.....</h4>
//                             <br/>
//                         </div>
//                         <p class="card-text">For most businesses that want to otpimize web queries</p>
//                         </div>
//                         <ul class="list-group list-group-flush">
//                         <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
//                             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
//                         </svg> Access catalog of 5,800+ from top universities and companies</li>
//                         <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
//                             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
//                         </svg> Co-branded experience with learner priority technical support</li>
//                         <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
//                             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
//                         </svg>Skills platform for insights and analytics</li>
//                         </ul>
//                         <div class="card-body text-center">
//                         <button class="btn btnbgcolor btn-lg " onClick={()=>{checkout(200,10)}} style={{border_radius:"30px"}}>Choose Plan</button>
//                         </div>
//                     </div>
//                     </div>
//                     <div class="col-lg-4 col-md-12 mb-4">
//                     <div class="card h-100 shadow-lg">
//                     <div class="card-body">
//                         <div class="text-center p-3">
                           
//                             <span class="h2">$2000</span>/month<br/><br/>
//                             <h4>100 License.....</h4>
//                             <br/>
//                         </div>
//                         <p class="card-text">For most businesses that want to otpimize web queries</p>
//                         </div>
//                         <ul class="list-group list-group-flush">
//                         <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
//                             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
//                         </svg> Access catalog of 5,800+ from top universities and companies</li>
//                         <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
//                             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
//                         </svg> Co-branded experience with learner priority technical support</li>
//                         <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
//                             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
//                         </svg>Skills platform for insights and analytics</li>
//                         </ul>
//                         <div class="card-body text-center">
//                         <button class="btn btnbgcolor btn-lg" onClick={()=>{checkout(2000)}} style={{border_radius:"30px"}}>Choose Plan</button>
//                         </div>
//                     </div>
//                     </div>
//                     <div class="col-lg-4 col-md-12 mb-4">
//                     <div class="card h-100 shadow-lg">
//                     <div class="card-body">
//                         <div class="text-center p-3">
                           
//                             <span class="h2">$20</span>/month<br/><br/>
//                             <h4>Customized</h4>
//                             <br/>
//                         </div>
//                         <p class="card-text">For most businesses that want to otpimize web queries</p>
//                         </div>
//                         <ul class="list-group list-group-flush">
//                         <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
//                             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
//                         </svg> Access catalog of 5,800+ from top universities and companies</li>
//                         <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
//                             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
//                         </svg> Co-branded experience with learner priority technical support</li>
//                         <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
//                             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
//                         </svg>Skills platform for insights and analytics</li>
//                         </ul>
//                         <div class="card-body text-center">
//                         <button class="btn btnbgcolor btn-lg" style={{border_radius:"30px"}}>Choose Plan</button>
//                         </div>
//                     </div>
//                     </div>
//                 </div>    
//                 </div>
//             </div>
   
//         </>
//     );
// }
import React,{useState} from "react";
import axios from 'axios'
export function Bussinessplan(){
    // const checkout = () => {
    //     alert("started")
    //     // fetch("http://localhost:5000/create-checkout-session", {
    //     //   method:"POST",
    //     //   headers:{
    //     //     "Content-Type":"application/json"
    //     //   },
    //     //   mode:"cors",
    //     //   body: JSON.stringify({
    //     //     items: [
    //     //       {id:1,  price: 200 }
    //     //     ]
    //     //   })
    //     // })

    //     axios.post("http://localhost:5000/create-checkout-session",{
    //         headers:{
    //                 "Content-Type":"application/json"
    //               },
    //               mode:"cors",
    //               body: JSON.stringify({
    //                 items: [
    //                   {id:1,  price: 200 }
    //                 ]
    //               })
    //     })
    //     .then(res => {
    //       if (res.ok) return res.json()
    //       return res.json().then(json => Promise.reject(json))
    //     })
    //     .then(({url})=>{
    //       window.location = url
    //     })
    //     .catch(e => {
    //       console.log(e.error)
    //     })
    //   }
    const itemName = "License"
  //  var itemPrice
    const [quantity, setQuantity] = useState(1);
    // const[finalAmount, setFinalAmount] = useState(itemPrice);
  
    const increment = () => {
      setQuantity(quantity+1);
   
    }
  
    const decrement = () => {
      if(quantity <=1){
        setQuantity(1);
        
      }
      if(quantity > 1){
        setQuantity(quantity - 1);
       
      }
    }
      function checkout(itemPrice,quantity){
        fetch("http://localhost:5000/create-checkout-session", {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          mode:"cors",
          body: JSON.stringify({
            items: [
              {id:1, quantity: quantity, price: itemPrice, name: itemName}
            ]
          })
        })
        .then(res => {
          if (res.ok) return res.json()
          return res.json().then(json => Promise.reject(json))
        })
        .then(({url})=>{
          window.location = url
        })
        .catch(e => {
          console.log(e.error)
        })
      }
    
    return(
        <>
         {/* <div className='w-full mx-auto'>
      <div className='text-center font-raleway w-full max-w-5xl mx-auto my-6'>
        <div className='font-extrabold text-transparent text-6xl my-10 bg-clip-text
        bg-gradient-to-r from-yellow-400 to-yellow-800'>
            Chocolate Corner
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center
        mx-auto w-full my-16 border-2 bg-[#fcf6f6] border-slate-100 shadow-md py-4'>
            <div className='flex lg:justify-end justify-center items-center mx-auto
            my-24 w-full lg:w-6/12'>
                <img src={pic} alt=""/>
            </div>
           <div className='flex flex-col lg:w-6/12 w-full py-8'>
             <div className='text-4xl font-bold text-yellow-700'>
             {itemName}
             </div>
             <div className='text-3xl font-semibold my-6 text-slate-600'>
                price:&nbsp;&nbsp;₹{itemPrice}
             </div>

             <small className='mt-10 mb-3 font-semibold'>Add Quantity</small>
             <div className='flex text-slate-900 justify-center items-center mb-10'>
                <span onClick={decrement} className='select-none w-auto px-4
                py-2 text-5xl bg-red-100 cursor-pointer'>-</span>
                <span className='w-auto px-4 py-2 text-3xl font-semibold'>{quantity}</span>
                <span onClick={increment} className='select-none w-auto px-4 py-2 text-5xl bg-green-100 
                cursor-pointer'>+</span>
             </div>


             <div className='my-6 text-xl'>Amount to be paid:
             <span className='text-green-500 text-3xl font-bold pl-3'>₹{finalAmount}</span></div>
             <div className='my-6'>
              <button onClick={checkout} className='bg-green-400 text-white px-8 py-4 rounded-md text-2xl 
              font-semibold'>
                Checkout
              </button>
             </div>
           </div>
        </div>
      </div>
    </div> */}
            <div className="p-5">
                <p className="text-center container">Access to healthcare may vary across countries, communities, and individuals, influenced by social and economic conditions as well as health policies. Providing health care services means "the timely use of personal health services to achieve the best possible health outcomes".</p>
                <h3 className="text-center ">We Provide Best Catalogue</h3>
            </div>
            <div class="container-fluid" >
                <div class="container ">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 ">
                    <div class="card h-100 shadow-lg ">
                        <div class="card-body ">
                        <div class="text-center p-3">
                           
                            <span class="h2">$200</span>/month<br/><br/>
                            <h4><button onClick={increment} className="btn btn-primary">+</button>{quantity}<button onClick={decrement} className="btn btn-primary">-</button></h4>
                            <br/>
                        </div>
                        <p class="card-text">For most businesses that want to otpimize web queries</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg> Access catalog of 5,800+ from top universities and companies</li>
                        <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg> Co-branded experience with learner priority technical support</li>
                        <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>Skills platform for insights and analytics</li>
                        </ul>
                        <div class="card-body text-center">
                        <button class="btn btnbgcolor btn-lg " onClick={()=>{checkout(20,quantity)}} style={{border_radius:"30px"}}>Choose Plan</button>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4">
                    <div class="card h-100 shadow-lg">
                    <div class="card-body">
                        <div class="text-center p-3">
                           
                            <span class="h2">$2000</span>/month<br/><br/>
                            <h4>100 License.....</h4>
                            <br/>
                        </div>
                        <p class="card-text">For most businesses that want to otpimize web queries</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg> Access catalog of 5,800+ from top universities and companies</li>
                        <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg> Co-branded experience with learner priority technical support</li>
                        <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>Skills platform for insights and analytics</li>
                        </ul>
                        <div class="card-body text-center">
                        <button class="btn btnbgcolor btn-lg" onClick={()=>{checkout(2000)}} style={{border_radius:"30px"}}>Choose Plan</button>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4">
                    <div class="card h-100 shadow-lg">
                    <div class="card-body">
                        <div class="text-center p-3">
                           
                            <span class="h2">$20</span>/month<br/><br/>
                            <h4>Customized</h4>
                            <br/>
                        </div>
                        <p class="card-text">For most businesses that want to otpimize web queries</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg> Access catalog of 5,800+ from top universities and companies</li>
                        <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg> Co-branded experience with learner priority technical support</li>
                        <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>Skills platform for insights and analytics</li>
                        </ul>
                        <div class="card-body text-center">
                        <button class="btn btnbgcolor btn-lg" style={{border_radius:"30px"}}>Choose Plan</button>
                        </div>
                    </div>
                    </div>
                </div>    
                </div>
            </div>
   
        </>
    );
}
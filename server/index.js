require("dotenv").config()
const { v4: uuidv4 } = require('uuid');
const express = require("express")
const cors = require("cors")
const bodyparser = require('body-parser')
const mysql=require('mysql')
const nodemailer = require('nodemailer');
const app = express()
const path = require('path');
const { OAuth2Client } = require('google-auth-library');
app.use(cors())
app.use(bodyparser.json());
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const client = new OAuth2Client(process.env.ClientId);
// Database Connection for dashboard'
let moodlecon=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Kgisl@123",
    database:"moodle_db"
})
moodlecon.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Moodle Databases is Connected Successfully")
    }
})
let con=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Kgisl@123",
    database:"myspaincoach"
})
con.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connect successfully for dashboard")
    }
})
const transporter = nodemailer.createTransport({
    services:"Gmail",
    port: 587,
    host: "smtp.gmail.com",

    auth: {
        user: 'johnpauljayakumar08@gmail.com',
        pass: 'dzpkdoitobdxuwfx',
    },
    secure: false, // upgrades later with STARTTLS -- change this based on the PORT
});
app.post("/signupindiviual",(req,res)=>{
    var {fullname,phonenumber,email,companyname,password,qualification,newcompanyname,roll}=req.body
    const newUuid = uuidv4();
    console.log(newUuid)
    const sql = 'INSERT INTO indiviual_signup (learner_id,name_of_learner,email_id,phone_number,qualification,company_name,new_company,password,roll) VALUES (?,?,?,?,?,?,?,?,?)'
    con.query(sql,[newUuid,fullname,email,phonenumber,qualification,companyname,newcompanyname,password,roll],(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
           res.send({"status":"inserted"})
        }
    })
    const insertsql='insert into auth (learner_id,password,roll,email_id)values(?,?,?,?)'
    con.query(insertsql,[newUuid,password,roll,email],(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log("success")
        }
    })
})
// Registration for Bussiness
app.post("/signupbussiness",(req,res)=>{
    const newUuid = uuidv4();
    var {companyname,country,companyphonenumber,spocemailid,compnaysize,password,companyemailid,zipcode,spocname,spocphonenumber,companytype,roll}=req.body
    const bussinesssql = 'INSERT INTO bussiness_signup(bussiness_id,company_name,company_emailid,country,Zipcode,company_phonenumber,spoc_name,spoc_emailid,spoc_phonenumber,company_size,company_type,password,roll)values(?,?,?,?,?,?,?,?,?,?,?,?,?)'
    con.query(bussinesssql,[newUuid,companyname,companyemailid,country,zipcode,companyphonenumber,spocname,spocemailid,spocphonenumber,compnaysize,companytype,password,roll],(error,result)=>{
        if(error){
            console.log(error)
            res.send({"status":"error"})
        }
        else{
           res.send({"status":"inserted"})
        }
    })
    const insertauth='insert into auth(bussiness_id,email,password,roll)values(?,?,?,?)'
    con.query(insertauth,[newUuid,spocemailid,password,roll],(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log("success")
        }
    })
    const licenseinsert='insert into license(bussiness_id,License,invite,enrolled)values(?,?,?,?)'
    con.query(licenseinsert,[newUuid,0,0,0],(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log("success")
        }
    })
})
app.get("/bussuserdetails/:bussiness_id",(req,res)=>{
    let{bussiness_id}=req.params
    var Dashboardsql='SELECT * FROM myspaincoach.bussiness_signup JOIN myspaincoach.license ON  myspaincoach.bussiness_signup.bussiness_id = myspaincoach.license.bussiness_id WHERE myspaincoach.bussiness_signup.bussiness_id = ?'
    con.query(Dashboardsql,[bussiness_id],(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
})
app.post("/login",(req,res)=>{
    let {username,password}=req.body
    console.log(username,password)
    let loginsql='select * from b_auth where email=?'
    con.query(loginsql,[username],(error,result)=>{
        if(error){
            res.send({"status":"empty_set"})
        }
        else if(result.length>0){
            let dbusername=result[0].email
            let dbpassword=result[0].password
            let id=result[0].bussiness_id
            let roll= result[0].roll
            if(dbusername===username && dbpassword===password){
                res.send({"status":"success","id":id,"roll":roll})
            }
            else{
              res.send({"status":"invalid_user"})  
            }
        }
        else{
            res.send({"status":"both_are_invalid"})
        }
    })
})
app.get("/getcompnamy",(req,res)=>{
    const getsql='select company_name from bussiness_signup;'
    con.query(getsql,(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
})
// payment Gateway
app.post("/create-checkout-session", async (req, res)=>{
    try{
        const customer=await stripe.customers.create({
                    metadata:{
                        userId:req.body.id,
                        quatity:req.body.quatity
                    }
                });

               
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            mode:"payment",
            line_items: req.body.items.map(item => {
                return{
                    price_data:{
                        currency:"usd",
                        product_data:{
                            name: item.name
                        },
                        unit_amount: (item.price)*100,

                    },
                    quantity: item.quantity
                   
                }
                
            }),
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel'
        })

        res.json({url: session.url})
        // res.json({url:customer.url})
        
        res.send(lineItems)
        

    }catch(e){
     res.status(500).json(console.log(e))
    }
})
app.post('/text-mail/:bussiness_id', (req, res) => {
    var {bussiness_id}=req.params
    var {emails}=req.body
    var emailsplit=emails.split(',')

    emailsplit.map((value,index)=>{
        const invitinsert='INSERT into mdl_gl_invite(email,bussiness_id)values(?,?)'
        moodlecon.query(invitinsert,[value,bussiness_id],(error,result)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log("success")
            } 
        })
        let updatequantityandinvite="update license set License=License - 1,invite=invite + 1 where bussiness_id=?"
          con.query(updatequantityandinvite,[bussiness_id],(error,result)=>{
            if(error){
                console.log((error))
            }
            else{
                console.log("updated")
            }
          })
      

    })
    const mailData = {
        from: 'johnpauljayakumar08@gmail.com',
        to: emails,
        subject: 'Course Invitation',
        text: 'mail sending by text formate',
        html: '<b>Dear Learners, </b><br>Please use the below URL for registration <br>http://moodle-kgm.microcollege.in/login/signup.php',
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});
app.post("/remaindermail/:bussiness_id",(req,res)=>{
    var {bussiness_id}=req.params
    var {email}=req.body
    const remaidermail={
        from: 'johnpauljayakumar08@gmail.com',
        to: email,
        subject: 'Remainder For Enrollment',
        text: 'mail sending by text formate',
        html: '<b>Dear Learners, </b><br>Please use the below URL for registration <br>http://moodle-kgm.microcollege.in/login/signup.php',
    }
    transporter.sendMail(remaidermail,(error,info)=>{
        if(error){
            return console.log(error);
        }
        else{
            // res.status(200).send({ message: "Mail send", message_id: info.messageId });

            let updateremainder="update mdl_gl_invite set remainder=remainder+1 where email=?"
            moodlecon.query(updateremainder,[email],(error,result)=>{
                if(error){
                    console.log(error)
                }
                else{
                    res.send({"status":"remaidersent"})
                }
            })
        }
    })
})
app.post("/inactive/:bussiness_id",(req,res)=>{
    var {bussiness_id}=req.params
    var {email}=req.body
    const Inactivemail={
        from: 'johnpauljayakumar08@gmail.com',
        to: email,
        subject: 'Inactvie Enrollment',
        text: 'mail sending by text formate',
        html: '<b>Dear Learners, </b><br>My Spain Coach course is Inactive',
    }
    transporter.sendMail(Inactivemail,(error,info)=>{
        if(error){
            return console.log(error);
        }
        else{
            // res.status(200).send({ message: "Mail send", message_id: info.messageId });

           
            let updateremainder="update mdl_gl_invite set action=? where email=?"
                moodlecon.query(updateremainder,["Inactive",email],(error,result)=>{
                    if(error){
                        console.log(error)
                    }
                    else{
                        let updatequantityandinvite="update license set License=License + 1,invite=invite - 1 where bussiness_id=?"
                        con.query(updatequantityandinvite,[bussiness_id],(error,result)=>{
                            if(error){
                                console.log((error))
                            }
                            else{
                                
                                res.send({"status":"changed"})
                            }
                        })
                    }
            })
           
        }
    })
})
app.post("/message/:bussiness_id",(req,res)=>{
    var {bussiness_id}=req.params
    var {email,content}=req.body
    const commonmessage={
        from: 'johnpauljayakumar08@gmail.com',
        to: email,
        subject: 'Common announcement',
        text: 'mail sending by text formate',
        html: '<b>Dear Learners, </b><br>'+content,
    }
    transporter.sendMail(commonmessage,(error,info)=>{
        if(error){
            return console.log(error);
        }
        else{
            // res.status(200).send({ message: "Mail send", message_id: info.messageId });

           
            let insertmessage="insert into message(sender_name,content,person)values(?,?,?)"
                con.query(insertmessage,[bussiness_id,content,email],(error,result)=>{
                    if(error){
                        console.log(error)
                    }
                    else{
                       res.send({"status":"message_send"})
                    }
            })
           
        }
    })
})
app.get("/getmessage/:bussiness_id",(req,res)=>{
    var {bussiness_id}=req.params
    var getmessage="select * from message where sender_name=?"
    con.query(getmessage,[bussiness_id],(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
})
let endpointSecret;
// endpointSecret = "whsec_56beb0bc63bb2ba835565766df796f08e3ca5ba63780ebf15521456d9e8d09af";


app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];
    let data;
    let eventType;
  if(endpointSecret){
    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      console.log("good")
  } catch (err) {
      console.log(`Webhook Error: ${err.message}`)
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
  }

  data=event.data.object;
  eventType=event.type

}
else{
    data=req.body.data.object;
    eventType=req.body.type
}
if(eventType==="checkout.session.completed"){
    var transations_id=data.id
    const lineItems = stripe.checkout.sessions.listLineItems(
        transations_id
      )
      .then((lineItemss)=>{

          console.log("trasational data",lineItemss)
          let insertdetails='insert into checkout_details(transation_id,customer_email,customer_name,amount,description,quantity)values(?,?,?,?,?,?)'
          con.query(insertdetails,[data.id,data.customer_details.email,data.customer_details.name,lineItemss.data[0].amount_total,lineItemss.data[0].description,lineItemss.data[0].quantity],(error,result)=>{
              if(error){
                  console.log(error)
                  
              }
              else{
                  console.log("success")
              }
          })
          let updatequantity="update bussiness_signup set License=License + ? where spoc_emailid=?"
          con.query(updatequantity,[lineItemss.data[0].quantity,data.customer_details.email],(error,result)=>{
            if(error){
                console.log((error))
            }
            else{
                console.log("updated")
            }
          })
      })
   
    console.log("data",data)

    // console.log(customer)
}
// Handle the event


  // Return a 200 response to acknowledge receipt of the event
  res.send().end();
 
  
 
});
// app.get("/getuser",(req,res)=>{
    
//     var getsql="select * from  mdl_user where "
//     con.query(getsql,(error,result)=>{
//         if(error){
//             console.log(error)
//         }
//         else{
//             res.send("result")
//         }
//     })
// })
app.get("/getenrolleduser/:bussiness_id",(req,res)=>{
    var {bussiness_id}=req.params
    var getsql="select * from  mdl_gl_invite where bussiness_id=? and action=?"
    moodlecon.query(getsql,[bussiness_id,"invite"],(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
})
app.get("/geteuser/:bussiness_id",(req,res)=>{
    var {bussiness_id}=req.params
    var getsql="select email from  mdl_gl_invite where bussiness_id=?"
    moodlecon.query(getsql,[bussiness_id],(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
})
// const users = [];

// function upsert(array, item) {
//   const i = array.findIndex((_item) => _item.email === item.email);
//   if (i > -1) array[i] = item;
//   else array.push(item);
// }

// app.post('/api/google-login', async (req, res) => {
//   const { token } = req.body;
//   const ticket = await client.verifyIdToken({
//     idToken: token,
//     audience: process.env.CLIENT_ID,
//   });
//   const { name, email, picture } = ticket.getPayload();
//   upsert(users, { name, email, picture });
//   res.status(201);
//   res.json({ name, email, picture });
// });
app.listen(5000, () => {
    console.log("the port is running in 5000")

})
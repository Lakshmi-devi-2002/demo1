const tatKal = new Promise((resolve,reject)=>{
  let booktickets = true
  if(booktickets)
    resolve(850);
  else
    reject();
})
tatKal.then((amt)=>console.log(`I have successfully booked the tickets ${amt}`))
.catch(()=>console.log("I wasn't able to book the tickets"))











// console.log(8 % 3);





// for(let i=8; i>-2; i-=3) {
//     console.log(i);
// }


// var x = "0";
// for(var i=1; i<5; i++) {
//     x += i;
// }
// console.log(x);

//////////////////////////////////////////////////////////////////////////////////////
// var taco1 = {
//     "tortilla": "soft corn tortilla",
//     "protein":  "tinga chicken",
//     "cheese":   "cotija cheese",
//     "toppings": ["lettuce", "pico de gallo", "guacamole"],
//     "tacoInfo": function(){
//         console.log("Tortilla: " + this.tortilla);
//         console.log("Protein:  " + this.protein);
//         console.log("Cheese:   " + this.cheese);
//         console.log("Toppings: " + this.toppings);
//     }
// }

// taco1.tacoInfo();

// console.log(taco1.protein);

// //////////////////////////////////////////////////////////////////////////////////////

// function getColor(element){
//   let colorChange = document.querySelectorAll("p");
//   for(let i=0; i < colorChange.length; i++){
//     colorChange[i].style.color = element.value;
//   }
// }

// function 

////////////////////////////////////////////////////////////////////////////////
// let userInput = "";
// let textPrintOut = document.getElementById("userNameOutput");
// let profilesGet = document.getElementById("profilesDiv");
// function getUsername(element, id){
//   userInput = element.value;
//   console.log(userInput);
  
// }
// let profiles = {};
// let usernames = [];
// function postCard(val){
//   let postContent = ` <div id = "postContentDiv">
//                        <img src = "${val.avatar_url}">
//                        </div>`
//   return postContent;
// }
 
// function collectionProfiles(nval){
//   console.log("here here " + nval.name);
//   usernames.push(nval.name);
//   let profilesDivNew = `<div id= "userProfiles"><p> Users: ${usernames}</p></div> `
//   return profilesDivNew;
// }

// async function search(){
//   let responce = await fetch("https://api.github.com/users/" + userInput);
//   let data = await responce.json();
//   textPrintOut.innerHTML = postCard(data);
//   profilesGet.innerHTML = collectionProfiles(data);
//   profiles.push(data);

  
// }
/////////////////////////////////////////////////////////////////////////////////////////////////
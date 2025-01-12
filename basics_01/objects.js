// singleton


// object literals

const mySym = Symbol("key1")


const JsUser = {/*{}isse hi object define hota h. */
    name/*object ke andar ye sab data as "name" treat hoga */: "Ayush",
    "full name": "Ayush Baghel",
    [mySym]/*[] ki help se ham isko as a symbol use kar rahe h */: "mykey1",
    age: 18,
    location: "Jabalpur",
    email: "Ayushbaghel19@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
 //console.log(JsUser[email])// agar ese likhenge to error aayaga but["email"] ese likhne me nahi aayega.
 //console.log(JsUser["email"])
 //console.log(JsUser["full name"])
 //console.log( typeof JsUser[mySym])

// JsUser.email = "Ayush@chatgpt.com"
//   Object.freeze(JsUser)// isko hamne freeze kar diya h mtlab ab iski value baad me manipulate ni ki jaa sakti
// JsUser.email = "Ayush@microsoft.com"
 //console.log(JsUser);//hamne freeze kar diya h, to ab nayi value ni aayegi purani hi propagate hogi

JsUser.edit = function(){// ham ab upar vale function me ghus ke ek or function add kar rahe h
    console.log("Hello JS user");
    
}
JsUser.editTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.edit);// agar ese print karenge to annonymous likha aayega
console.log(JsUser.edit());// ye ek function ke andar define hai isliy hamko () use karna padega
console.log(JsUser.editTwo());

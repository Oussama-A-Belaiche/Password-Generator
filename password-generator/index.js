



const Generate  = () => {

   let outputField =  document.getElementById("output")
   const Alphabet = [..."abcdefghijklmnopqrstuvwxyz"] 
   const specialCharacters  = ["|" , "#" , "/" , ";" , "." , "," , "%" , "*" , "@" , "]"  , "[" , ")" , "("]


   let password = "" 
   let counter = 0 
   while (password.length < 12) { 
    console.log(counter) 
    counter ++ 


    let rand = Math.floor (Math.random () * (3)) + 1 
    console.log(rand)
    if  (rand == 1) { 
        let s = ""
        s.toUpperCase
        console.log("hi letter ")
        let letter = Math.floor (Math.random() * (2)) + 1  == 1 ? Alphabet [Math.floor(Math.random() * (Alphabet.length))  ].toLowerCase() :  Alphabet [Math.floor(Math.random() * (Alphabet.length)) ].toUpperCase()
        password = password +  letter
    }
    else if (rand == 2) {
        console.log("hi number")
         password += Math.floor (Math.random() * 10 ) }
    else {
        console.log("hi special")

        password += specialCharacters[Math.floor (Math.random() * (specialCharacters.length)) ]
    }

    
   }

   outputField.value = password
    
}

const alerting = async () => { 
    let alert =  document.getElementsByClassName("copyAlert")[0] 
    alert.style.display = "block"
    setTimeout (() =>{
        alert.style.display = "none"
    } , 1000)


}

const copy = () => { 
   let output =  document.getElementById("output")
   output.select() ;
   output.setSelectionRange(0,9999) 
   document.execCommand("copy")
   alerting ()



}
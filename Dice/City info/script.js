const button = document.querySelector('button')
button.addEventListener('click',showstat)
const result = document.createElement("div")
result.id ="resultDiv"
document.getElementById("overall").appendChild(result)


function showstat(){
const input = document.getElementById("input")
const city = input.options[input.selectedIndex].value
let population = 0,literaturerate = 0,language = ''

switch(city){
    case "Bengaluru":
        population=784879328;
        literaturerate=90;
        language="kannada"
        break
    
    case "Mumbai":
        population=79340390
        literaturerate=80;
        language="hindi"
        break
    case "Delhi":
        population=798209238
        literaturerate=85;
        language="Hindi"
        break
    case "Chennai":
        population=79089809
        literaturerate=70
        language="Tamil"
        break
        

       
}
let text = `The ${city} is a city with a puplation of ${population} and literacy rate of ${literaturerate} and they speak a language called ${language}`
document.getElementById("resultDiv").innerHTML=text
}
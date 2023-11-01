
function submission() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var unitLeft =document.getElementById('itemsLeft').value;
    var unitRight =document.getElementById('itemsRight').value;

    if(unitLeft==unitRight){
        alert("Choose Different Units")
    }

    if(unitLeft=="Celsius" && unitRight=="Kelvin"){
        var answer = inputValue + 273.15
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText= unitLeft
        document.getElementById('unitRight').innerText =unitRight
        
    }
    if(unitLeft=="Celsius" && unitRight=="Fahrenheit"){
        var answer = (inputValue * (9/5)) + 32
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText= unitLeft
        document.getElementById('unitRight').innerText =unitRight
    }
    if(unitLeft=="Celsius" && unitRight=="Rankine"){
        var answer = (inputValue * (9/5)) + 491.67
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText  =unitLeft
        document.getElementById('unitRight').innerText =unitRight
    }


    if(unitLeft=="Kelvin" && unitRight=="Celsius"){
        var answer = inputValue - 273.15
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText =unitLeft 
        document.getElementById('unitRight').innerText = unitRight
    }
    if(unitLeft=="Kelvin" && unitRight=="Fahrenheit"){
        var answer = (inputValue - 273.15)* (9/5) + 32 
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText =unitLeft
        document.getElementById('unitRight').innerText =unitRight
    }
    if(unitLeft=="Kelvin" && unitRight=="Rankine"){
        var answer = (inputValue * (9/5)) 
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText =unitLeft
        document.getElementById('unitRight').innerText =unitRight
    }

    
    if(unitLeft=="Fahrenheit" && unitRight=="Celsius"){
        var answer = (inputValue - 32) * (5/9)
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText =unitLeft
        document.getElementById('unitRight').innerText =unitRight
    }
    if(unitLeft=="Fahrenheit" && unitRight=="Kelvin"){
        var answer = (inputValue - 32)* (5/9) + 273.15 
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText =unitLeft
        document.getElementById('unitRight').innerText =unitRight
    }
    if(unitLeft=="Fahrenheit" && unitRight=="Rankine"){
        var answer = (inputValue + 459.67) 
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText =unitLeft
        document.getElementById('unitRight').innerText =unitRight
    }

    
    if(unitLeft=="Rankine" && unitRight=="Celsius"){
        var answer = (inputValue - -272.594) 
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText =unitLeft
        document.getElementById('unitRight').innerText =unitRight
    }
    if(unitLeft=="Rankine" && unitRight=="Kelvin"){
        var answer = (inputValue*(5/9)) 
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText =unitLeft
        document.getElementById('unitRight').innerText =unitRight
    }
    if(unitLeft=="Rankine" && unitRight=="Fahrenheit"){
        var answer = (inputValue -458.67) 
        document.getElementById('numberLeft').innerText = inputValue
        document.getElementById('numberRight').innerText = answer.toFixed(2)

        document.getElementById('unitLeft').innerText =unitLeft
        document.getElementById('unitRight').innerText =unitRight
    }
    

}
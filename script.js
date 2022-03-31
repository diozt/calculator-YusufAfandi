
let prevNumber = ''
let calculatingOperator =''
let currentNumber = '0'
const numbers = document.querySelectorAll(".number");
const screen = document.querySelector('.calculator-screen')
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const percent = document.querySelector('.precentage')
const del = document.querySelector('.delete')


const updateScreen = (number) =>{
    screen.value = number
}

numbers.forEach((number) => {
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber)
    })
});


const inputNumber = (number) =>{
    if(currentNumber ==='0'){
        currentNumber=number
    }else{
        currentNumber += number
    }
}

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value)
    })
})

const inputOperator =(operator)=>{
    if(calculatingOperator===''){
        prevNumber = currentNumber
    }
    calculatingOperator= operator
    currentNumber='0'
}

equalSign.addEventListener('click',()=>{
    calculate()
    updateScreen(currentNumber)
})

const calculate = ()=>{
    let result = ''
    switch(calculatingOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculatingOperator=''
}

clearAll=()=>{
    prevNumber=''
    calculatingOperator=''
    currentNumber='0'
}

clearBtn.addEventListener('click',()=>{
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber+=dot
}

decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputPercent = ()=>{
    currentNumber = parseFloat(currentNumber) / 100
    console.log(currentNumber)
    updateScreen(currentNumber)
    
}

percent.addEventListener('click',(event)=>{
    inputPercent()
})


delNumber=()=>{
    if(currentNumber ==='0'){
        return
    }

    currentNumber = currentNumber.slice(0, -1)
    updateScreen(currentNumber)

}

del.addEventListener('click',(event)=>{
    delNumber()
})

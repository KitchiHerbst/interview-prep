document.addEventListener('DOMContentLoaded', () => {
    console.log(termCalculator('(5 + 8) * 3 / 8 + 3'))
})


const termCalculator = (equation) => {
    //isolate the parantheses so i can execute what is inside
    //remove parantheses from equation
    //get the result of the parentheses back into the equation
    //start executing in order of operations

    // isolates the parentheses
    const removeParantheses = /\(([^)]+)\)/
    const parantheses = removeParantheses.exec(equation)


    //replaces parantheses with it solved
    const updatedequation = equation.replace(/ *\([^)]*\) */g, ' ' + parenthesesSolver(parantheses[1]) + ' ')

    return solve(updatedequation)

}

const solveSingle = (arr) => {
    arr = arr.slice();
    while(arr.length-1){
      if(arr[1] === '*') arr[0] = arr[0] * arr[2]
      if(arr[1] === '-') arr[0] = arr[0] - arr[2]
      if(arr[1] === '+') arr[0] = +arr[0] + (+arr[2])
      if(arr[1] === '/') arr[0] = arr[0] / arr[2]
      arr.splice(1,1);
      arr.splice(1,1);
    }
    return arr[0];
  }
  
  const solve = (eq) => {
    let res = eq.split(/(\+|-)/g).map(x => x.trim().split(/(\*|\/)/g).map(a => a.trim()));
    res = res.map(x => solveSingle(x));
     
    return solveSingle(res) 
    
  }

const parenthesesSolver = (expression) => {
    if(expression.includes('+')) {
	    const numbersString = expression.split('+')
        const numbers = numbersString.map(noStr => parseInt(noStr))
        const initialValue = 0;
        const result = numbers.reduce((acc, no) => acc + no, initialValue);
        return result;
    }
    else if(expression.includes('*')) {
        const numbersString = expression.split('*');
        const numbers = numbersString.map(noStr => +noStr);
        const initialValue = 1.0;
        const result = numbers.reduce((acc, no) => acc * no, initialValue);
        return result;
    }
    else if(expression.includes('-')){
        const numbersString = expression.split('-')
        const numbers = numbersString.map(noStr => parseInt(noStr))
        const initialValue = 0;
        const result = numbers.reduce((acc, no) => acc - no);
        return result;
    }
    else if(expression.includes('/')){
        const numbersString = expression.split('/')
        const numbers = numbersString.map(noStr => parseInt(noStr))
        const initialValue = 1.0;
        const result = numbers.reduce((acc, no) => acc / no, initialValue);
        return result;
    }
    
}




  

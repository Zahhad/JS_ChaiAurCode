# **JavaScript Execution Context**  

When we run a file with JavaScript code 📝, three execution contexts are created:  

- ➡️ **Global Execution Context** *(Accessible via `this` in the global scope)*  
- ➡️ **Function Execution Context** *(Created whenever a function is invoked)*  
- ➡️ **Eval Execution Context** *(Used inside `eval()` function – rarely used)*  

## **📌 JavaScript Code Execution Phases**  

JavaScript executes code in **two main phases**:  

1. **Memory Creation Phase** *(a.k.a. Creation Phase)*  
2. **Execution Phase*  

---

## **🚀 Real Example**  

```js
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```

## **🔹 Memory Creation Phase**
Before execution, JavaScript allocates memory for variables and functions:

- ➡️ val1    → undefined
- ➡️ val2    → undefined
- ➡️ addNum  → Function Definition
- ➡️ result1 → undefined
- ➡️ result2 → undefined

🔹 Execution Phase
Actual values are assigned, and functions are executed:

- ➡️ val1    → 10
- ➡️ val2    → 5
- ➡️ addNum  → New Variable Environment + Execution Thread
- ➡️ result1 → 15  // addNum(10, 5)
- ➡️ result2 → 12  // addNum(10, 2)

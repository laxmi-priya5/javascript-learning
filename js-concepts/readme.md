
##  What is for...in?
- The for...in loop iterates over the enumerable property keys of an object.
- It gives you the property names (keys), not the values directly.

✅ Syntax
for (let key in object) {
  // code using key
}



🔎 Example
const user = { name: "Laxmipriya", age: 22, city: "Delhi" };

for (let key in user) {
  console.log(key, ":", user[key]);
}


Output:
name : Laxmipriya
age : 22
city : Delhi



⚡ Key Points
- Iterates over keys (property names).
- To get the value, you use object[key].
- Works on objects, not arrays (though it can technically be used on arrays, it’s not recommended because it iterates over keys, not values, and may include inherited properties).
- For arrays, prefer for...of or array methods like .forEach().
## What is forEach?
- forEach is an array method in JavaScript.
- It executes a provided callback function once for each element in the array.
- It’s often used when you want to perform an action on every item without creating a new array.

✅ Syntax
array.forEach(function(element, index, array) {
  // code to run for each element
});


- element → the current item in the array
- index → the position of the item (optional)
- array → the whole array being traversed (optional)

🔎 Example
const numbers = [1, 2, 3, 4];

numbers.forEach((num, i) => {
  console.log(`Index ${i}: Value ${num}`);
});


Output:
Index 0: Value 1
Index 1: Value 2
Index 2: Value 3
Index 3: Value 4



⚡ Key Points
- Works only on arrays (not objects).
- Does not return a new array (unlike .map()).

  ## forEach vs map method
  ### 🔎 Example with .forEach()
const numbers = [1, 2, 3, 4];
const result = numbers.forEach(num => num * 2);

console.log(result);       // undefined
console.log(numbers);      // [1, 2, 3, 4]


- .forEach() runs the callback for each element, but it does not return a new array.
- The result is undefined.

### 🔎 Example with .map()
const numbers = [1, 2, 3, 4];
const result = numbers.map(num => num * 2);

console.log(result);       // [2, 4, 6, 8]
console.log(numbers);      // [1, 2, 3, 4]


- .map() creates a new array with the transformed values.
- The original array stays unchanged.

## for of loop

What is for...of?
- The for...of loop iterates over iterable objects (like arrays, strings, Maps, Sets).
- It gives you the values directly, unlike for...in which gives you keys.

✅ Syntax
for (let value of iterable) {
  // code using value
}

🔎 Example with Array
const numbers = [10, 20, 30];

for (let num of numbers) {
  console.log(num);
}

Output:
10
20
30



# 🔍 How this Works in JavaScript
1. Global Context
- Non-strict mode:
- In browsers → this points to the global object (window).
- In Node.js → this points to the module.exports object, not the global object.
- Strict mode:
- this is undefined in the global scope.

2. Inside a Function
- Non-strict mode:
- If a function is called normally (not as a method), this defaults to the global object.
- Strict mode:
- this remains undefined unless explicitly bound.

3. Inside an Object Method
- When a function is called as a property of an object, this refers to that object.
  ```
   const obj = {
    name: "Laxmipriya",
    greet() {
      console.log(this.name); // "Laxmipriya"
    }
   };
   obj.greet();
  ```




4. Arrow Functions
- Arrow functions do not have their own this.
- They inherit this from their lexical scope (the surrounding context).
 ``` 
    const obj = {
      name: "Laxmipriya",
      greet: () => {
        console.log(this.name); // undefined, because `this` is inherited from global
      }
    };
obj.greet();
```



5. Explicit Binding
- You can control this using:
- call()
- apply()
- bind()

 ## Difference Between x() and window.x()
 ```
 function x() {
  console.log(this);
}
```
1. Calling x()
- When you declare function x(){} in the global scope (browser):
- The function is hoisted into the global scope.
- In non-strict mode, calling x() will log the global object (window in browsers).
- In strict mode, calling x() will log undefined.

2. Calling window.x()
- Since x is defined globally, it becomes a property of the window object.
- When you call window.x(), you’re explicitly invoking it as a method of the window object.
- That means inside the function:
- this will point to window (regardless of strict or non-strict mode, because the call is bound to the object).

### In non‑strict mode, JavaScript performs what’s called this substitution:
- If a function is called without an explicit receiver (like obj.method()), then this inside the function would normally be undefined.
- But in non‑strict mode, JavaScript automatically substitutes that undefined with the global object (window in browsers, global in Node.js).
That’s why:
```
function x() {
  console.log(this);
}
```
// Non-strict mode
```
x();        // logs window (browser)
window.x(); // logs window
```


Whereas in strict mode:
```
'use strict';

function x() {
  console.log(this);
}

x();        // logs undefined
window.x(); // logs window
```

## Arrow fnction
1. No Own this
- Arrow functions don’t create their own this.
- Instead, they lexically inherit this from the surrounding scope (the context in which they were defined).

### in strict
```
 'use strict';

const obj = {
  name: "Priya",
  arrow: () => {
    console.log(this); 
  }
};

obj.arrow(); 
// Logs `undefined` in strict mode (because `this` is inherited from the global scope, which is undefined in strict mode).

```

### in non-strict
```
'use strict';

const obj = {
  name: "Priya",
  arrow: () => {
    console.log(this); 
  }
};

obj.arrow(); 
// Logs `window` in non-strict mode (because `this` is inherited from the global scope, which is global object in non-strict mode).
```
### 🔎 What’s Happening Here
```
const obj2 = {
  a: 20,
  x: function () {
    console.log(this);
    // const y = () => {
    //   console.log(this);
    // };
    // y();
  },
};
obj2.x();
```



1. Regular Function (x)
- x is defined as a normal function inside obj2.
- When you call obj2.x(), the function is invoked as a method of the object.
- That means this inside x points to obj2.
👉 Output:
{ a: 20, x: f }



2. Arrow Function (y)
- If you uncomment y, notice it’s defined inside x.
- Arrow functions don’t have their own this.
- They inherit this from their lexical scope — in this case, the surrounding function x.
- Since this inside x is obj2, the arrow function y will also log obj2.
👉 Output (if uncommented):
{ a: 20, x: f }

## 🔎 this in DOM Event Handler

1. Regular Function as Event Handler
```
<button id="btn">Click me</button>
<script>
  const btn = document.getElementById("btn");
  btn.onclick = function () {
    console.log(this);
  };
</script>
```

- Here, this refers to the DOM element that triggered the event (<button>).
- So the output will be:
<button id="btn">Click me</button>



2. Arrow Function as Event Handler
```
<button id="btn">Click me</button>
<script>
  const btn = document.getElementById("btn");
  btn.onclick = () => {
    console.log(this);
  };
</script>
```

- Arrow functions don’t bind their own this.
- They inherit this from the lexical scope (here, the global scope).
- In strict mode, that’s undefined.
- In non‑strict mode (browser), that’s window.
👉 So instead of the button element, you’ll see undefined (strict) or window (non‑strict).

3. Event Listener with addEventListener
```
btn.addEventListener("click", function () {
  console.log(this); // the button element
});
```
```
btn.addEventListener("click", () => {
  console.log(this); // lexical scope (undefined in strict mode)
});
```
4. Inline onclick in HTML
```
<button onclick="console.log(this)">Click me</button>
```

Behavior:
- Here, this refers to the element itself (<button>).
- That’s because inline event attributes are executed in the scope of the element, and the browser automatically sets this to the element.
👉 Output:
<button onclick="console.log(this)">Click me</button>



🔎 Inline onclick Calling a Function
```
<button onclick="sayHello()">Click me</button>

<script>
  function sayHello() {
    console.log(this);
  }
</script>
```

Behavior:
- In this case, the function sayHello is called without an object receiver(without calling like a method )
- So:
- Non‑strict mode → this inside sayHello is the global object (window).
- Strict mode → this is undefined.





























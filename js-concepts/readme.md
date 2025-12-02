
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

  ## forEach vs map
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






1. Calculate the total sum of age for the developers.
   Use mock data developers data set.

2. Using the doctors data set, calculate the number of years each actor played as doctor from year 2000 and above.
   Desired output

```js
const filteredData = [
  { doctorNumber: '#9', playedBy: 'Christopher Eccleston', yearsPlayed: 1 },
  { doctorNumber: '#10', playedBy: 'David Tennant', yearsPlayed: 6 },
  { doctorNumber: '#11', playedBy: 'Matt Smith', yearsPlayed: 4 },
  { doctorNumber: '#12', playedBy: 'Peter Capaldi', yearsPlayed: 1 }
];
```

3. Write a function that takes a string and returns an object representing the character
   count for each letter. Use .reduce to build this object.

```js
ex.countLetters('abbcccddddeeeee'); // => {a:1, b:2, c:3, d:4, e:5}
const countLetters = string => {
  // your code here
};
```

4. Write a function that takes a string and a target, and returns true or false if the target is present in the string.
   Use .reduce to acomplish this.

```js
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false
const isPresent = (string, target) => {
  //code here
};
```

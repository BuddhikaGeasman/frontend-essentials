import { developers, doctors } from "../exercises/mock-data";

// 1. Calculate the total sum of age for the developers.
//    Use mock data developers data set.

it("should return the sum of age of developers", () => {
  const sumOfDevelopersAges = developers.reduce((acc, developer) => {
    return acc + developer.age;
  }, 0);
  const expected = 131;
  expect(sumOfDevelopersAges).toEqual(expected);
});

// 2. Using the doctors data set, calculate the number of years each actor played as doctor from year 2000 and above.
// Desired output

it("should return the sum of years they played a doctor role", () => {
  const doctorsRole = (acc, doctor) => {
    // calc years played role before 200
    if (doctor.begin >= 2000) {
      return [
        ...acc,
        {
          doctorNumber: doctor.number,
          playedBy: doctor.actor,
          yearsPlayed: doctor.end - doctor.begin
        }
      ];
    }

    return acc;
  };

  const expected = [
    { doctorNumber: 9, playedBy: "Christopher Eccleston", yearsPlayed: 0 },
    { doctorNumber: 10, playedBy: "David Tennant", yearsPlayed: 5 },
    { doctorNumber: 11, playedBy: "Matt Smith", yearsPlayed: 3 },
    { doctorNumber: 12, playedBy: "Peter Capaldi", yearsPlayed: 0 }
  ];
  expect(doctors.reduce(doctorsRole, [])).toEqual(expected);
});

// 3. Write a function that takes a string and returns an object representing the character
// count for each letter.Use.reduce to build this object.

// ```js
// ex.countLetters('abbcccddddeeeee'); // => {a:1, b:2, c:3, d:4, e:5}
// const countLetters = string => {
//   your code here
// };
// ```
it("should return a string with count of character", () => {
  const countLetters = "abbcccddddeeeee";

  const count = countLetters.split("").reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});

  const expected = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  expect(count).toEqual(expected);
});

// 4. Write a function that takes a string and a target, and returns true or false if the target is present in the string.
//   Use.reduce to acomplish this.

// ```js
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false
// const isPresent = (string, target) => {
//   code here
// };
// ```

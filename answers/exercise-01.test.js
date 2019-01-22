// 1.  Write a function capitalize that takes a string and
// uses`.map` to return the same string in all caps.Write test to it.

export const capitalize = name =>
  name
    .split('')
    .map(letter => letter.toUpperCase())
    .join('');

it('should capitalize all letters in a string using map', () => {
  const name = 'erica';

  expect(capitalize(name)).toEqual('ERICA');
});

// 2.  Now write a new function called swapCase that takes a string of words and uses.map and your newly written capitalize()
// function to return a string where every other word is in all caps.Write a test to test the function.
// ```js
//     ex: const string = 'hello world'
//     will return 'hello WORLD'
//     ```

it('should capitalize every other word in a string', () => {
  const name = 'erica ashly naughton miller';

  const swapCase = name =>
    name
      .split(' ')
      .map((word, idx) => (idx % 2 === 0 ? capitalize(word) : word))
      .join(' ');

  expect(swapCase(name)).toEqual('erica ASHLY naughton MILLER');
});

// 3.  Convert the mock - data set to an object where movieId will be the unique key for each item.
//     ```js
//     //example
//     const moviesById = {
//       1: { id: 1, name: '', title: '', time: '', theaterAddress: '' },
//       2: { id: 1, name: '', title: '', time: '', theaterAddress: '' }
//     };
//     ```

it('should convert an array to object and group by id', () => {
  const movieData = [
    {
      id: 1,
      genre: 'Crime|Drama',
      title: 'Godfather: Part II, The',
      time: '7:47 PM',
      theaterAddress: '228 Manley Drive'
    }
  ];

  const arrayToObject = (arr, key) => {
    Object.assign({}, ...arr.map(item => ({ [item[key]]: item })));
  };

  expect(arrayToObject(movieData, 'id')).toEqual({
    1: {
      id: 1,
      genre: 'Crime|Drama',
      title: 'Godfather: Part II, The',
      time: '7:47 PM',
      theaterAddress: '228 Manley Drive'
    }
  });
});

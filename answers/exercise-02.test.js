import { movieData } from '../exercises/mock-data';

//Write a JavaScript program which accept a number as input and insert dashes(-)
//between each two even numbers.For example if you accept 025468 the output should be 0 - 254 - 6 - 8

it('addDashes function should add dashes in between two even numbers', () => {
  const addDashes = number => {
    const tempArr = number.split('');
    const callBackFunction = (item, idx, arr) => {
      if (item % 2 === 0 && arr[idx + 1] % 2 === 0) {
        return `${item}-`;
      }

      return item;
    };
    return tempArr.map(callBackFunction).join('');
  };

  expect(addDashes('23487902')).toEqual('234-8790-2');
});

//Using the mock movieData calculate number of movies where the genre is comedy
it('should filter the movieData set to return data set that includes comedy as a genre', () => {
  const convertedMovieData = movieData.map(movie => ({
    ...movie,
    genre: movie.genre.split('|')
  }));

  const filteredArray = convertedMovieData.filter(movie =>
    movie.genre.includes('Comedy')
  );

  expect(filteredArray.length).toEqual(6);
});

//Using the mock movieData filter the movies where the genre is either comedy or fantasy
//Doran
it('should return the movieDate including comedy or fantasy', () => {
  const convertedMovieData = movieData.map(movie => ({
    ...movie,
    genre: movie.genre.split('|')
  }));

  const filteredArray = convertedMovieData.filter(movie =>
    movie.genre.includes('Comedy' || 'Fantasy')
  );
  const expected = [
    {
      id: 1,
      title: 'The Gamers',
      genre: 'Adventure|Comedy|Fantasy',
      time: '11:30 PM',
      address: '317 Northwestern Circle'
    },
    {
      id: 5,
      title: 'Dickie Roberts: Former Child Star',
      genre: 'Comedy',
      time: '1:31 PM',
      address: '6 Portage Crossing'
    },
    {
      id: 7,
      title: 'Complete History of My Sexual Failures, A',
      genre: 'Comedy|Documentary',
      time: '2:40 PM',
      address: '82 Ryan Park'
    },
    {
      id: 8,
      title: 'Halloweentown High',
      genre: 'Adventure|Children|Comedy|Fantasy',
      time: '3:45 PM',
      address: '0 Nancy Street'
    },
    {
      id: 9,
      title: 'Moving McAllister',
      genre: 'Comedy',
      time: '3:34 PM',
      address: '4 Swallow Center'
    },
    {
      id: 18,
      title: 'Singing Marine, The',
      genre: 'Comedy|Musical|Romance',
      time: '1:37 PM',
      address: '54399 Myrtle Alley'
    }
  ].map(movie => ({ ...movie, genre: movie.genre.split('|') }));

  expect(filteredArray).toEqual(expected);
});

//Write a JavaScript function to remove a specific element from an array.
it('remove_array_element remove a specific element from an array ', () => {
  const foo = [1, 2, 3, 4, 5, 6, 7];
  const remove_array_element = (arr, element) =>
    arr.filter(item => item !== element);
  expect(remove_array_element(foo, 4)).toEqual([1, 2, 3, 5, 6, 7]);
});

//Write a JavaScript function to find an array contains, a specific element
it('contains should return true if it includes specific element ', () => {
  const foo = [1, 2, 3, 4, 5];
  const contains = (arr, element) => {
    return !!arr.filter(item => item === element).length;
  };
  expect(contains(foo, 4)).toEqual(true);
});

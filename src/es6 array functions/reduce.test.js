/**
 * reduce is also an Array
 * Array.reduce(callBack, initalValue)
 * Parameters of the callBack function is accu, currentValue, currentIdx, array
 * function callBack(acc, currentValue, currentIdx, array)
 * return single value could be a string, an array or an object
 */

it('reduce function should return accumulated value, case when the initialValue is not defined', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const callBack = (acc, currentValue) => acc + currentValue;

  expect(arr.reduce(callBack)).toEqual(28);
});

it('reduce function should return accumulated value, case when the initialValue is defined', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const callBack = (acc, currentValue) => acc + currentValue;
  expect(arr.reduce(callBack, 6)).toEqual(34);
});

//using the given dataset return filteredData set which only includes femlae employees.
//use reduce method to ccomplish this

const employees = [
  {
    id: 1,
    first_name: 'Josias',
    last_name: 'Aspin',
    gender: 'Male'
  },
  {
    id: 2,
    first_name: 'Morlee',
    last_name: 'Heggs',
    gender: 'Male'
  },
  {
    id: 3,
    first_name: 'Sargent',
    last_name: 'Congdon',
    gender: 'Male'
  },
  {
    id: 4,
    first_name: 'Isabella',
    last_name: 'Corish',
    gender: 'Female'
  },
  {
    id: 5,
    first_name: 'Moyna',
    last_name: 'Dayer',
    gender: 'Female'
  }
];
it('should return filteredData set that includes female employees', () => {
  const expected = [
    {
      id: 4,
      first_name: 'Isabella',
      last_name: 'Corish',
      gender: 'Female'
    },
    {
      id: 5,
      first_name: 'Moyna',
      last_name: 'Dayer',
      gender: 'Female'
    }
  ];

  const callBack = (accArray, currentEmployee) => {
    if (currentEmployee.gender === 'Female') {
      return [...accArray, currentEmployee];
    }

    return accArray;
  };

  expect(employees.reduce(callBack, [])).toEqual(expected);
});

// using the above data set convert the data set to an object where the unique key is the id
/* ex: {
          1: { 
            id: 1,
            first_name: 'Josias',
            last_name: 'Aspin',
            gender: 'Male'}
      }

    */

it('arrayToObject should return my array as an object', () => {
  const expected = {
    1: {
      id: 1,
      first_name: 'Josias',
      last_name: 'Aspin',
      gender: 'Male'
    },
    2: {
      id: 2,
      first_name: 'Morlee',
      last_name: 'Heggs',
      gender: 'Male'
    },
    3: {
      id: 3,
      first_name: 'Sargent',
      last_name: 'Congdon',
      gender: 'Male'
    },
    4: {
      id: 4,
      first_name: 'Isabella',
      last_name: 'Corish',
      gender: 'Female'
    },
    5: {
      id: 5,
      first_name: 'Moyna',
      last_name: 'Dayer',
      gender: 'Female'
    }
  };

  const arrayToObject = (arr, key) => {
    const callBack = (accObj, item) => {
      if (key in item) {
        return { ...accObj, [item[key]]: item };
      }

      return accObj;
    };
    return arr.reduce(callBack, {});
  };

  const convertedData = arrayToObject(employees, 'id');

  console.log(convertedData);
  expect(convertedData).toEqual(expected);
});

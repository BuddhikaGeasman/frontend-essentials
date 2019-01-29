//creating array
it('create an array using array literal with elements in it', () => {
  const alphabet = ['a', 'b', 'c'];
  expect(alphabet).toEqual(['a', 'b', 'c']);
});

it('create an array using new keyword', () => {
  const myArr = new Array();

  expect(myArr).toEqual([]);
});

it('create an array with length of 10', () => {
  const my10ItemsArr = new Array(10);
  console.log(my10ItemsArr);
  expect(my10ItemsArr.length).toEqual(10);
});

it('create an array with 4 items in it, which the each item is a', () => {
  const myArr = new Array(4).fill('a');
  expect(myArr).toEqual(['a', 'a', 'a', 'a']);
});

it('create an array with  natural numbers 0-9 in it', () => {
  const myNumArr = [...Array(10).keys()];
  expect(myNumArr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

//access an item by idx and change the value
it('in my array make the idx = 3 to be C', () => {
  const myArr = new Array(5);
  myArr[3] = 'C';

  expect(myArr).toEqual([, , , 'C', ,]);
});

it('add D to my alpha array', () => {
  //how to use the push method, push method mutates the originbal array
  const alpha = ['a', 'b', 'c'];
  alpha.push('D');

  expect(alpha[3]).toEqual('D');
});

// fun methods

// problem: add item 'B' to the second position,
// but don't mutate the original array
it("let's use map method to manipulate data and create copy of original array", () => {
  const myArr = [1, 2, 3, 4, 5];
  const newArr = myArr.map((item, idx) => (idx === 1 ? 'B' : item));
  //console.log('myArr', myArr);
  expect(newArr[1]).toEqual('B');
});

//problem: using studentsArray create an array that contains the first names
it("should create an array with students's first name in it", () => {
  const studentsArray = [
    {
      firstName: 'Doran',
      gradeLevel: 4,
      subject: 'Science'
    },
    {
      firstName: 'Buddhika',
      gradeLevel: 4,
      subject: 'Math'
    },
    {
      firstName: 'Erica',
      gradeLevel: 5,
      subject: 'Math'
    }
  ];

  const studentsFirstName = studentsArray.map(student => student.firstName);

  expect(studentsFirstName).toEqual(['Doran', 'Buddhika', 'Erica']);
});

//problem: using studentsData array create a new array with subjects in it,
// if the subject is Science change that subject to Math

it('create an array with subjects', () => {
  const studentsData = [
    {
      firstName: 'Doran',
      gradeLevel: 4,
      subject: 'Science'
    },
    {
      firstName: 'Buddhika',
      gradeLevel: 4,
      subject: 'Math'
    },
    {
      firstName: 'Erica',
      gradeLevel: 5,
      subject: 'Math'
    }
  ];

  const subjects = studentsData.map(student =>
    student.subject === 'Science' ? 'Math' : student.subject
  );

  expect(subjects).toEqual(['Math', 'Math', 'Math']);
});

//problem: using studentsData create an array which each item is an object whose properties are name and grade
it('should create an array with student name and grade in it', () => {
  const studentsDataById = {
    1: {
      name: 'Doran',
      subject: 'Math',
      grade: 3
    },

    2: {
      name: 'Erica',
      subject: 'Science',
      grade: 4
    },

    3: {
      name: 'Kyle',
      subject: 'Math',
      grade: 4
    },

    4: {
      name: 'Buddhika',
      subject: 'Science',
      grade: 3
    }
  };

  const studentsArray = Object.values(studentsDataById).map(student => ({
    name: student.name,
    grade: student.grade
  }));
  expect(studentsArray).toEqual([
    { name: 'Doran', grade: 3 },
    { name: 'Erica', grade: 4 },
    { name: 'Kyle', grade: 4 },
    { name: 'Buddhika', grade: 3 }
  ]);
});

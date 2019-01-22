//creating a new object
it('should return the type as an object', () => {
  const myObj1 = new Object();
  const myObj2 = {};

  expect(typeof myObj1).toEqual('object');
  expect(typeof myObj2).toEqual('object');
});

//accessing properties from an object from dot notation
it('should display name as Erica from person object', () => {
  const person = {
    name: 'Erica'
  };
  expect(person.name).toEqual('Erica');
});

//accessing properties from an object using bracket notation
//Access properties of an object when the property names are variable
it('should display city from person object', () => {
  const person = {
    city: 'Austin'
  };
  expect(person['city']).toEqual('Austin');
});

//modifying a value in an object

it('should change the city to Houston in person object', () => {
  const person = {
    city: 'Austin'
  };

  person.city = 'Houston';
  expect(person.city).toEqual('Houston');
});

it('should change the city to New Mexico in person object', () => {
  const person = {
    city: 'Austin'
  };

  person['city'] = 'New Mexico';

  expect(person['city']).toEqual('New Mexico');
});

it('should add age to the person object', () => {
  const person = {
    name: 'Bob',
    job: 'Builder'
  };

  person['city'] = 'Austin';
  person.age = 55;

  expect(person).toEqual({
    name: 'Bob',
    job: 'Builder',
    age: 55,
    city: 'Austin'
  });
});

//spread operator
it('spread operator should create immutable objects', () => {
  const person = {
    name: 'Bob',
    city: 'Austin',
    age: 55,
    workplace: 'Eduphoria!',
    job: 'Developer'
  };

  const person2 = {
    ...person,
    name: 'Will',
    age: 45,
    city: 'Denver',
    kids: 2
  };

  //console.log('person', person, 'person2', person2);

  expect({
    name: 'Will',
    city: 'Denver',
    age: 45,
    workplace: 'Eduphoria!',
    job: 'Developer',
    kids: 2
  }).toEqual(person2);
});

it("let's create a shallow copy of an object and add values to it", () => {
  const animal = {
    type: 'cat',
    legs: 4,
    domestic: 'yes'
  };

  const foo = Object.assign({}, animal, { type: 'dog' });

  expect(foo).toEqual({
    type: 'dog',
    legs: 4,
    domestic: 'yes'
  });
});

//object desturturing
const myFunc = name => `my name is: ${name}`;

const myNewFunc = ({ name }) => `my name is ${name}`;

it('when I run myFunc display the name argument as it is', () => {
  expect(myFunc(55)).toEqual('my name is: 55');
});

it('when I run myNewFunc, it should only care about the property named as name', () => {
  const person = { name: 'Bob', age: 55 };
  expect(myNewFunc(person)).toEqual('my name is Bob');
});

it('showJobDetails should return jobDetails', () => {
  const showJobDetails = ({ job: { name } }) => `Job is ${name}`;
  const person = {
    name: 'Bob',
    job: {
      name: 'Dev',
      years: 4
    }
  };
  expect(showJobDetails(person)).toEqual('Job is Dev');
});

//rest parameter
const person = {
  name: 'Bob',
  age: 55,
  job: 'DEV',
  city: 'Denver'
};

const { name, age, ...rest } = person;

// console.log(rest, name);

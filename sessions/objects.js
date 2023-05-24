const person = {
  name: 'Héctor',
  lastname: 'Triana',
  greet: function () {
    console.log('Hello, my name is', this.name ? this.name : 'John');
  },
};

// console.log(person['name']);
// console.log(person['lastname']);

// console.log();

// console.log(person.name);
// console.log(person.lastname);

// console.log();

// person.greet();
// console.log(person['greet']);
// person['greet']();

// console.log(Object.keys(person));
// console.log();
// console.log(Object.values(person));
// console.log();
// console.log(Object.entries(person));

// const phoneObj = {
//   phone: '+573207200141',
//   name : "pedro",
// };

// const personWithPhone = Object.assign({ key: "value" }, person, phoneObj);
// console.log(personWithPhone);

// console.log(Boolean(person.name));
// console.log(person.hasOwnProperty('name'));

// person.id = 1;
// console.log(person);

// delete person.name;
// person.greet();
// delete person['greet'];
// Reflect.deleteProperty(person, 'lastname');
// console.log(person);

// Object.freeze(person);
// delete person.name;
// Reflect.deleteProperty(person, 'name');
// person.name = "Pedro";
// console.log(person);

// const arr_obj = [
//   {
//     id: 1,
//     name: "John Doe"
//   },
//   {
//     id: 2,
//     name: "Jane Doe"
//   }
// ];

// console.log(arr_obj);
// console.log();

// const [obj1, obj2] = arr_obj;
// console.log(obj1);
// console.log(obj2);

// const { id, name } = obj1;
// console.log("id: ", id);
// console.log('name: ', name);

// const arr_obj1 = [
//   {
//     id: 3,
//     name: 'Jenn Doe',
//   },
// ];

// const arr = [...arr_obj, ...arr_obj1];
// console.log(arr);

// const array = [1,2,3,4];
// const obj = {
//   ...array,
// }
// console.log(obj);

// const array_to_transfer = [...array, 5, 6];
// console.log(array_to_transfer);


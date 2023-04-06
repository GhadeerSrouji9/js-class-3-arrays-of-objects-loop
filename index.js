const customers = [{
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com'

}]
const person = function(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i].firstName} ${array[i].lastName}, ${array[i].email}`)
  }
};
person(customers);
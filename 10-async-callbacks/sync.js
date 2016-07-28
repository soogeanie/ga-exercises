// var students = ['bob', 'sara'];
// console.log('before loop');
//
// for(var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }
//
// console.log('after loop');

var students = ['sara', 'bob', 'ashley'];

console.log('before loop');

students.forEach(function(studentName) {
  console.log('looping', studentName);
});

console.log('after loop');

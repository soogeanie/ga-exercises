var students = ['andrew', 'kevin', 'kyleigh'];

function iterator(ary) {
  return function() {
    return ary.pop();
  };
}

var studentGetter = iterator(students);
console.log(studentGetter());
console.log(studentGetter());

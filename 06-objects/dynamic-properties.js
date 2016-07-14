var students = {};

students["bob"] = 99;
students["sam"] = 82;
students["fred"] = 69;

var studentName = "fred";

console.log(studentName + " score was " + students[studentName]);

for(var foo in students) {
  console.log(foo + "'s score is " + students[foo] + ".");
}

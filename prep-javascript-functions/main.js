function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  const minutes = (hours * 60);
  return minutes;
}
var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGretting(name) {
  const greeting = ('Hello ' + name);
  return greeting;
}
var greeting = getGretting('John');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return 5 * (num1 + num2);
}
var ans = addAndMultiplyBy5(10, 5);
console.log(ans);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var ans2 = multiplyAndDivideBy5(35, 10);
console.log(ans2);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}
var ans3 = subtractTwoNumbers(22, 7);
console.log(ans3);

function getCircleCircumference(radius) {
  return (2 * Math.PI * radius);
}
var ans4 = getCircleCircumference(5);
console.log(ans4);

function getFullName(firstName, lastName) {
  const fullname = (firstName + ' ' + lastName);
  return fullname;
}
var fullname = getFullName('Juan', 'Ramirez');
console.log(fullname);

function cube(number) {
  return (Math.pow(number, 3));
}
var ans5 = cube(5);
console.log(ans5);

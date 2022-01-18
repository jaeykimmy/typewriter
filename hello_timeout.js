// setTimeout(() => {
//   console.log('43llo th3r3 w0r1d');
// }, 3000);

let splitArr = '43llo th3r3 w0r1d'.split(' ');

for (let i = 0; i < splitArr.length; i++) {
  setTimeout(() => {
    console.log(splitArr[i])}, 1000);
}




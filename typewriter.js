const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => process.stdout.write(sentence[i]), 50 * i);
}

// let splitArr = '43llo th3r3 w0r1d'.split(' ');
// for (let i = 0; i < splitArr.length; i++) {
//   setTimeout(() => console.log(splitArr[i]), 1000 * i);
// }


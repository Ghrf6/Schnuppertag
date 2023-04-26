let counter = 1
for (let i = 0; i < 100; i++) {
  if (counter % 5 === 0 && counter % 3 === 0) {
    console.log('FizzBuzz')
    document.write(' FizzBuzz<br>')
  } else if (counter % 3 === 0) {
    console.log('Fizz')
    document.write(' Fizz <br>')
  } else if (counter % 5 === 0) {
    console.log('Buzz')
    document.write(' Buzz <br>')
  } else {
    console.log(counter)
    document.write(' ' + counter + '<br>')
  }
  counter++
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

console.log('questão 1.')

for(let index = 0;index < numbers.length; index++) {
  console.log(numbers[index])
  sum = sum + numbers[index]

}
console.log('questão 2: ' + 'o resultado da soma é:'+ sum)

let media = sum / numbers.length
console.log('questão 3: ' + 'o resultado da média é:'+ media)

if (media > 20) {
  console.log('questão 4: '+"valor maior que 20")
} else {
  console.log("valor menor ou igual a 20")
}


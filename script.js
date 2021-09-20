// // // // // // // // // // // const info = {
// // // // // // // // // // //     [Symbol('a')]: "b"
// // // // // // // // // // // }
// // // // // // // // // // // console.log(info)
// // // // // // // // // // // console.log(Object.keys(info))
// // // // // // // // // // //
// // // // // // // // // // // const value = {number: 10}
// // // // // // // // // // // const multiply = (x = {...value}) => {
// // // // // // // // // // //     console.log((x.number *= 2))
// // // // // // // // // // // }
// // // // // // // // // // // multiply()
// // // // // // // // // // // multiply()
// // // // // // // // // // // multiply(value)
// // // // // // // // // // // multiply(value)
// // // // // // // // // // //
// // // // // // // // // // // const getUser = user => {name: user.name, age: user.age}
// // // // // // // // // // // const user = {name: 'taras', age: 26}
// // // // // // // // // // // // console.log(getUser(user))
// // // // // // // // // // // const settings = {
// // // // // // // // // // //     username: 'asd',
// // // // // // // // // // //     level: 19,
// // // // // // // // // // //     health: 90
// // // // // // // // // // // }
// // // // // // // // // // // const data = JSON.stringify(settings, ["level", "health"])
// // // // // // // // // // // console.log(data)
// // // // // // // // // // // const name = "taras"
// // // // // // // // // // // age = 27
// // // // // // // // // // // console.log(delete name)
// // // // // // // // // // // console.log(delete age)
// // // // // // // // // //
// // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // // console.log(sumFracts([[1, 2], [1, 3], [1, 4]]))
// // // // // // // // // //
// // // // // // // // // //
// // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // // // Require puppeteer
// // // // // // // // // // // const puppeteer = require('puppeteer');
// // // // // // // // // // // (async () => {
// // // // // // // // // // // // Create an instance of the chrome browser
// // // // // // // // // // //     const browser = await puppeteer.launch();
// // // // // // // // // // // // Create a new page
// // // // // // // // // // //     const page = await browser.newPage();
// // // // // // // // // // // // Set some dimensions to the screen
// // // // // // // // // // //     page.setViewport({
// // // // // // // // // // //         width: 1920,
// // // // // // // // // // //         height: 1080
// // // // // // // // // // //     });
// // // // // // // // // // // // Navigate to Our Code World
// // // // // // // // // // //     await page.goto('http://site.com');
// // // // // // // // // // // // Create a screenshot of Our Code World website
// // // // // // // // // // //     await page.screenshot({
// // // // // // // // // // //         path: 'screenshot.png'
// // // // // // // // // // //     });
// // // // // // // // // // // // Close Browser
// // // // // // // // // // //     browser.close();
// // // // // // // // // // // })();
// // // // // // // // // //
// // // // // // // // // //
// // // // // // // // // // // function func(s,a,b){
// // // // // // // // // // //     let match_empty = /^$/
// // // // // // // // // // //     s.match(match_empty) ? -1 :
// // // // // // // // // // //         let i = s.length-1; let aindex = -1 ; let bindex= -1
// // // // // // // // // // // }
// // // // // // // // // // // while(aindex && bindex && i >=0)
// // // // // // // // // // //     (s.substring(i,i+1) == (a && b))
// // // // // // // // // //
// // // // // // // // // //
// // // // // // // // // // function factorial(n){
// // // // // // // // // //     //your code here
// // // // // // // // // //     if(n === 0 && n === 1){
// // // // // // // // // //         return  1
// // // // // // // // // //     }else {
// // // // // // // // // //         let num = 1
// // // // // // // // // //       while(n){
// // // // // // // // // //        num = n * num
// // // // // // // // // //           n--
// // // // // // // // // //         }
// // // // // // // // // //         return  num
// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // // // console.log(factorial(5))
// // // // // // // // //
// // // // // // // // //
// // // // // // // // // // const  openOrSenior = (data) => {
// // // // // // // // // //     // ...
// // // // // // // // // // return data.map(member => {
// // // // // // // // // //     if(member[0] >= 55 && member[1] > 7){
// // // // // // // // // //         return 'Senior'
// // // // // // // // // //     }else {
// // // // // // // // // //         return 'Open'
// // // // // // // // // //     }
// // // // // // // // // //
// // // // // // // // // // })
// // // // // // // // // //
// // // // // // // // // // }
// // // // // // // // // // console.log(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))
// // // // // // // // //
// // // // // // // // // // // функция, которая заменяет все "WUB" на пустые пробелы
// // // // // // // // // // function songDecoder(song){
// // // // // // // // // //     // ...
// // // // // // // // // //     return song.replace(/(WUB)+/g, ' ' ).trim()
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // console.log(songDecoder('AWUBBWUBC'))
// // // // // // // // //
// // // // // // // // // // let  isAnagram = function(test, original) {
// // // // // // // // // //     return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
// // // // // // // // // //
// // // // // // // // // // };
// // // // // // // // //
// // // // // // // // //
// // // // // // // // // //
// // // // // // // // // // function anagrams(word, words) {
// // // // // // // // // //     let result = []
// // // // // // // // // //     for (let i = 0; i < words.length; i++) {
// // // // // // // // // //         console.log(words[i])
// // // // // // // // // //         if (words[i].split('').sort().join('') === word.split('').sort().join('')) {
// // // // // // // // // //             result.push(words[i])
// // // // // // // // // //         }
// // // // // // // // // //     }
// // // // // // // // // //     return result
// // // // // // // // // //
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
// // // // // // // // // //
// // // // // // // // //
// // // // // // // // // //
// // // // // // // // // // const anagrams1 = (word, words) => {
// // // // // // // // // //     return words.map((el) => {
// // // // // // // // // //         if (el.split('').sort().join('') === word.split('').sort().join('')) {
// // // // // // // // // //             return el
// // // // // // // // // //         } else {
// // // // // // // // // //             return []
// // // // // // // // // //         }
// // // // // // // // // //     }, []).filter(el => {
// // // // // // // // // //         if (typeof el === "string") {
// // // // // // // // // //             return el
// // // // // // // // // //         }
// // // // // // // // // //     })
// // // // // // // // // // }
// // // // // // // // // // console.log(anagrams1('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
// // // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // const readline = require('readline').createInterface({
// // // // // // // // // //     input: process.stdin,
// // // // // // // // // //     output: process.stdout
// // // // // // // // // // });
// // // // // // // // // //
// // // // // // // // // // readline.on('line', line => {
// // // // // // // // // //     readline.close();
// // // // // // // // // //     let flag = true;
// // // // // // // // // //     let num = line;
// // // // // // // // // //     if(num < 2){
// // // // // // // // // //         flag = false;
// // // // // // // // // //     }else {
// // // // // // // // // //         for(let i = 2; i <= Math.sqrt(num); i++){
// // // // // // // // // //
// // // // // // // // // //             if(num % i === 0  ){
// // // // // // // // // //                 flag = false;
// // // // // // // // // //                 break;
// // // // // // // // // //             }
// // // // // // // // // //         }
// // // // // // // // // //     }
// // // // // // // // // //
// // // // // // // // // //     console.log(flag?'True': 'False');
// // // // // // // // // // });
// // // // // // // // // //
// // // // // // // // // // const readline = require('readline').createInterface({
// // // // // // // // // //     input: process.stdin,
// // // // // // // // // //     output: process.stdout
// // // // // // // // // // })
// // // // // // // // // //
// // // // // // // // // // readline.on('line',  (line) => {
// // // // // // // // // //     const numbers = line.split(' ')
// // // // // // // // // //     const result = []
// // // // // // // // // //
// // // // // // // // // //
// // // // // // // // // //
// // // // // // // // // //     const primeNums = (n,m) =>  {
// // // // // // // // // //         const isPrime =(num) =>  {
// // // // // // // // // //             for (let i = 2; i<= Math.sqrt(num); i++){
// // // // // // // // // //                 if(num % i === 0){
// // // // // // // // // //                     return false
// // // // // // // // // //                 }
// // // // // // // // // //             }
// // // // // // // // // //             return true
// // // // // // // // // //         }
// // // // // // // // // //
// // // // // // // // // //         if(n < m && n > 0 && m > 0 ){
// // // // // // // // // //
// // // // // // // // // //             for (let i = n; i <= m; i++){
// // // // // // // // // //                 if(isPrime(i)){
// // // // // // // // // //                     result.push(i)
// // // // // // // // // //                 }
// // // // // // // // // //             }
// // // // // // // // // //         }
// // // // // // // // // //
// // // // // // // // // //         console.log(result.join(' '))
// // // // // // // // // //     }
// // // // // // // // // //     primeNums(numbers[0], numbers[1])
// // // // // // // // // //     readline.close()
// // // // // // // // // //
// // // // // // // // // // })
// // // // // // // // //
// // // // // // // // //
// // // // // // // // // function convertFrac(lst){
// // // // // // // // // let result = ''
// // // // // // // // //     let sum = 0
// // // // // // // // //     for(let i = 0; i < lst.length; i++){
// // // // // // // // //         // console.log(lst[i][0]/lst[i][1])
// // // // // // // // //         // console.log(lst[i])
// // // // // // // // //         // console.log(lst[i])
// // // // // // // // //         for (let j = 0; j< lst.length; j++){
// // // // // // // // //             console.log(lst[j]/lst[j+1])
// // // // // // // // //         }
// // // // // // // // //     }
// // // // // // // // //
// // // // // // // // // return  sum
// // // // // // // // //
// // // // // // // // //
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // console.log(convertFrac([[1, 2], [1, 3], [1, 4]]))
// // // // // // // // // //"(6,12)(4,12)(3,12)"
// // // // // // // // // let nums = [[1, 2], [1, 3], [1, 4]]
// // // // // // // // // console.log
// // // // // // // // // (0.5 == 5/10)
// // // // // // // //
// // // // // // // // const  tankVol = (h, d, vt) =>  {
// // // // // // // //     // your code
// // // // // // // //
// // // // // // // // }
// // // // // // // // function prime(num) {
// // // // // // // //
// // // // // // // //
// // // // // // // // }
// // // // // // //
// // // // // // // const isPrime =(num) => {
// // // // // // //     for (let i = 2; i <= Math.sqrt(num); i++) {
// // // // // // //         if (num % i === 0) {
// // // // // // //             return false
// // // // // // //         }
// // // // // // //     }
// // // // // // //     return num > 1
// // // // // // // }
// // // // // // // const primeNums = (num) =>  {
// // // // // // //     let nums = []
// // // // // // //         for (let i = 2; i <= num; i++){
// // // // // // //             if(isPrime(i)){
// // // // // // //                 nums.push(i)
// // // // // // //             }
// // // // // // //         }
// // // // // // //         if(num === 1 || num === 0){
// // // // // // //             return []
// // // // // // //     }
// // // // // // //     return nums
// // // // // // // }
// // // // // // // console.log(primeNums(10))
// // // // // // // console.log(primeNums(1))
// // // // // //
// // // // // // // сумма двух самых маленьких чисел
// // // // // // // function sumTwoSmallestNumbers(numbers) {
// // // // // // //     //Code here
// // // // // // //     const [firstNum, secondNum] = numbers.sort((a,b) => a-b)
// // // // // // //     return  firstNum + secondNum
// // // // // // // }
// // // // // // //
// // // // // // // console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
// // // // // // //
// // // // // //
// // // // // // // replace every letter with its position in the alphabet.
// // // // // // // function alphabetPosition(text) {
// // // // // // //     const alphabet= 'abcdefghijklmnopqrstuvwxyz'
// // // // // // //
// // // // // // //     return text.toLowerCase().replace(/[^a-zA-Z]/g, '').split('')
// // // // // // //         .map(a => alphabet.indexOf(a)+1).join(' ')
// // // // // // // }
// // // // // // //
// // // // // //
// // // // // // // counts a vowels in a string
// // // // // // // function getCount(str) {
// // // // // // //     let vowelsCount = 0;
// // // // // // //     for(const letter of str){
// // // // // // //         if(letter.match(/[aeiou]/g)){
// // // // // // //             vowelsCount++
// // // // // // //         }
// // // // // // //     }
// // // // // // //     /
// // // // // // //
// // // // // // //
// // // // // // //     return vowelsCount;
// // // // // // // }
// // // // // //
// // // // // // // function getCount(str) {
// // // // // // //     let vowelsCount = 0;
// // // // // // //     let vowels = ["a","e","i","o","u"];
// // // // // // //     for(let i = 0;i < str.length;i++){
// // // // // // //         for(let j=0;j<vowels.length;j++){
// // // // // // //             if(str[i] === vowels[j]){
// // // // // // //                 vowelsCount++;
// // // // // // //             }
// // // // // // //         }
// // // // // // //     }
// // // // // // //
// // // // // // //     return vowelsCount;
// // // // // // // }
// // // // // //
// // // // // // //
// // // // // // // function arraysSimilar(arr1, arr2) {
// // // // // // //     // TODO: Implement your arraysSimilar
// // // // // // //     if(arr1.length !== arr2.length){
// // // // // // //         return false
// // // // // // //     }
// // // // // // //     arr1.sort()
// // // // // // //     arr2.sort()
// // // // // // //
// // // // // // //     for (let i = 0; i < arr1.length; i++){
// // // // // // //         if(arr1[i] !== arr2[i]) return false
// // // // // // //     }
// // // // // // //     return true
// // // // // // // }
// // // // // //
// // // // // //
// // const isPrime =(n) => {
// //     for (let i = 2; i <= Math.sqrt(n); i++) {
// //         if (n % i === 0) {
// //             return false
// //         }
// //     }
// //     return n > 1
// // }
// // const gap = (g,m,num) =>  {
// //     let nums = []
// //         for (let i = m; i <= num; i++){
// //             isPrime(i) ? nums.push(i) : null
// //         }
// //     let numbers = []
// //     for(let j = 0; j < nums.length; j++){
// //         Math.abs(nums[j+1] - nums[j]) === g ? numbers.push(nums[j], nums[j+1]) : null
// //     }
// //     if (numbers[0] === undefined || numbers[1] === undefined) {
// //         return null
// //     }
// //     return [numbers[0], numbers[1]]
// //  }
// // console.log(gap(2,100,110))
// // console.log(gap(6,100,110))
// // console.log(gap(2,4900,4919))
// // // //
// // // //
// // // // // //
// // // // // //
// // // // //
// // // // // const  validParentheses = (parens) => {
// // // // //     //TODO
// // // // //
// // // // //     const open = ['(', '{', '[']
// // // // //     const closed = [')', '}', ']']
// // // // //     let result = []
// // // // //
// // // // //     for (let i = 0; i < parens.length; i++){
// // // // //         if(open.includes(parens[i])) {
// // // // //           result.push(parens[i])
// // // // //         }else {
// // // // //             if(closed.indexOf(parens[i] ) === open.indexOf(result[result.length -1] )) {
// // // // //                 result.pop()
// // // // //             }else {
// // // // //                 return false
// // // // //             }
// // // // //         }
// // // // //     }
// // // // //     return result.length === 0
// // // // // }
// // // // // console.log(validParentheses('(((())))('))
// // // // // console.log(validParentheses('()'))
// // // // // console.log(validParentheses('('))
// // // //
// // // //
// // // //
// // // // Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba
// // // // b
// // // //
// // // // let lastDigit = function(str1, str2){
// // // //
// // // //     // if exponent is 0, return 1
// // // //
// // // //     if (parseInt(str2) === 0) return 1;
// // // //
// // // //     // otherwise...
// // // //     // 0 always returns 0
// // // //     // 1 always returns 1
// // // //     // 2 rotates between 2, 4, 8, 6....
// // // //     // 3 rotates between 3, 9, 7, 1....
// // // //     // 4 rotates between 4, 6....
// // // //     // 5 always returns 5
// // // //     // 6 always returns 6
// // // //     // 7 rotates between 7, 9, 3, 1....
// // // //     // 8 rotates between 8, 4, 2, 6....
// // // //     // 9 rotates between 9, 1....
// // // //
// // // //     // because we only need the final digit of str1 to determine the result, let's capture it
// // // //     let seed = parseInt(str1.slice(-1)) % 10;
// // // //     // at worst, the result of any ending digit rotates through four cases, we need two digits here becasue 111%4 === 11%4 != 1%4
// // // //     let exp = parseInt(str2.slice(-2)) % 4;
// // // //     if (exp === 0) exp = 4;  // if the exponent is a multiple of 4, we want to use '4', not '0' in our function.
// // // //
// // // //
// // // //     // so what we can do in shorthand is get the final digit of a number with an exponent of 1-4 and this is enough to predict any case.
// // // //     //
// // // //
// // // //     return Math.pow(seed, exp) % 10;
// // // // }
// // //
// // // // let a = ['cat', 'dog']
// // // // a[100] = 'caw'
// // // // console.log(a.length)
// // //
// // // var obj
// // // console.log(obj)
// //
// //
// // // function one (name, age){
// // //     this.age = 12
// // //     this.name = 'Askar'
// // //     // console.log(this)
// // // }
// // // one()
// // // console.log(one)
// // for(let key in  {1:1, 0:0}) {
// //     console.log(key);
// // }
//
//
// // let name = "Вася";
// // function sayHi() {
// //     console.log(name);
// // }
// //
// // setTimeout(function() {
// //     let name = "Петя";
// //     sayHi();
// // let obj = {
// //     "0": 1,
// //     0: 2
// // };
// // console.log( obj["0"] + obj[0] );
//
//
// // замыкание это момент когда функция имеет доступ до переменных выше стоящего scope
//
//
// //
// // const fib = [1,2,3,4,5,6]
// // for(var  i = 0; i < fib.length; i++){
// //     setTimeout(function (i){
// //         console.log(i)
// //     },0, i)
// // }
//
// // const person = {
// //     surname: 'Michael',
// //     knows: function (about, name){
// //         console.log(`you already know  about ${about} , ${name} ${this.surname}!`)
// //     }
// //
// // }
// //
// // const man = {surname: 'Jackson'}
// //
// // person.knows('machine', 'Bill')
// //
// // person.knows.call(man, 'this world', 'Askar')
// //
// // person.knows.bind(man, 'this world', 'Askar')()
// // const bound = person.knows.bind(man, 'this village ', 'Norman')
// // bound()
// // person.knows.apply(man, ['this world', 'Askar'])
// //
// // person.knows.call(man, ...['this world', 'Askar'])
//
// // метод call() привзяывает контекст обьекта к другой функции и вызывает
//
// // метод apply() аналогичен методу call() , отличие в том что аргументы принимает в массиве []
//
// //если же мы хотим call() использовать как apply() нужно поставить spread оператор перед аргументами
//
// // единственное отличие метода bind() от остальных, это то что он не вызывает функцию сразу , а возвращает новую функцию
//
// // using this in class functions
// // function Person(name, age){
// //     this.name = name
// //     this.age = age
// //     console.log(this)
// // }
// //
// // const askar = new Person('Askar', '19')
//
//
// // binding
//
// // стрелочная функция не создает собственный контекст
//
//
// // __proto__
// //
// // //Object.getPrototypeOf
// //
// // function Book(name, author) {
// //     this.name = name;
// //     this.author = author;
// //     return this;
// // }
// //
// // function Foo(Cclass, name, author) {
// //     return Cclass.call({}, name, author);
// // }
// //
// // var book = Foo(Book, 'js', 'petr');
// // console.log(book.name);
//
// //
// // const func  = () => {
// //     console.log(this)
// // }
// // func()
// // console.log(f
//
// // const palindrom  = (word) => {
// //         word = word.toLowerCase()
// //     let backwords = []
// //     for(let i  = word.length-1; i>= 0; i--){
// //         backwords.push(word[i])
// //     }
// //     let result = backwords.join('')
// //     return   result === word
// // }
// // console.log(palindrom('daD'))
//
// //
// // const readline = require("readline");
// // const fs = require("fs");
// //
// // const path = "./input.txt";
// //
// // const rl = readline.createInterface({
// //     input: fs.createReadStream(path),
// // });
// //
// // let lineno = 1;
// // rl.on("line", function (input) {
// //     console.log("Line number " + lineno + ": " + input);
// //     lineno++;
// // });
//
//
// // function factorial (num) {
// //     let result = 0
// //     for (let i = 0; i <= num; i--) {
// //         if (num <= 1) {
// //             return num
// //         }
// //         result = num[i] * num[i - 1]
// //     }
// //     return result
// // }
// //
// // console.log(factorial(7))
//
// // function fact(n){
// //     let result = 1
// //     while(n){
// //         if(n === 1 || n === 0) break
// //             result = result * n
// //             n--
// //
// //     }
// //     return result
// // }
// //
// // console.log(fact(8))
//
// //
// // function  factorial (num) {
// //     if(num < 0)
// //         return -1;
// //
// //     else if(num === 0)
// //         return 1;
// //      else {
// //         return (num * factorial(num - 1))
// //     }
// //
// // }
// //
// // console.log(factorial(10))
//
// // function factorialize(num) {
// //     var result = num;
// //     if (num === 0 || num === 1)
// //         return 1;
// //     while (num > 1) {
// //         num--;
// //         result *= num;
// //     }
// //     return result;
// // }
// // factorialize(5);
//
// // function factorialize(num) {
// //     if (num === 0 || num === 1)
// //         return 1;
// //     for (var i = num - 1; i >= 1; i--) {
// //         num *= i;
// //     }
// //     return num;
// // }
// // factorialize(5);
//
// /// Дан словарь из городов и дат выступлений рок-группы
//
// /// Необходимо преобразовать словарь (key-value) в массив из названий городов
// /// Вывод городов должен быть в хронологическом порядке
// /// Города в которых концерт уже прошел нужно исключить
// /// Результат ["Казань", "Питер", "Калининград"]
//
// // const concerts = {
// //     'Москва': new Date('2020-04-01'),
// //     'Казань': new Date('2021-07-02'),
// //     'Владивосток': new Date('2020-04-21'),
// //     'Калининград': new Date('2021-07-15'),
// //     'Омск': new Date('2020-04-18'),
// //     'Питер': new Date('2021-07-10'),
// // }
// //
// // function concertsToArray(concerts) { // O(n*log2n)
// //     return Object.keys(concerts)
// //         .filter(city => concerts[city] > new Date()) // O(n)
// //         .sort((a, b) =>  concerts[a] - concerts[b]) // O(N*log2n)
// // }
// //
// // console.log(concertsToArray(concerts));
// //
// // const matrix = [
// //     'XOOXO',
// //     'XOOXO',
// //     'OOOXO',
// //     'XXOXO',
// //     'OXOOO'
// // ]
// //
// // function perimiter(matrix) { // O(N*N)
// //     let p = 0;
// //     for (let i = 0; i < matrix.length; i++) {
// //         for (let j = 0; j < matrix[i].length; j++) {
// //             if(matrix[i][j] === 'X') {
// //                 p += j === 0 || matrix[i][j - 1] === "O"
// //                 p += i === 0 || matrix[i - 1][j] === "O"
// //                 p += i === matrix.length - 1 || matrix[i + 1][j] === "O"
// //                 p += j === matrix[i].length - 1 || matrix[i][j + 1] === "O"
// //             }
// //         }
// //     }
// //     return p;
// // }
// //
// // console.log(perimiter(matrix))
//
// // Написать функцию, которая возвращает
// // массив только с уникальными значениями
// // [1,1,2,2,3,4,5,5] -> [3,4]
//
// // function withoutRepeat(arr) { // O(N*N)
// //     const result = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         let count = 0;
// //         for (let j = 0; j < arr.length; j++) {
// //             if (arr[i] === arr[j]) {
// //                 count++
// //             }
// //         }
// //         if (count === 1) {
// //             result.push(arr[i])
// //         }
// //     }
// //     return result;
// // }
// //
// // function linearWithoutRepeat(arr) { // O(N)
// //     const result = []
// //     const dictionary = {}
// //     for (let i = 0; i < arr.length; i++) {
// //         const item = arr[i];
// //         dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1;
// //     }
// //     for (let i = 0; i < arr.length; i++) {
// //         const item = arr[i];
// //         if (dictionary[item] === 1) {
// //             result.push(item);
// //         }
// //     }
// //     return result;
// // }
// //
// // console.log(linearWithoutRepeat([1,1,2,2,3,4,5,5,5,5, 7, 8, 9, 9]))
//
//
// // найти сумму всех значиений и потомков дерева
// //
// // const tree = [
// //     {
// //         v: 5,
// //         c: [
// //             {
// //                 v: 5
// //             },
// //             {
// //                 v: 10,
// //                 c: [
// //                     {
// //                         v: 11,
// //                     }
// //                 ]
// //             },
// //             {
// //                 v: 11,
// //                 c: [
// //                     {
// //                         v: 12,
// //                         c: [
// //                             {
// //                                 v: 5
// //                             }
// //                         ]
// //                     }
// //                 ]
// //             },
// //         ]
// //     },
// //     {
// //         v: 5,
// //         c: [
// //             {
// //                 v: 7
// //             },
// //             {
// //                 v: 12,
// //                 c: [
// //                     {
// //                         v: 11,
// //                     }
// //                 ]
// //             },
// //             {
// //                 v: 14,
// //             },
// //         ]
// //     }
// // ]
// //
// // function treeSum(tree) {
// //     if (!tree.length) {
// //         return 0;
// //     }
// //     let sum = 0;
// //     let stack = []
// //
// //     tree.forEach(node => stack.push(node));
// //
// //     while (stack.length) {
// //         let node = stack.pop();
// //         sum += node.v;
// //         if(node.c) {
// //             node.c.forEach(n => stack.push(n));
// //         }
// //     }
// //     return sum;
// // }
// //
// // console.log(treeSum(tree));
// //
// // const data = [
// //     [
// //         [1, 1, 0, 0, 0, 1, 0, 1, 1],
// //         [1, 1, 0, 1, 0, 1, 0, 0, 0],
// //         [0, 1, 0, 1, 0, 0, 0, 1, 1]
// //     ],
// //     [
// //         [1, 0, 1],
// //         [1, 1, 1],
// //         [0, 0, 0]
// //     ],
// //     [
// //         [1, 0, 1],
// //         [1, 1, 1],
// //         [0, 0, 1]
// //     ],
// //     [
// //         [1, 0, 1],
// //         [0, 1, 0],
// //     ]
// // ];
// //
// // function buildPath(map, x, y, res) {
// //     // Если находимся за границей массива или
// //     // точку не нужно обрабатывать, то выходим
// //     if (
// //         y < 0 || y >= map.length ||
// //         x < 0 || x >= map[y].length ||
// //         map[y][x] !== 1
// //     )
// //         return;
// //
// //     // Если на потолке
// //     if (y === 0)
// //         res.ceil = true;
// //     // Если на полу
// //     if (y === map.length - 1)
// //         res.floor = true;
// //
// //     // Точку обработали
// //     map[y][x] = -1;
// //
// //     // Проверяем соседние точки
// //     buildPath(map, x, y - 1, res);
// //     buildPath(map, x - 1, y, res);
// //     buildPath(map, x + 1, y, res);
// //     buildPath(map, x, y + 1, res);
// // }
// //
// // function parse(map) {
// //     const res = {
// //         ceil: 0,
// //         floor: 0,
// //         both: 0
// //     };
// //     for (let i = 0; i < map[0].length; i++) {
// //         let testObj = {
// //             ceil: false,
// //             floor: false
// //         };
// //         // проверяем точку на потолке
// //         buildPath(map, i, 0, testObj);
// //         if (testObj.ceil) {  // если было касание потолка
// //             if (testObj.floor)  // и было касание пола
// //                 res.both++;
// //             else
// //                 res.ceil++;
// //         }
// //
// //         testObj = {
// //             ceil: false,
// //             floor: false
// //         };
// //         // проверяем точку на полу
// //         buildPath(map, i, map.length - 1, testObj);
// //         if (testObj.floor) {  // если было касание пола
// //             if (testObj.ceil)  // и было касание потолка
// //                 res.both++;
// //             else
// //                 res.floor++;
// //         }
// //     }
// //     return res;
// // }
// //
// // for (let i = 0; i < data.length; i++)
// //     console.log(parse(data[i]));
//
// //
// // let someData = [
// //     [
// //         [1, 0, 1],
// //         [0, 1, 0],
// //     ],
// //
// //     [
// //         [1, 0, 1],
// //         [1, 1, 1],
// //         [0, 0, 0]
// //     ],
// //     [
// //         [1, 0, 1],
// //         [1, 1, 1],
// //         [0, 0, 1]
// //     ],
// //     [
// //         [1, 1, 0, 0, 0, 1, 0, 1, 1],
// //         [1, 1, 0, 1, 0, 1, 0, 0, 0],
// //         [0, 1, 0, 1, 0, 0, 0, 1, 1]
// //     ],
// //
// // ];
// //
// // function makeRoute(map, x, y, result) {
// //     // Если находимся за границей массива или
// //     // точку не нужно обрабатывать, то выходим
// //     if (
// //         y < 0 || y >= map.length ||
// //         x < 0 || x >= map[y].length ||
// //         map[y][x] !== 1
// //     )
// //         return;
// //
// //     // Если на потолке
// //     if (y === 0)
// //         result.ceil = true;
// //     // Если на полу
// //     if (y === map.length --)
// //         result.floor = true;
// //
// //     // Точку обработали
// //     map[y][x] = -1;
// //
// //     // Проверяем соседние точки
// //     makeRoute(map, x, y--, result);
// //     makeRoute(map, x--, y, result);
// //     makeRoute(map, x++, y, result);
// //     makeRoute(map, x, y++, result);
// // }
// //
// // function parser(map) {
// //     const res = {
// //         ceil: 0,
// //         floor: 0,
// //         both: 0
// //     };
// //     for (let i = 0; i < map[0].length; i++) {
// //         let test = {
// //             ceil: false,
// //             floor: false
// //         };
// //         // проверяем точку на потолке
// //         makeRoute(map, i, 0, test);
// //         if (test.ceil) {  // если было касание потолка
// //             if (test.floor)  // и было касание пола
// //                 res.both++;
// //             else
// //                 res.ceil++;
// //         }
// //
// //         test = {
// //             ceil: false,
// //             floor: false
// //         };
// //         // проверяем точку на полу
// //         makeRoute(map, i, map.length - 1, test);
// //         if (test.floor) {  // если было касание пола
// //             if (test.ceil)  // и было касание потолка
// //                 res.both++;
// //             else
// //                 res.floor++;
// //         }
// //     }
// //     return res;
// // }
// //
// // for (let i = 0; i < someData.length; i++)
// //     console.log(parser(someData[i]));
//
//
// //
//
//
// // function isLeapYear(year) {
// //     // TODO
// //     if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)) {
// //         return true
// //     }
// //     return false
// //
// // }
// //
// // console.log(isLeapYear(1000))
// //
// // function findOdd(arr) {
// //     //happy coding!
// //
// //     let counter = 0
// //     let result = []
// //     for(let i= 0; i< arr.length; i++){
// //         for(let j = 0; j<arr.length; j++){
// //             if( arr[i] === arr[j] ){
// //                 counter++
// //                result.push(arr[j])
// //             }
// //         }
// //         if(counter % 2 !== 0){
// //             return arr[i]
// //         }
// //     }
// //     return 0;
// // }
// //
// // console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))
// // console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))
// // console.log(findOdd())
//
// // function chunkString(str, len) {
// //     let  _size = Math.ceil(str.length/len),
// //         _ret  = new Array(_size),
// //         _offset
// //     ;
// //
// //     for (let  i=0; i<_size; i++) {
// //         _offset = i * len;
// //         _ret[i] = str.slice(_offset, _offset + len);
// //     }
// //
// //     return _ret;
// // }
// //
// // console.log(chunkString('bonjorno', 3))
//
// // const func = (str, num) => {
// //     let size = Math.ceil(str.length/num)
// //     let result = new Array(size)
// //     let n = null
// //     for (let i = 0 ; i < size; i++){
// //         n = i * num
// //         result[i] = str.slice(n, n+num)
// //     }
// //     return result
// // }
// // console.log(func('petya', 2))
// // console.log(func('bonjorno', 3))
//
// // const task = (str, length) => {
// //     let i = 1;
// //     let syllable = "";
// //     return str.split("").reduce((acc, el, idx, arr) => {
// //         if (i < length){
// //             i++;
// //             syllable += arr[idx]
// //         } else if (i === length){
// //             i = 1;
// //             const syll = syllable.concat(arr[idx]);
// //             syllable = "";
// //             return [...acc, syll];
// //         }
// //         if (idx === arr.length - 1 ){
// //             return [...acc, syllable]
// //         }
// //         return [...acc]
// //     }, [])
// // }
// //
// // console.log(task("petya",3));
// // console.log(task("bonjorno",3));
//
//
// // function countBy(x, n) {
// //     let z = [];
// //     for (let i = 1; i <= n; i++){
// //         z[i] = i*x
// //     }
// //     return z.filter(el => el);
// // }
// //
// // console.log(countBy(2,5))
//
//
// // function race(v1, v2, g) {
// //
// //     // your code
// // if(v1 >= v2){
// //     return  null
// // }
// //
// //
// //     let speedDifference = v1 - v2
// //     let resultSeconds  = g * 3600/ speedDifference
// //     // result = [resultSeconds/3600, (resultSeconds%3600)/60, (resultSeconds%3600)%60, ]
// //     v1 = resultSeconds/3600
// //
// //
// // }
//
// // function validPhoneNumber(phoneNumber){
// //     //TODO: Return whether phoneNumber is in the proper form
// // if(phoneNumber.length === 14){
// //     if(phoneNumber[0] === '('){
// //         if(phoneNumber[4] === ')'){
// //             if(phoneNumber[5] === ' '){
// //                 if(phoneNumber[9] === '-'){
// //                     return true
// //                 }
// //             }
// //         }
// //     }
// // }
// // return false
// // }
//
//
// // function Add(x, y) {
// //     let str1 = []
// //     str1.length = y
// //     let str2 = []
// //     str2.length = x
// //     let result = str1.concat(str2)
// //
// // return result.length
// // }
// //
// // console.log(Add(-2,3))
// //
// //
// //
// //
// // let colors = ['red', 'blue','green', 'yellow']
// //
// //     function setColor(arr){
// //     return (arr.map(el => {
// //         return   el.name.style = randomColor()
// //     }))
// //     }
// //
// // console.log(setColor([{name: 'Igor', age: '21' },
// //     {name: 'Igor', age: '21' },{name: 'Igor', age: '21' },
// //     {name: 'Igor', age: '21' }]))
// //
// //
// // function randomColor (){
// //     const index = Math.floor(Math.random() * colors.length)
// //     return colors[index]
// // }
//
//
// // function peelTheOnion (s, d) {
// //     let results = [];
// //     const sum = (arr) => arr.reduce((prev, cur) => prev + cur, 0);
// //
// //     for (let curBase = s % 2 === 0 ? 2 : 1; curBase <= s; curBase += 2) {
// //         const curSum = sum(results);
// //         const next = Math.pow(curBase, d) - curSum;
// //         results.unshift(next);
// //     }
// //
// //     return results;
// //
// // к переменной var можем обращаться до того как они были обьявлены
// // но также если мы обращаемся к let до ее обьявления внутри функции, то это возможно так как обращаемся внутри функ
// // var addTwoNumbers = function(l1, l2) {
// //    l1 =  l1.map(el => el.toString()).join('')
// // l1 = +l1
// //     console.log(l1)
// //   l2 = l2.map(el => el.toString()).join('')
// // l2 = +l2
// //     console.log(l2)
// // let result = l1 + l2
// //     return result.toString().split('').reverse().map(el => +el)
// //
// // };
// // console.log(addTwoNumbers([2,4,3],[5,6,4]))
// // console.log(addTwoNumbers([0],[0]))
//
// // var divide = function(dividend, divisor) {
// //     if((dividend/divisor) < 0){
// //         return Math.ceil((dividend/divisor))
// //     }else if(dividend < 0 && divisor < 0){
// //         return dividend/divisor
// //     }
// //     return Math.floor((dividend/divisor))
// // };
// // console.log(divide(-2147483648,-1))
//
// // function spinWords(string){
// //     //TODO Have fun :)
// //
// //     string =  string.split(' ')
// //     return string.map((  el) => {
// //         if(el.length < 5){
// //            return el
// //         }else {
// //             return el.split('').reverse().join('')
// //         }
// //
// //     }).join(' ')
// //
// // }
// //
// // console.log(spinWords("Hey fellow warriors"))
//
// //this
//
// // контекс это тело родителя
//
// // function getFirstPython(list) {
// //
// //     // Thank you for checking out my kata :)
// //    let result = list.find(el => {
// //           return  el.language === 'Python'
// //     })
// //    return  result? `${result.firstName}, ${result.country}`: 'There will be no Python developers'
// //
// // }
//
// // console.log(getFirstPython( [{ firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
// //     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
// //     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }]))
//
// // function findSenior(list) {
// //     // thank you for checking out the Coding Meetup kata :)
// //    let result = list.map(el => {
// //       return  el.age
// //    })
// //
// //    return list.filter(el => {
// //        return el.age === Math.max(...result)
// //    })
// // }
// //
// // console.log(findSenior( [
// //     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
// //     { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
// //     { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
// //     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// // ]))
//
//
// // function persistence(num) {
// //     //code me
// // let a = 0
// //
// //     while(num >=10){
// //         num = num.toString().split('').map(el => +el).reduce((a,b) => {
// //             return a*b
// //             },0)
// //     a++
// //     }
// //     console.log(num)
// //     return  a
// // }
// //
// // console.log(persistence(39))
//
//
// // new Date().getFullYear()
// // function addUsername(list) {
// //     // thank you for checking out the Coding Meetup kata :)
// // let currentYear = new Date().getFullYear() - list.age
// //     return
// // }
// //
// // console.log(addUsername([
// //     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
// //     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// // ]))
//
// // function bump(x){
// //
// //    let  a =  x.split('n')
// //     console.log(a)
// //     if(a.length < 16){
// //         return "Woohoo!"
// //     }
// //     return  "Car Dead"
// // }
// //
// // console.log(bump('_nnnnnnn_n__n______nn__nn_nnn'))
//
//
// // Сортировка обьекта
// //
// // const obj = {
// //     a: 50,
// //     b: 30,
// //     c: 40,
// //     d: 20
// // }
// //
// // const sortObj = (obj) => {
// //     return Object.fromEntries(Object.entries(obj).sort((a,b) => a[1] - b[1]))
// // }
// // console.log(sortObj(obj))
//
//
// // function atm(sum){
// //     const notes = [100,50,25,5,1]
// //     let result = []
// //     for(let i = 0; i < notes.length; i++){
// //         let note = Math.floor(sum/notes[i])
// //         sum %= notes[i]
// //         let newArray = Array(note).fill(notes[i])
// //         result = [...result, ...newArray]
// //     }
// //     return result
// // }
// //
// // console.log(atm(33))
//
// // function firstNonConsecutive(arr) {
// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i - 1] + 1 !== arr[i]) return arr[i];
// //     }
// //     return null;
// // }
// //
// // console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
//
//
// // function backwardsPrime(start, stop){
// //     // your code here
// //     function isPrime(n) {
// //         // show me the code!
// //         for(let i=2; i<= Math.sqrt(n); i++){
// //
// //
// //             if(n % i === 0  ){
// //
// //                 return false
// //             }
// //         }
// //         return n >1
// //     }
// // let result = []
// //     for(let i  = start; i < stop; i++){
// //         let num = isPrime(i)
// //         if(num && isReversePrime(i)){
// //             result.push(i)
// //         }
// //     }
// //
// //     function isReversePrime(num) {
// //         let reverseNum = +num.toString().split("").reverse().join("");
// //         if (num !== reverseNum) {
// //             return isPrime(reverseNum);
// //         }
// //         return false;
// //     }
// //
// // return result
// // }
// //
// //  console.log(backwardsPrime(1095047,1095404))
// //  console.log(backwardsPrime(1,100))
//
//
//
// //
// // const times = [365 * 24 * 3600, 24 * 3600, 60 * 60, 60, 1];
// // const formatEndings = (value, unit) => {
// //     return value
// //         ? value === 1
// //             ? `${value} ${unit}, `
// //             : `${value} ${unit}s, `
// //         : "";
// // };
// // const concatTimes = (arr) => {
// //     const years = formatEndings(arr[0], "year");
// //     const days = formatEndings(arr[1], "day");
// //     const hours = formatEndings(arr[2], "hour");
// //     const minutes = formatEndings(arr[3], "minute");
// //     const seconds = formatEndings(arr[4], "second");
// //
// //     return [years, days, hours, minutes, seconds];
// // };
// // const changeLastComma = (str) => {
// //     const lastComma = str.lastIndexOf(",");
// //     if (lastComma !== -1)
// //         return str.slice(0, lastComma) + " and" + str.slice(lastComma + 1);
// //     return str;
// // };
// // const formatDuration = (sec) => {
// //     if (sec === 0) return "now";
// //     const result = [];
// //     for (const item of times) {
// //         const rank = Math.trunc(sec / item);
// //         if (rank === 0) result.push(0);
// //         if (rank !== 0) {
// //             result.push(Math.trunc(sec / item));
// //             sec -= item * rank;
// //         }
// //     }
// //     const outputString = [...concatTimes(result)].join("").slice(0, -2);
// //
// //     return changeLastComma(outputString);
// // };
// //
// // console.log(formatDuration(1), "1 second");
// // console.log(formatDuration(62), "1 minute and 2 seconds");
// // console.log(formatDuration(120), "2 minutes");
// // console.log(formatDuration(3600), "1 hour");
// // console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
// // console.log([1] * 2)
// // function pyramid(n) {
// //     return Array.from({length:n},(x,i)=>Array(i+1).fill(1))
// // }
// //
// // console.log(pyramid(5))
// //
// // function pyramid(n) {
// //     const res = [];
// //     for(let i = 0; i < n; i++){
// //         res.push([...Array(i+1)].fill(1))
// //     }
// //     return res;
// // }
//
// // function luckyCandies(prizes, k) {
//     //coding and coding..
// // let result = []
// //     let sum = 0
// //    let find = false
// //    for(let i = 0; i < prizes.length; i++){
// //        sum += prizes[i]
// //        for (let j = i + 1; j < prizes.length; j++) {
// //            sum = prizes[i] + prizes[j]
// //            if (sum % k === 0) {
// //                find = true
// //                break
// //            }
// //   }
// //        if (find) break
// //
// //    }
// //    // for(let j = 0; j < prizes.length; j++ ){
// //    //     sum-=prizes[j]
// //    //     if(sum % k === 0){
// //    //         break
// //    //     }
// //    // }
// //    return sum
// //
// // }
// //
// // console.log(luckyCandies([1,2,3,4,5], 8))
//
//
// //
// // function digital_root(n) {
// //     // ...
// // while(n > 9){
// //
// //     n =  n.toString().split('').reduce((a,b) => {
// //         return +a + +b
// //
// //     },0)
// //     console.log(n)
// //
// // }
// //     return  n
// // }
// //
// // console.log(digital_root(78))
//
//
// // function digital_root(n) {
// //     return (n - 1) % 9 + 1;
// // }
// //
// // console.log(digital_root(50))
//
// //
// // function findOutlier(integers){
// //     //your code here
// //     let even = []
// //     let odd = []
// //     for(let i = 0; i< integers.length; i++){
// //         if(integers[i] % 2 !== 0 ){
// //             odd.push(integers[i])
// //         }else if(integers[i] % 2 === 0){
// //             even.push(integers[i])
// //         }
// //     }
// //     console.log(even)
// //
// // return even.length < odd.length ? even[0] : odd[0]
// // }
// //
// // // console.log(findOutlier([2,6,8,10,3]))
// //
// //
// // function findOutlier(integers){
// //     const even = integers.filter(int => int % 2 === 0);
// //     const odd  = integers.filter(int => int % 2 !== 0);
// //     return even.length === 1 ? even[0] : odd[0];
// // }
//
// // function solution (number){
// //     let result  = []
// //
// //     for (let i = 1 ; i >=0 ; i--){
// //         if (i % 3 === 0){
// //             result.push(i)
// //         }
// //         if( i % 5 === 0){
// //             result.push(i)
// //         }
// //      }
// //    return [...new Set(result)].reduce((acc,el) => acc +=el)
// // }
// //
// // console.log(solution(15))
//
//
//
// // function narcissistic(value) {
// //     // Code me to return true or false
// //     let result = 0
// //     let len = String(value).length
// //     console.log(String(value))
// //     console.log(len)
// //     for(let i = 0; i < len; i++){
// //       result+=String(value)[i]**len
// //
// //     }
// //
// //     return result === value
// // }
// //
// // console.log(narcissistic(153))
//
//
// // function isPangram(string){
// //     //...
// //     let flag = false
// //     let counter = 0
// //     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
// //     for(let i = 0; i < alphabet.length; i++){
// //         if(string.includes(alphabet[i]) ){
// //             counter++
// //         }
// //
// //     }
// //     return counter === alphabet.length
// //
// // }
// //
// // console.log(isPangram("The quick brown fox jumps over the lazy dog."))
// // console.log(isPangram("This is not a pangram."))
//


// function towerBuilder(nFloors) {
//     let result = [];
//     for ( let i = 1; i <= nFloors; i++ )
//     { result.push(' '.repeat(nFloors-i) + '*'.repeat(i*2-1) + ' '.repeat(nFloors-i))
//     } return result
// }
//
// console.log(towerBuilder(20))


function humanReadable(seconds) {
    // TODO
    let h =  ('0' + parseInt(seconds/(60 * 60))).slice(-2)
    let min = ('0' + parseInt(seconds/60 % 60)).slice(-2)
    let sec =  ('0' + (seconds % 60)).slice(-2)
    return `${h}:${min}:${sec}`
}

console.log(humanReadable(600))
// http://csbin.io/closures
// Solutions: https://github.com/CodesmithLLC/cs-bin-solutions

// CHALLENGE 1
function createFunction() {
	return function () {
		console.log("hello");
	};
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
	return function () {
		console.log(input);
	};
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
	let counter = 0; // this variable is outside incrementCounter's scope
	function incrementCounter() {
		counter++;
		console.log("counter", counter);
	}
	return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
	return function (input) {
		return x + input;
	};
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);

// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
	let res;
	return function (...args) {
		if (res) return res;
		res = func.call(this, ...args);
		return res;
	};
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(count, func) {
	return function (...args) {
		if (count > 1) return count--;
		func.call(this, ...args);
	};
}

// /*** Uncomment these to check your work! ***/
const called = function () {
	console.log("hello");
};
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait, ...args) {
	return function () {
		console.log("delay");
		setTimeout(func.bind(this, ...args), wait);
	};
}

// CHALLENGE 7
function rollCall(names) {
	let counter = 0;
	return function () {
		if (counter < names.length) {
			console.log(names[counter]);
			return counter++;
		}
		return console.log("Everyone accounted for");
	};
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
	const prevLogs = {};
	return function (key) {
		if (key !== magicWord) {
			const res = func.call(this, key);
			prevLogs[key] = res;
			return res;
		}
		return prevLogs;
	};
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
	return num * 2;
};
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
	let execCount = 0;
	return function () {
		const el = array[execCount % array.length];
		execCount++;
		return el;
	};
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
	return function (...args) {
		return func.call(this, ...[arg, ...args]);
	};
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
	return function (...args) {
		return {
			date: new Date().toDateString(),
			output: func.call(this, ...args),
		};
	};
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp((n) => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
	const pairs = [];
	return function (str1, str2) {
		if (str1 && str2) {
			return pairs.push([str1, str2]);
		}
		if (str1 && !str2) {
			return pairs.reduce((acc, [oldS, newS]) => acc.replaceAll(oldS, newS), str1);
		}
	};
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13 *****
function createSecretHolder(secret) {
	let theSecret = secret;
	return {
		getSecret() {
			return theSecret;
		},
		setSecret(newSecret) {
			theSecret = newSecret;
		},
	};
}

// /*** Uncomment these to check your work! ***/
// let obj = createSecretHolder(5)
// // console.log('here',obj)
// console.log(obj.getSecret())// => returns 5
// obj.setSecret(2)
// console.log(obj.getSecret()) // => returns 2
// obj();

// CHALLENGE 14
function callTimes() {
	let counter = 0;
	return function () {
		counter++;
		return counter;
	};
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// console.log(myNewFunc1()); // => 1
// console.log(myNewFunc1()); // => 2
// console.log(myNewFunc2()); // => 1
// console.log(myNewFunc2()); // => 2

// CHALLENGE 15
function russianRoulette(num) {
	return function () {
		num--;
		if (num > 0) return "click";
		if (num === 0) return "bang";
		return "reload to play again";
	};
}

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'

// CHALLENGE 16
function average() {
	let nums = [];
	let avg = 0;
	return function (num) {
		if (num || num === 0) {
			nums.push(num);
			avg = nums.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
		}
		return avg;
	};
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
	return function (cb) {
		return arrOfTests.every(([firstEl, secEl]) => secEl === cb(firstEl));
	};
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
	let words = [];
	return function (str) {
		if (str === "undo") {
			if (!words.length) return "nothing to undo";
			return `${words.pop()} undone`;
		}
		words.push(str);
		if (words.length > limit) words.shift();
		return `${str} done`;
	};
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
	// DEALER
	return function (num1, num2) {
		let isFirst = true;
		let isDone = false;
		let sum = num1 + num2;

		// PLAYER
		return function () {
			if (isDone) return "your are done!";

			if (isFirst) {
				isFirst = false;
				return num1 + num2;
			}

			const shifted = array.shift();
			console.log("shifted", shifted);

			sum += shifted;
			if (sum <= 21) return sum;

			isDone = true;
			return "bust";
		};
	};
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

/*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

/*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!

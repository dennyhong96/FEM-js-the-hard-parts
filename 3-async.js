// http://csbin.io/async
// Solutions: https://github.com/CodesmithLLC/cs-bin-solutions

/* CHALLENGE 1 */

function sayHowdy() {
	console.log("Howdy");
}

function testMe() {
	setTimeout(sayHowdy, 0);
	console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
	// ADD CODE HERE
	setTimeout(function () {
		console.log("welcome");
	}, 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
	// ADD CODE HERE
	console.log("hello");
	setTimeout(function () {
		console.log("good bye");
	}, 2000);
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
	// ADD CODE HERE
	setInterval(function () {
		console.log("hi");
	}, 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
	// ADD CODE HERE
	let intervalId = setInterval(function () {
		console.log("hi for now");
	}, 1000);
	setTimeout(function () {
		clearInterval(intervalId);
	}, 5000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
	// ADD CODE HERE
	let intervalId = setInterval(func, interval * 1000);
	setTimeout(clearInterval.bind(this, intervalId), duration * 1000);
}
// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
	return function () {
		let curr = 1;
		let intervalId = setInterval(() => {
			console.log(curr);
			if (curr >= target) clearInterval(intervalId);
			curr++;
		}, wait);
	};
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
	// ADD CODE HERE
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(val);
		}, 2000);
	});
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
	constructor(cb) {
		// ADD CODE HERE
		this.cb = cb;
		this.second = 0;
		this.intervalId = null;
	}
	// ADD METHODS HERE
	start() {
		this.intervalId = setInterval(() => {
			this.cb((this.second % 60) + 1);
			this.second++;
		}, 1000);
	}

	reset() {
		clearInterval(this.intervalId);
		this.second = 0;
	}
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => {
	console.log(val);
});
console.log("Started Clock.");
clock.start();
setTimeout(() => {
	clock.reset();
	console.log("Stopped Clock after 6 seconds.");
}, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
	// ADD CODE HERE
	let timeout;
	return function (...args) {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			return callback.call(this, ...args);
		}, interval);
	};
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() {
	console.log("hi");
}
const giveHiSometimes = debounce(giveHi, 3000);

// giveHiSometimes(); // -> 'hi'
// setTimeout(function() { giveHiSometimes(); }, 2000); // -> undefined
// setTimeout(function() { giveHiSometimes(); }, 4000); // -> undefined
// setTimeout(function() { giveHiSometimes(); }, 8000); // -> 'hi'

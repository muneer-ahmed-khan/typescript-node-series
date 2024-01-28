let i = 0;

function increment() {
  console.log(++i);
  if (i <= 10) {
    setTimeout(increment, 50);
  }
}
// The  setInterval delays the function regularly regardless of the state of the previous function call.
// If  setInterval is timed to deliver every 1000ms and the execution takes 500ms, the actual interval between the end of the call and the next invocation is 500ms.

// The recursive  setTimeout, on the other hand, schedules a new function call when the previous one ends.
//  The longer the previous function took to complete, the bigger the interval between those two functions starting.

increment();

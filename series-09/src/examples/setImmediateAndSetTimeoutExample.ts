setTimeout(() => {
  console.log("set timeout");
}, 0);
setImmediate(() => {
  console.log("set immediate");
});

// no grantee which one will complete first

const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function recFib(n)
{
  if(n<=0)
  {
    return 0;
  }
  if(n==1)
  {
    return 1;
  }
  return recFib(n-1) + recFib(n-2);
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(recFib(n)) ==
            JSON.stringify(fib(n));
    });
jsc.assert(test);

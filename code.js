function tailFib(n, lastOne, lastTwo) 
{
  if (n == 1) 
  {
    return lastOne;
  }

  let temp = lastOne;
  lastOne += lastTwo;
  lastTwo = temp;

  return tailFib(n - 1, lastOne, lastTwo);
}

function fib(n) 
{
  if (n <= 0) 
  {
    return 0;
  }

  return tailFib(n, 1, 0);
}

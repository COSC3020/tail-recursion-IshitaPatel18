[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bHkMPWBv)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

The asymptotic complexity of tail-recursive Fibonacci is vastly different
than that of the non-tail-recursive version. The tail-recursive version of
Fibonacci runs for n or linear time because it is making the single recursive 
call at the end to itself, which will happen for n number of times as for every 
recursive call, n is decremented. The if checks and variable initializations
are all constant time, so they are dropped to get the worst case complexity of
$\Theta(n)$. The non recursive runtime is $\Theta(2^n)$ (from the Introduction 
to Algorithms textbook on page 751, using the golden ratio for approximation) which
is way worse than $\Theta(n)$. Therefore, the runtime complexity of tail-recursive and
non-tail-recursive Fibonacci is very different and the tail-recursive implementation
is more efficient with it's linear runtime.

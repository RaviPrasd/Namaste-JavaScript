/* When a JavaScript program is run 
    1. It create a GLOBAL EXECUTION CONTEXT
    2. There are 2 phases in GOC 
        a. Memory Allocation(Creation) Phase
        b.Code Execution Phase
    3. In Memory Allocation Phase
        a. When a variable is encounterd a memory is created  and "Undefined" value is stored in it.
        b. When a function is encounterd a memory is allocated and whole content of function is stored in it.
    4. In Code Execution Phase
        a. When a variable is encounted then it replace the undefine in memory creation with value of variable. 
        b. When a function is invoked then a Execution Context is created and process continues , 
            when a return is encounterd the execution context is deleted and the value is returned in memory creation block.
    5. When the program is ended the Global Execution Context returns the value and it is also deleted.
*/

/*
    CALL STACK (Execution Contex Stack , Program Stack , Control Stack , Runtime Stack , Machine Stack)
It maintains the order of Execution Context in JavaScript
As the program is started GEC is stored at the bottom of stack
If any function is invoked the new execution context is pushed above GEC on the stack and will be removed after the value is returned by it
At the end of program GEC is also pop out
*/

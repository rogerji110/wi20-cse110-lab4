1. a value gets printed because i is a var and thus has global scope
2. a value gets printed because discountedPrice is a var and thus has global scope and can be accessed anywhere in the program
3. a value gets printed because finalPrice is defined as a var on line 3 and thus have global scope 
4. we get [50, 100, 150] cuz what we're doing is discounting each price given in the prices array by 50% and pushing that new price onto a new array and returning it
5. we get error cuz i is in the scope of the for loop, and when that loop is done we no longer have access to it anymore
6. we get error cuz discountedPrice is in the scope of the for loop, and when that loop is done we no longer have access to it anymore
7. we get a value cuz when we declared finalPrice, it's in the scope of the discountPrices() function, and we are currently in it at line 13
8. the same answer as we get in #4 above
9. we get error cuz i is in the scope of the for loop, and when that loop is done we no longer have access to it anymore
10. we get error cuz discountPrices is in in the scope of the for loop, and when that loop is done we no longer have access to it anymore and the variables inside it
11. we get error cuz you can't assign a number to a constant; we assigned finalPrice = 0 in line 4, and line 7 wont let the code run cuz u cant reassign a const
12. the function doesnt return anything cuz the code doesnt even run b/c of trying to reassign the const finalPrice
13a. `student['name']`
13b. `student['Grad Year'] `
13c. `student['greeting']()`
13d. `student['Favorite Teacher']['name'] `
13e. `student['courseLoad'][0]`
14a. outputs 32 cuz the 2 gets converted to a string
14b. outputs 1 b/c the 3 gets converted to a number, since the "-" operator cant apply to strings
14c. outputs 3 b/c null converts to a 0 number, 3 + 0 = 3
14d. outputs 3null cuz null converts to 'null' for string
14e. outputs 4 cuz true converts to 1, 1+3 = 4
14f. outputs 0 cuz false converts to 0, null also converts to 0, 0+0=0
14g. outputs 3undefined cuz undefined converts to "undefined", then string concat
14h. outputs NaN cuz undefined = NaN in numbers, 3 - NaN = NaN
15a. outputs true cuz '2' converts to string, 2 > 1 is true
15b. outputs false cuz string comparison, '2' does not come before '1' in strings
15c. outputs true cuz the string '2' converts to 2, 2 == 2 is true
15d. outputs false cuz there's no type conversion going on, and string 2 != number 2
15e. outputs false cuz true converted to 1, 1!= 2
15f. outputs true cuz Boolean() returns true if value is nonzero, so we get true === true which is true
16. the == operator does type conversion, whereas === is a strict equality operator and doesnt convert types when comparing
17. "How are you?" is printed b/c in the if, 2 == true is false since true is converted to 1, and 2 != 1. However, the else if on line 3 is true because any non-zero number is truthy and converts to true.
19. what happens is that for each element in the array, we call the input callback (doSomething) in modifyArray with the function x * 2. when we go to doSomething, we add to the input num then multiply it by 2. so what we are doing for each element in the array is adding two to it then multyipling by two, aka (x + 2) * 2. so output is [6, 8, 10]
21. 1 then 4 then 3 then 2. that's because we first print 1 synchronously, then line 3 and 4 run async, so we get to line 5 first then print it, then line 4's timeout is over, then line 3's timeout is over.

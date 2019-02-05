'use strict';

// Enter your js code Here

// ------------------------
// Begin program start up code

// declare some global variables, test out passing data to functions
var i = 0;
var test = 5;
var name = "Jon";

// simple function call, no parameters, no return data
foo();

// function call, sending 1 parameter
fooWithParameter(test);

// function call, sending 2 parameters
fooWithTwoParameter(name, test);

// function call, returns true if the coin flip was heads, false if not
var flip = isCoinFlipHeads();
alert("Coin flip landed heads = " + flip);

// function call, sends in 2 parameters, returns and array of strings
var numCars = 5;
var carCompany = "Chevy";
var carArray = getMyCarArray(numCars,carCompany);
console.log(carArray);  // check to see if an array of strings was created correctly

// function call, a hard-coded array of objects of length 3 is returned
var myFriends = new Array;
myFriends = getMyFriendsArray();
console.log(myFriends);  // check to see if an array of friends was created correctly
alert("Friend # 1 name is " + myFriends[1][0]);


// ------------------------------------------------------
// begin Functions

function foo()
{
  alert("You called foo");
}

// ------------------------------------------------------

function fooWithParameter(num)
{
  alert("You called fooWithParameter and passed in " + num);
}


// ------------------------------------------------------

function fooWithTwoParameter(myName, myNum)
{
  alert("You called fooWithTwoParameters and passed in " + myName + " and also " + myNum);
}

// ------------------------------------------------------

function isCoinFlipHeads()
{
  var coin;

  coin = Math.floor((Math.random() * 2) + 1); // random number between 1 and 2
  console.log("Coin flipped result is " + coin);

  if (coin == 1)
    return true;  // heads
  else
    return false; // tails

}

// ------------------------------------------------------
// create an array of length numCars.  Each array element will have the carCompany + a counter.
// For example, "Chevy0", "Chevy1", etc...

function getMyCarArray(numCars,carCompany)
{
  var newCarArray = new Array;

  var i;

  for (i= 0; i<numCars; i++)
    newCarArray.push("carCompany" + i);

  return newCarArray;

}

// ------------------------------------------------------
// create an array of friend objects of length 3.
// a friend is a name and an age like ["Bob",25]

function getMyFriendsArray()
{
  var friends = new Array;

  friends.push(["Bob", 25]);
  friends.push(["Mary", 50]);
  friends.push(["Joe", 14]);

  return friends;
}

// ----------------------------------------------

function myDivision(num, dem, quo)
{
    if ((num/dem) == quo) return true; else return false;

}

// ---------------------------------------------

function concat(string1, string2)
{
    return string1 + string2;
}

// -----------------------------------------------

function makeArray(num1, num2, num3)
{
  var newArray = new Array;

  newArray.push(num1);
  newArray.push(num2);
  newArray.push(num3);

  return newArray;
}

// --------------------------------------

var answer = myDivision(10,4,2);
alert("myDivision answer is " + answer);

var myString = concat("Jonny ","Baseball");
alert ("concat answer is " + myString);

var myArray = makeArray(5,8,2);
alert ("makeArray answer is " + myArray);

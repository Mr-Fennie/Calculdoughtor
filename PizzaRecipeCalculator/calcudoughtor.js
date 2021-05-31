// Basic Pizza Dough Recipe Calculator
// In percentages:
* 100% flour
* 65% water | 64.4736% | 64.5%
* 2.5% sugar | 2.6315% | 2.6%
* 1.5% salt | 1.5789% | 1.6%
* 1.3% yeast/or 26% starter | 1.3157% | 1.3%



var flourNumber = prompt("Enter the amount of flour you have(in grams)");

var water = (64.5/100) * flourNumber;
var sugar = (2.6/100) * flourNumber;
var salt = (1.6/100) * flourNumber;
var yeast = (1.3/100) * flourNumber;

alert("You need: "+flourNumber+"g Flour, "+water+"g water, "+sugar+"g sugar, "+salt+"g salt, "+yeast+"g yeast.");

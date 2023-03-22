<?php

/* Question */
$arr = ["hello", "there"]; // 0, 1
$arr["young"] = "wizard"; // 3
$arr[] = ["you", "have"];  // 4
$arr[0] = "careful";  // does not change
$arr[4] = "power";  // does not change
$arr[3] = "terrifying"; // does not change
$arr[] = "!"; 
print_r($arr); // index 5 max

/* Question */
$arr = ["breakfast" => "eggs", "lunch" => "eggs", "dinner" => "eggs", "dessert" => "cadbury cream eggs"]; // breakfast, lunch, dinner, dessert
 
$arr["brunch"] = 0;  // + brunch
 
unset($arr["lunch"]); // breakfast is destroyed
 
unset($arr["brunch"]);  // brunch is destroyed
 
array_push($arr, "I’m full"); // "I'm full" is added to the end of the array
 
unset($arr["dinner"]); // dinner is destroyed
 
echo count($arr); // counts the number of keys in the array, which is 3: lunch, dessert, I', full

/* Question */
function f1(&$array_param) // referenced! 
{
  $array_param["a"] = "changed"; // param A changed to "changed"
}
 
function f2($array_param) // NOT referenced!
{
  $return_arr = f1($array_param); // assigns a variable return-arr with a function f1 that takes $array_param as its parameter;
  return $return_arr;
}
 
$arr1 = ["a" => "Tadpole"]; 
$arr2 = ["a" => "Lily"];
 
$run1 = f1($arr1); // reassigns $arr1 value to "changed" by reference
$run2 = f2($arr2); // $run2 gets a value of $arr2, but does not reassign it!
 
echo $arr1["a"] . " " . $arr2["a"]; // "changed Lily"

/* Question */
$numbers = [
    "3" => 98,
    65 => 426,
    "000" => 0,
];
 
echo implode("", $numbers); // 984260

/* Question */
$a1 = ["frog" => "toad", "oats" => "chaf", "bull" => "cow", "dog" => "bone", "north" => "south"]; // frog, oats, bull, dog, north
 
$a2=["bull" => "row", "dog" => "phone", "syrup" => "wig"]; // + syrup
 
$a3 = $a1 + $a2;
 
$arr = $a3 + ["north" => "mouth", "bread" => "head"]; // + bread

// Question: How many unique keys are in the array $arr once this code has been run?
// Answer: 7
?>
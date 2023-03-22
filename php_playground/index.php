<?php
$arr = ["hello", "there"]; // 0, 1
$arr["young"] = "wizard"; // 3
$arr[] = ["you", "have"];  // 4
$arr[0] = "careful";  // does not change
$arr[4] = "power";  // does not change
$arr[3] = "terrifying"; // does not change
$arr[] = "!"; 
print_r($arr);

$a1 = ["frog" => "toad", "oats" => "chaf", "bull" => "cow", "dog" => "bone", "north" => "south"];
 
$a2=["bull" => "row", "dog" => "phone", "syrup" => "wig"];
 
$a3 = $a1 + $a2;
 
$arr = $a3 + ["north" => "mouth", "bread" => "head"];
?>
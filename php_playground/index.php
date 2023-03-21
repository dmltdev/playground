<?php
function expectTwo($first, $second)
{
  return "whatever";
}
 
echo expectTwo("test", "why");

$nested_arr = [ 1, 2, [3, 4 , 5, [5, 6], 7], [ [8, [9, 10, 11, [12, 13] ], [14], [15, [16, 17, 18], 19 ] ] ] ];
echo $nested_arr[3][0][1][1];

$grades = [
    "Jane" => 98,
    "Lily" => 74,
    "Dan" => 88,
];
 
print_r($grades);
?>
<?php

// 3 Simple Challenges from the "PHP & MySQL Novice to Ninja 7th Ed" book

// Challenge 1: Print all the odd numbers from 21 to 99.

function oddNumbers() {
    for ($i = 21; $i <= 99; $i++) {
        if ($i % 2 === 0) {
            echo $i . PHP_EOL;
        }
    }
}


// Challenge 2: Print the nine times table up to 12 x 9 ( 9 18 27) without using the multiplication operator (*) or an if statement
function nineTimesTable() {
    for ($i = 9; $i <= 9*12; $i = $i +9 ) {
        echo $i . PHP_EOL;
    }
}

// Challenge 3: Print the nine times table in this format:
// 1x9 = 9
// 2x9 = 18
// etc
// This time, you'll need to use the multiplication operator    
function nineTimesMultiply() {
    for ($i = 1; $i <= 12; $i++) {
        echo "{$i}x9 = " . $i * 9 . PHP_EOL;
    }
}

nineTimesMultiply();

?>
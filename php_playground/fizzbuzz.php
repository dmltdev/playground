<?php

// FizzBuzz using while
echo "FizzBuzz using while\n";
$counter = 1;
while ($counter <= 100) {
  
  $counter++;
  if ($counter % 15 === 0) {
    echo "FizzBuzz" . "\n";
  } elseif ($counter % 3 === 0) {
    echo "Fizz" . "\n";
  } elseif ($counter % 5 === 0) {
    echo "Buzz" . "\n";
  } else {
    echo $counter . "\n";
  }
}

// FizzBuzz using for
echo "\nFizzBuzz using for\n\n";
$output = [];
for ($i = 1; $i <= 100; $i++) {
  if ($i % 15 === 0) {
    array_push($output, "FizzBuzz");
  } elseif ($i % 3 === 0) {
    array_push($output, "Fizz");
  } elseif ($i % 5 === 0) {
    array_push($output, "Buzz");
  } else {
    array_push($output, $i);
  }
}

// FizzBuzz iterate through array with foreach
echo "\nFizzBuzz iterate through array with foreach\n\n";
foreach($output as $value) {
  echo $value . "\n";
}

// FizzBuzz iterate through array with certain conditions
echo "\nFizzBuzz iteration through array stops after printing 'FizzBuzz'.\n\n";

foreach($output as $value) {
  if ($value === "Fizz") {
    continue;
  } elseif ($value === "FizzBuzz") {
    echo "$value" . "\n";
    break;
  }
  echo $value . "\n";
}
?>
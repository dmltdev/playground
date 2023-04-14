<?php
$regex_exp = "/\(?\d\s?\d\d\.?\)?-?\d?\s?\d\d\.?\-?\d\s?\d\d\d\d?/"; // Unreadable regex for 10/11-digit telephone numbers
$regex_new = "/^[(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4}$/"; // Test for 10-digit North American telephone numbers.

// $pattern matches these string
$str1 = "718-555-3810";
$str2 = "9175552849";
$str3 = "1 212 555 3821";
$str4 = "(917)5551298";
$str5 = "212.555.8731";

function inputValid($str, $regex) {
    if (!preg_match($regex, $str)) {
        echo "Input {$str} does not compare to the defined regular expression!" . PHP_EOL;
    } else {
        echo "Input {$str} matches the defined regular expression!" . PHP_EOL;
    }
}

inputValid($str1, $regex_exp);
inputValid($str2, $regex_exp);
inputValid($str3, $regex_exp);
inputValid($str4, $regex_exp);
inputValid($str5, $regex_exp);
inputValid($str1, $regex_new);
inputValid($str2, $regex_new);
inputValid($str3, $regex_new); // The string should not match $regex_new because it is in 11-digit format
inputValid($str4, $regex_new);
inputValid($str5, $regex_new);

// PHP Regex Cheatsheet/Tester: https://www.phpliveregex.com/
?>
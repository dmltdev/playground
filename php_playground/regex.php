<?php
$regex_exp = "/\(?\d\s?\d\d\.?\)?-?\d?\s?\d\d\.?\-?\d\s?\d\d\d\d?/"; // regex

// $pattern matches these string
$str1 = "718-555-3810";
$str2 = "9175552849";
$str3 = "1 212 555 3821";
$str4 = "(917)5551298";
$str5 = "212.555.8731";

echo preg_match($regex_exp, $str1);

// PHP Regex Cheatsheet/Tester: https://www.phpliveregex.com/
?>
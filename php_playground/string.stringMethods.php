<?php
$str_var = "Here I go. I am a String. I am a powerful entity!\n" ; // declare a variable
echo "\nDefault: " . $str_var;

// strtolower — Make a string lowercase
echo "\nstrtolower: " . strtolower($str_var);

// strtoupper — Make a string uppercase
echo "\nstrtoupper: " . strtoupper($str_var);

// trim — Strip whitespace (or other characters) from the beginning and end of a string
$white_spaces = "  $str_var  ";
echo "\ntrim: " . trim($white_spaces) ;

// str_repeat — Repeat a string
echo "\nstr_repeat:\n" . str_repeat($str_var, 3);

// str_replace($search, $replace, $subject) — Replace all occurrences of the search string with the replacement string 
$var_subject = "You should eat fruits, vegetables, and fiber every day.";
$var_vowels = array("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");
$var_onlyconsonants = str_replace($var_vowels, "", $var_subject);
echo "\nstr_replace: " . $var_onlyconsonants;

// sha1 — Calculate the sha1 hash of a string
$var_password = "apple";
echo "\nsha1: " . sha1($var_password);

// md5 — Calculate the md5 hash of a string
echo "\nmd5: " . md5($var_password);

// strlen — Get string length
$var_md5 = md5($var_password);
echo "\nstrlen: " . strlen($var_md5);
$var_sha1 = sha1($var_password);
echo "\nstrlen: " . strlen($var_sha1);

// stristr(string $haystack, string $needle, bool $before_needle = false) — Case-insensitive strstr()
$email = 'USER@EXAMPLE.com';
echo "\nstristr: " . stristr($email, 'e'); // outputs ER@EXAMPLE.com
echo "\nstristr: " . stristr($email, 'e', true); // outputs US. That's because if true, stristr() returns the part of the haystack before the first occurrence of the needle (excluding needle).

// chop — Alias of rtrim() | Rather use rtrim(). Usage of chop() is not very clear nor consistent for people reading the code after you.
echo "\nchop: " . chop($white_spaces) . "test_text";

// chr — Generate a single-byte string from a number
echo "\nchr: " . chr(5);
echo "\n", chr(-159), chr(833), PHP_EOL;

// count_chars — Return information about characters used in a string
$var_count_chars = "Two Ts and one F.";

foreach (count_chars($var_count_chars, 1) as $i => $val) {
   echo "There were $val instance(s) of \"" , chr($i) , "\" in the string.\n";
}

// explode — Split a string by string
$var_explode = "Hello Friend. How are you?";
print_r (explode(" ",$var_explode));
?>
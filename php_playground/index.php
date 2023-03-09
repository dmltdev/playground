<?php

echo "She said \"hi\" to the dog.";
$php_variable = "\nstring example\n";
echo $php_variable;
echo "string example two";
$userChunky = "\nChuppy";
$user_name =& $userChunky;

$user_name .= ", huppy";
$userChunky .= ", kappy";
echo $user_name;
?>
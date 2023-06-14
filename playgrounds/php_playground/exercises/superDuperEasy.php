<?php
// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/php

function problem($x){
    if (gettype($x) === "string") {
        return "Error";
    } else {
        return $x * 50 + 6;
    }
}

?>
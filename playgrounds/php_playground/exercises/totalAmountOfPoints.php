<?php
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/php

function points(array $games): int {
    $points = 0;
    for ($i = 0; $i < sizeof($games); $i++) {
        $games[$i] = str_replace(":", "", $games[$i]);
        $x = intval($games[$i][0]);
        $y = intval($games[$i][1]);
        if ($x > $y) {
            $points += 3;
        }
        if ($x === $y) {
            $points += 1;
        }
    }
    return $points;
}

echo(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']));

?>
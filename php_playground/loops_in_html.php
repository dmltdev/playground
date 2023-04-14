<?php
$drinks = [
  "Latte" => 3.99,
  "Coffee" => 2.00,
  "Tea" => 2.50,
  "Mocha" => 4.50
];
$pastries = [
  "Croissant",
  "Muffin",
  "Slice of Pie",
  "Slice of Cake",
  "Cupcake",
  "Brownie"
];
$food = "food"
?>
        <h1>Welcome to the Repetitive Cafe</h1>
        <h3>Drinks!</h3>
        <ul>
        <?php foreach($drinks as $drink=>$price):?>
        <li><?="$drink: $$price"?></li>
        <?php endforeach;?>
    </ul>
        <h3>Pastries! ($2 each)</h3>
    <ul>
        <?php for($i=0; $i<count($pastries); $i++):?>
        <li><?=$pastries[$i];?></li>
        <?php endfor;?>
    </ul>
    <h3>Food!</h3>
    <ul>
        <?php $i=0;
        while ($i < 3):?>
        <li><?=$food?></li>
        <?php $i++; endwhile;?>
    </ul>
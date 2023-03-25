<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Calculator</title>
</head>
<body>
<form method="get" action="addition.php">
<h1>Addition</h1>
First Number: <input type="number" name="add_first"><br>
<br>
Second Number: <input type="number" name="add_second"><br>
<br>
<button type="submit">Add</button>
</form>

<form method="get" action="division.php">
<h1>Division</h1>
Numerator: <input type="number" name="div_first"><br>
<br>
Denominator: <input type="number" name="div_second"><br>
<br>
<button type="submit">Divide</button>
</form>
<a href="index.php">Reset</a>
</body>
</html>
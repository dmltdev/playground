<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Calculator</title>
</head>
<body>
<!--Your code goes here-->
<?="The division of ${_GET['div_first']} and ${_GET['div_second']} is:"?>
<h4><?=$_GET['div_first']/$_GET['div_second']?></h4>
<a href="index.php">Reset</a>
</body>
</html>
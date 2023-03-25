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
<?="The sum of ${_GET['add_first']} and ${_GET['add_second']} is:"?>
<h4><?=$_GET['add_first']+$_GET['add_second']?></h4>
<a href="index.php">Reset</a>
</body>
</html>
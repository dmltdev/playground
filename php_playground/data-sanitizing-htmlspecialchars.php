<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic data sanitizing example with htmlspecialchars()</title>
</head>
<body>
    <form method="post" action="">
        Enter some HTML:
        <br>
        <input type="text" name="html" placeholder="default">
        <br>  
        <input type="submit" value="Submit">
    </form>
    <div>
        You entered:
        <?= htmlspecialchars($_POST["html"], ENT_QUOTES, "UTF-8"); ?>
    </div>  
</body>
</html>
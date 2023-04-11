<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <textarea type="text" name="name" rows="4" cols="50" placeholder="Enter Text" maxlength="500"></textarea>
        <input type="submit" name="OK">
    </form>
    <?php
    if(isset($_POST['OK'])){
        $str = $_POST['name'];
        print "Length: " . strlen($str); 
    }
    ?>
</body>
</html>
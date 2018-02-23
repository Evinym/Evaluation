<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php

echo"<br/>EXERCICE 1 : <br/><br/>";

$nombre_de_lignes = 1;
while ($nombre_de_lignes <= 100)
{
    echo "$nombre_de_lignes ,";
    $nombre_de_lignes++; // $nombre_de_lignes = $nombre_de_lignes + 1
}

echo" <br/><br/> EXERCICE 2 : <br/><br/>";

$technos = ["Php", "Ruby", "Javascript", "Html"];
echo"$technos[0] <br/>";
echo"$technos[1] <br/>";
echo"$technos[2] <br/>";
echo"$technos[3] <br/>";


while ($technos[0]){
    $dev= "back" ;    
    echo"$technos[0] : $dev : Je suis un dev back et je connais le Php, le Ruby et le Javascript <br/>";
    break;
}
while ($technos[2]){
    $dev= "back" ;
    echo"$technos[2] : $dev : Je suis un dev front et je connais le Javascript et l'Html <br/>";
    break;
}
while ($technos[1]){
    $dev= "front" ;
    echo"$technos[1] : $dev : Je suis un dev back et je connais le Php, le Ruby et le Javascript <br/>";
    break;
}
while ($technos[3]){
    $dev= "front" ;
    echo"$technos[3] : $dev : Je suis un dev front et je connais le Javascript et l'Html <br/>";
    break;
}

echo"<br/><br/> EXERCICE 3 : <br/><br/>";



echo"<br/><br/> EXERCICE 4 : <br/><br/>";
    ?>    
</body>
</html>
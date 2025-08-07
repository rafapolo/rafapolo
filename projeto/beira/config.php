<?php

// BEIRA | Variáveis
$description = "Beira, talvez seja o reflexo do homem com interesse em diversificar o que vestir. O nome escolhido, trata da tangência entre uma coisa e outra, na tentativa de enaltecer a costura e a modelagem.";

$sobre = "Beira, talvez seja o reflexo do homem com interesse em diversificar o que vestir. O nome escolhido, trata da tangência entre uma coisa e outra, na tentativa de enaltecer a costura e a modelagem. Fazer roupas ou qualquer outro objeto, nos parece uma potência onde temos o controle em unir e separar partes. Essa possibilidade vibra. Assim, gostaríamos que elas, também, fossem vistas do avesso, para a costura levar o usuário ao entendimento da construção das peças, como quando os canos são aparentes. Até a metade do projeto chamávamos as roupas de unissex, porque elas são, mas não gostamos desse termo, mas quem sabe plurisexx ou muito sex, faça sentido. Assim, existem nas roupas passagens escondidas onde o usuário é que dá o significado, sendo elas desenhadas para o corpo masculino ou feminino.";
$about = "Beira is the reflection of man`s interest in diversifying what to wear. The name chosen relates to the borderline between one thing and another, as a means of highlighting stitching and modeling. To make clothes, or any other kind of object, seems like a power where we have the control to unite and separate parts. This possibility vibrates. Thus, we would like for our clothes to be seen inside out, so that the stitching takes the user to the understanding of the constructions of the pieces, just like when pipes are visible. Until half of the project we called the clothes unisex, because they are, but we don`t like this expression . Maybe plurisex or lots-of-sex make sense. There are hidden passages in the clothes and it`s up to the users to give them meaning, with them being suited both for the male and female bodies.";

$contato = <<< EOT
  <p>Rua Capitão Salomão, 67</p>
  <p>22271-040</p>
  <p>Rio de Janeiro - RJ</p>
  <p pt='Brasil' en='Brazil'>Brasil</p>
  <br/>
  <p>T +55 21 4141 5658</p>
  <p>E ola@beira.com.br</p>
  <br/>
EOT;

$google_analytics = <<< EOT
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-53599392-1', 'auto');
    ga('send', 'pageview');
  </script>
EOT;

// BEIRA | Funções
// (!) imagens jpeg, jpg, gif, png devem ter extensão em minúsculas nas pastas.
function read_colecoes($path = 'COLECOES'){
    $dirs = array();
    foreach (new DirectoryIterator($path) as $file) {
        if ($file->isDir() && !$file->isDot()) {
            $colecao_path = $file->getFilename();
            $full_path = "$path/$colecao_path";
            $uniq = uniqid('col_');
            echo "<p class='beira subitem' ref=$uniq>$colecao_path</p>\n";
            echo "<div id=$uniq class='colecao'>";
            read_images($full_path);
            echo "</div>";
        }
    }
}

function read_images($path){
  // append info.txt
  $info = "$path/info.txt";
  if (file_exists($info)){
   echo "<div class='info'>\n";
   $txt = nl2br(file_get_contents($info));
   echo $txt;
   echo "</div>\n";
  }
  $images = glob("$path/{*.jpeg,*.jpg,*.gif,*.png}", GLOB_BRACE);
  sort($images);
  foreach ( $images as $image ){
    list($width, $height) = getimagesize($image);
    echo "<img height=$height width=$width load='$image'/>\n";
  }
}

?>

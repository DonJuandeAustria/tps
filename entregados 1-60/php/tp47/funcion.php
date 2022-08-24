<?php
function disorder($word) {
    $word = str_split($word);
    shuffle($word);
    $word = implode($word);
    return $word;
}
?>
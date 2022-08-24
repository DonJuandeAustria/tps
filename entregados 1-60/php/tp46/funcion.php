<?php
function hammingDistance($a, $b) {
    $dist = 0;
    for ($i = 0; $i < strlen($a); $i++) {
        if ($a[$i] != $b[$i]) {
            $dist++;
        }
    }
    return $dist;
}
?>
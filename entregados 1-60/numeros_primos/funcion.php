<?php
 function isPrime($num) {
    $res = true;
    if ($num == 0 || $num == 1 || $num == 4) $res = false;
    for ($x = 2; $x < $num / 2; $x++) {
      if ($num % $x == 0) $res = false;
    }
    return $res;
}                
?>
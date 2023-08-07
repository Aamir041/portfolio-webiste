<?php

require __DIR__ . '/vendor/autoload.php';

use Kreait\Firebase\Factory;

$factory = (new Factory)
    ->withServiceAccount(/* Private Key of Database in json format*/)
    ->withDatabaseUri(/* database url*/);

    $database = $factory->createDatabase();

?>
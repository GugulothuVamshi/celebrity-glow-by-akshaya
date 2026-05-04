<?php

declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

$directoryExists = is_dir(DATA_DIRECTORY);
$directoryWritable = $directoryExists ? is_writable(DATA_DIRECTORY) : is_writable(dirname(DATA_DIRECTORY));

json_response([
    'success' => true,
    'php' => true,
    'dataDirectory' => DATA_DIRECTORY,
    'dataDirectoryExists' => $directoryExists,
    'dataDirectoryWritable' => $directoryWritable,
    'message' => $directoryWritable
        ? 'PHP is working and the data directory is writable.'
        : 'PHP is working, but the data directory is not writable.',
]);

<?php

declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['success' => false, 'message' => 'Method not allowed'], 405);
}

$body = read_json_body();
require_admin_credentials($body);
save_data_file('treatments.json', require_payload($body), 'Treatment changes published to the live site.');

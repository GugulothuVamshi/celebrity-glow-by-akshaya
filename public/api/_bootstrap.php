<?php

declare(strict_types=1);

const ADMIN_USERNAME = 'celebrityglow';
const ADMIN_PASSWORD = 'Akshaya1a';
const DATA_DIRECTORY = __DIR__ . '/../data';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    exit;
}

function require_admin_credentials(array $body): void
{
    $username = is_string($body['username'] ?? null) ? $body['username'] : '';
    $password = is_string($body['password'] ?? null) ? $body['password'] : '';

    if ($username !== ADMIN_USERNAME || $password !== ADMIN_PASSWORD) {
        json_response(['success' => false, 'message' => 'Unauthorized'], 401);
    }
}

function require_payload(array $body): array
{
    $payload = $body['payload'] ?? null;
    if (!is_array($payload)) {
        json_response(['success' => false, 'message' => 'Missing payload'], 400);
    }

    return $payload;
}

function read_json_body(): array
{
    $raw = file_get_contents('php://input');
    if ($raw === false || trim($raw) === '') {
        json_response(['success' => false, 'message' => 'Empty request body'], 400);
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        json_response(['success' => false, 'message' => 'Invalid JSON body'], 400);
    }

    return $decoded;
}

function ensure_data_directory(): void
{
    if (is_dir(DATA_DIRECTORY)) {
        return;
    }

    if (!mkdir(DATA_DIRECTORY, 0775, true) && !is_dir(DATA_DIRECTORY)) {
        json_response(['success' => false, 'message' => 'Unable to create data directory'], 500);
    }
}

function data_file_path(string $filename): string
{
    ensure_data_directory();
    return DATA_DIRECTORY . '/' . $filename;
}

function load_data_file(string $filename): void
{
    $path = data_file_path($filename);
    if (!file_exists($path)) {
        json_response(['success' => false, 'message' => 'Data file not found'], 404);
    }

    $contents = file_get_contents($path);
    if ($contents === false) {
        json_response(['success' => false, 'message' => 'Unable to read data file'], 500);
    }

    $decoded = json_decode($contents, true);
    if ($decoded === null && json_last_error() !== JSON_ERROR_NONE) {
        json_response(['success' => false, 'message' => 'Stored JSON is invalid'], 500);
    }

    echo json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    exit;
}

function save_data_file(string $filename, array $payload, string $successMessage = 'Saved successfully.'): void
{
    $path = data_file_path($filename);
    $json = json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

    if ($json === false) {
        json_response(['success' => false, 'message' => 'Unable to encode JSON'], 500);
    }

    if (file_put_contents($path, $json, LOCK_EX) === false) {
        json_response(['success' => false, 'message' => 'Unable to write data file'], 500);
    }

    json_response(['success' => true, 'message' => $successMessage]);
}

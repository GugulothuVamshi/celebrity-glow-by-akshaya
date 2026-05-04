/**
 * server.js — cPanel / Phusion Passenger startup entry point.
 *
 * Run `npm run build` once before starting this file.
 * In cPanel Node.js Selector, set the Application Startup File to: server.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.PORT = process.env.PORT || '3000';
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

const projectRoot = __dirname;
const standaloneRoot = path.join(projectRoot, '.next', 'standalone');
const standaloneNextRoot = path.join(standaloneRoot, '.next');
const sourceStaticDir = path.join(projectRoot, '.next', 'static');
const targetStaticDir = path.join(standaloneNextRoot, 'static');
const sourcePublicDir = path.join(projectRoot, 'public');
const targetPublicDir = path.join(standaloneRoot, 'public');

function ensureDirCopy(sourceDir, targetDir) {
	if (!fs.existsSync(sourceDir) || fs.existsSync(targetDir)) {
		return;
	}

	fs.mkdirSync(path.dirname(targetDir), { recursive: true });
	fs.cpSync(sourceDir, targetDir, { recursive: true });
}

// The standalone server runs from .next/standalone, so stage static/public assets there.
ensureDirCopy(sourceStaticDir, targetStaticDir);
ensureDirCopy(sourcePublicDir, targetPublicDir);

// The standalone build output includes its own self-contained Node server.
require('./.next/standalone/server.js');

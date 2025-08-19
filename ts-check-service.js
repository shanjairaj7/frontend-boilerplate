#!/usr/bin/env node

/**
 * Fast TypeScript error checking service
 * Runs TypeScript compiler in watch mode and writes errors to a file
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const ERROR_FILE = '.ts-errors.json';
const TSC_PATH = path.join(__dirname, 'node_modules', '.bin', 'tsc');

// Start TypeScript in watch mode
const tsc = spawn(TSC_PATH, [
  '-p', 'tsconfig.app.json',
  '--noEmit',
  '--watch',
  '--incremental',
  '--tsBuildInfoFile', '.tsbuildinfo',
  '--pretty', 'false'
], {
  cwd: __dirname,
  stdio: ['ignore', 'pipe', 'pipe']
});

let errorBuffer = '';
let lastErrors = [];

// Process TypeScript output
function processOutput(data) {
  const output = data.toString();
  errorBuffer += output;
  
  // Check if we have a complete error report
  if (output.includes('Found') && output.includes('error')) {
    // Parse errors
    const errors = [];
    const lines = errorBuffer.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        errors.push(line.trim());
      }
    }
    
    // Write errors to file
    fs.writeFileSync(ERROR_FILE, JSON.stringify({
      timestamp: Date.now(),
      errorCount: errors.length,
      errors: errors
    }, null, 2));
    
    console.log(`[TS-CHECK] Found ${errors.length} errors`);
    errorBuffer = '';
  } else if (output.includes('0 errors')) {
    // No errors
    fs.writeFileSync(ERROR_FILE, JSON.stringify({
      timestamp: Date.now(),
      errorCount: 0,
      errors: []
    }, null, 2));
    
    console.log('[TS-CHECK] No errors found');
    errorBuffer = '';
  }
}

tsc.stdout.on('data', processOutput);
tsc.stderr.on('data', processOutput);

tsc.on('error', (err) => {
  console.error('[TS-CHECK] Failed to start TypeScript:', err);
  process.exit(1);
});

tsc.on('close', (code) => {
  console.log(`[TS-CHECK] TypeScript process exited with code ${code}`);
  process.exit(code);
});

console.log('[TS-CHECK] TypeScript error checking service started');
console.log('[TS-CHECK] Errors will be written to:', ERROR_FILE);

// Keep process alive
process.stdin.resume();
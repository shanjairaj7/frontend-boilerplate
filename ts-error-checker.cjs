#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class TypeScriptErrorChecker {
    constructor(projectPath) {
        this.projectPath = projectPath;
        this.errorFilePath = path.join(projectPath, '.ts-errors.txt');
        this.isChecking = false;
    }

    async start() {
        console.log(`Starting TypeScript error checker for ${this.projectPath}`);
        
        // Initial check
        await this.checkErrors();
        
        // Watch for file changes
        this.watchFiles();
        
        // Periodic check every 10 seconds
        setInterval(() => {
            if (!this.isChecking) {
                this.checkErrors();
            }
        }, 10000);
    }

    watchFiles() {
        const chokidar = require('chokidar');
        
        // Watch TypeScript files
        const watcher = chokidar.watch([
            path.join(this.projectPath, 'src/**/*.{ts,tsx}'),
            path.join(this.projectPath, '*.{ts,tsx,json}')
        ], {
            ignored: /node_modules/,
            persistent: true
        });

        watcher.on('change', (filePath) => {
            console.log(`File changed: ${filePath}`);
            // Debounce: wait a bit before checking
            setTimeout(() => {
                if (!this.isChecking) {
                    this.checkErrors();
                }
            }, 1000);
        });
    }

    async checkErrors() {
        if (this.isChecking) return;
        
        this.isChecking = true;
        console.log('Checking for TypeScript errors...');

        try {
            const errors = await this.runTypeScriptCheck();
            await this.writeErrorsToFile(errors);
        } catch (error) {
            console.error('Error during TypeScript check:', error);
        } finally {
            this.isChecking = false;
        }
    }

    runTypeScriptCheck() {
        return new Promise((resolve) => {
            const tsc = spawn('npx', ['tsc', '--noEmit', '--pretty', 'false'], {
                cwd: this.projectPath,
                stdio: ['pipe', 'pipe', 'pipe']
            });

            let stdout = '';
            let stderr = '';

            tsc.stdout.on('data', (data) => {
                stdout += data.toString();
            });

            tsc.stderr.on('data', (data) => {
                stderr += data.toString();
            });

            tsc.on('close', () => {
                const output = stdout + stderr;
                const errors = this.parseTypeScriptErrors(output);
                resolve(errors);
            });
        });
    }

    parseTypeScriptErrors(output) {
        const lines = output.split('\n');
        const errors = [];
        let errorCount = 0;

        for (const line of lines) {
            // Match TypeScript error format: file(line,col): error TS####: message
            const errorMatch = line.match(/^(.+?)\((\d+),\d+\):\s*error\s+TS\d+:\s*(.+)$/);
            
            if (errorMatch) {
                errorCount++;
                const [, filePath, lineNum, message] = errorMatch;
                
                // Convert absolute path to relative
                const relativePath = path.relative(this.projectPath, filePath);
                
                errors.push(`${errorCount}. ${relativePath}:${lineNum} - ${message.trim()}`);
            }
        }

        return errors;
    }

    async writeErrorsToFile(errors) {
        try {
            let content;
            
            if (errors.length === 0) {
                content = 'No errors';
                console.log('No TypeScript errors found');
            } else {
                content = errors.join('\n');
                console.log(`Found ${errors.length} TypeScript errors`);
            }

            await fs.promises.writeFile(this.errorFilePath, content, 'utf8');
            console.log(`Errors written to ${this.errorFilePath}`);
        } catch (error) {
            console.error('Failed to write errors to file:', error);
        }
    }
}

// Start the error checker if called directly
if (require.main === module) {
    const projectPath = process.argv[2];
    
    if (!projectPath) {
        console.error('Usage: node ts-error-checker.js <project-frontend-path>');
        process.exit(1);
    }

    // Install chokidar if not present
    try {
        require('chokidar');
    } catch (error) {
        console.log('Installing chokidar...');
        const { execSync } = require('child_process');
        try {
            execSync('npm install chokidar', { cwd: projectPath, stdio: 'inherit' });
        } catch (installError) {
            console.error('Failed to install chokidar:', installError);
            process.exit(1);
        }
    }

    const checker = new TypeScriptErrorChecker(projectPath);
    checker.start().then(() => {
        console.log('TypeScript error checker started successfully');
    }).catch((error) => {
        console.error('Failed to start TypeScript error checker:', error);
        process.exit(1);
    });
}

module.exports = TypeScriptErrorChecker;
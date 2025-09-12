/**
 * Custom Logger System
 * 
 * Intercepts console logs and makes them accessible via API
 * Useful for debugging and monitoring frontend applications
 */

export interface LogEntry {
  id: string
  timestamp: number
  level: 'log' | 'warn' | 'error' | 'info' | 'debug'
  message: string
  data?: any[]
}

class CustomLogger {
  private logs: LogEntry[] = []
  private maxLogs = 1000
  private originalConsole: {
    log: typeof console.log
    warn: typeof console.warn
    error: typeof console.error
    info: typeof console.info
    debug: typeof console.debug
  }

  constructor() {
    // Store original console methods
    this.originalConsole = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info,
      debug: console.debug,
    }

    // Override console methods
    this.interceptConsole()
  }

  private interceptConsole() {
    console.log = (...args) => {
      this.addLog('log', args[0], args.slice(1))
      this.originalConsole.log(...args)
    }

    console.warn = (...args) => {
      this.addLog('warn', args[0], args.slice(1))
      this.originalConsole.warn(...args)
    }

    console.error = (...args) => {
      this.addLog('error', args[0], args.slice(1))
      this.originalConsole.error(...args)
    }

    console.info = (...args) => {
      this.addLog('info', args[0], args.slice(1))
      this.originalConsole.info(...args)
    }

    console.debug = (...args) => {
      this.addLog('debug', args[0], args.slice(1))
      this.originalConsole.debug(...args)
    }
  }

  private addLog(level: LogEntry['level'], message: any, data?: any[]) {
    const logEntry: LogEntry = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      level,
      message: typeof message === 'string' ? message : JSON.stringify(message),
      data: data && data.length > 0 ? data : undefined
    }

    this.logs.push(logEntry)

    // Keep only recent logs
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs)
    }
  }

  // Public API methods
  getLogs(): LogEntry[] {
    return [...this.logs]
  }

  getLogsByLevel(level: LogEntry['level']): LogEntry[] {
    return this.logs.filter(log => log.level === level)
  }

  getRecentLogs(count: number = 50): LogEntry[] {
    return this.logs.slice(-count)
  }

  clearLogs(): void {
    this.logs = []
  }

  // Format logs for display
  formatLogs(): string {
    return this.logs.map(log => {
      const timestamp = new Date(log.timestamp).toLocaleTimeString()
      const data = log.data ? ` ${JSON.stringify(log.data)}` : ''
      return `[${timestamp}] [${log.level.toUpperCase()}] ${log.message}${data}`
    }).join('\n')
  }

  // Restore original console (for cleanup)
  restore(): void {
    console.log = this.originalConsole.log
    console.warn = this.originalConsole.warn
    console.error = this.originalConsole.error
    console.info = this.originalConsole.info
    console.debug = this.originalConsole.debug
  }
}

// Create global logger instance
export const logger = new CustomLogger()

// Expose logger to window for debugging
if (typeof window !== 'undefined') {
  ;(window as any).appLogger = logger
}

export default logger
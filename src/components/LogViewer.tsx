/**
 * Log Viewer Component
 * 
 * Displays captured console logs in a developer-friendly interface
 */

import { useState, useEffect } from 'react'
import { logger, type LogEntry } from '@/lib/logger'

export const LogViewer = () => {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [selectedLevel, setSelectedLevel] = useState<LogEntry['level'] | 'all'>('all')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(logger.getLogs())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const filteredLogs = selectedLevel === 'all' 
    ? logs 
    : logs.filter(log => log.level === selectedLevel)

  const getLevelColor = (level: LogEntry['level']) => {
    switch (level) {
      case 'error': return 'text-red-500'
      case 'warn': return 'text-yellow-500'
      case 'info': return 'text-blue-500'
      case 'debug': return 'text-gray-500'
      default: return 'text-gray-200'
    }
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors z-50"
      >
        📋 Logs ({logs.length})
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 h-80 bg-black border border-gray-700 rounded-lg shadow-xl z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-700">
        <h3 className="text-white font-semibold">Console Logs</h3>
        <div className="flex items-center space-x-2">
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value as any)}
            className="bg-gray-800 text-white text-xs px-2 py-1 rounded border border-gray-600"
          >
            <option value="all">All</option>
            <option value="log">Log</option>
            <option value="info">Info</option>
            <option value="warn">Warn</option>
            <option value="error">Error</option>
            <option value="debug">Debug</option>
          </select>
          <button
            onClick={() => logger.clearLogs()}
            className="text-gray-400 hover:text-white text-xs px-2 py-1"
          >
            Clear
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white text-lg leading-none"
          >
            ×
          </button>
        </div>
      </div>

      {/* Logs */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {filteredLogs.length === 0 ? (
          <div className="text-gray-500 text-sm text-center mt-8">
            No logs to display
          </div>
        ) : (
          filteredLogs.slice(-50).map((log) => (
            <div key={log.id} className="text-xs font-mono">
              <div className="flex items-start space-x-2">
                <span className="text-gray-500 text-[10px] shrink-0">
                  {new Date(log.timestamp).toLocaleTimeString()}
                </span>
                <span className={`text-[10px] font-bold shrink-0 ${getLevelColor(log.level)}`}>
                  [{log.level.toUpperCase()}]
                </span>
                <span className="text-gray-200 break-words flex-1">
                  {log.message}
                </span>
              </div>
              {log.data && log.data.length > 0 && (
                <div className="ml-16 text-gray-400 text-[10px] mt-1">
                  {JSON.stringify(log.data, null, 2)}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="border-t border-gray-700 px-3 py-1 text-[10px] text-gray-500">
        {filteredLogs.length} logs
        {selectedLevel !== 'all' && ` (${selectedLevel})`}
      </div>
    </div>
  )
}

export default LogViewer
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, createLogger } from "vite";
import { copyFileSync } from "fs";

// Get project ID from environment
const projectId = process.env.VITE_APP_PROJECT_ID || "default-project";
const logApiUrl = "localhost:8084";

// Function to send logs to API (matches index.html format)
async function sendLogToAPI(type: string, message: string) {
  try {
    const logData = {
      timestamp: Date.now(),
      time: new Date().toLocaleTimeString(),
      logType: type,
      args: [message],
      message: message,
    };

    await fetch(`http://${logApiUrl}/${projectId}/server_info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Monitor-Request": "true", // Flag to identify monitoring requests
      },
      body: JSON.stringify({
        type: "logs", // 'logs' or 'network'
        ...logData,
      }),
    });
  } catch (error) {
    // Silently fail to avoid infinite loops
  }
}

// Function to send network logs to API (matches index.html format)
async function sendNetworkLogToAPI(logData: any) {
  try {
    await fetch(`http://${logApiUrl}/${projectId}/server_info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Monitor-Request": "true", // Flag to identify monitoring requests
      },
      body: JSON.stringify({
        type: "network", // 'logs' or 'network'
        ...logData,
      }),
    });
  } catch (error) {
    // Silently fail to avoid infinite loops
  }
}

// Create custom logger
const logger = createLogger();
const loggerInfo = logger.info;
const loggerWarn = logger.warn;
const loggerError = logger.error;

logger.info = (msg, options) => {
  loggerInfo(msg, options);
  sendLogToAPI("info", msg);
};

logger.warn = (msg, options) => {
  loggerWarn(msg, options);
  sendLogToAPI("warn", msg);
};

logger.error = (msg, options) => {
  loggerError(msg, options);
  sendLogToAPI("error", msg);
};

export default defineConfig({
  customLogger: logger,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "network-logger",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const startTime = Date.now();
          const originalEnd = res.end.bind(res);

          res.end = function (chunk?: any, encoding?: any, callback?: any) {
            const duration = Date.now() - startTime;
            const networkData = {
              timestamp: Date.now(),
              time: new Date().toLocaleTimeString(),
              method: req.method,
              url: req.url,
              status: res.statusCode,
              duration: duration,
              requestData: `Headers: ${JSON.stringify(req.headers, null, 2)}`,
              responseData: chunk ? String(chunk).substring(0, 1000) : "", // First 1KB of response
              responseHeaders: JSON.stringify(res.getHeaders(), null, 2),
            };

            // Send network request to API (don't await to avoid blocking)
            sendNetworkLogToAPI(networkData);

            return originalEnd(chunk, encoding, callback);
          };

          next();
        });
      },
    },
    {
      name: "copy-cloudflare-files",
      writeBundle() {
        copyFileSync("_headers", "dist/_headers");
        copyFileSync("_redirects", "dist/_redirects");
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

const winston = require("winston");
require("winston-daily-rotate-file");
const { format } = winston;
const path = require("path");

const timezoned = () => {
  return new Date().toLocaleString("es-ES", {
    timeZone: "America/Guatemala",
    hour12: false,
  });
};

const jsonFormat = format.printf(
  ({ level, message, timestamp, ...metadata }) => {
    return JSON.stringify({
      timestamp,
      level,
      message,
      ...metadata,
      service: process.env.LOG_SERVICE_NAME || "galileo-news-api",
      environment: process.env.LOG_ENVIRONMENT || "production",
    });
  },
);

const readableFormat = format.printf(
  ({ level, message, timestamp, ...metadata }) => {
    let msg = `${timestamp} | ${level.toUpperCase().padEnd(5)} | ${process.env.LOG_SERVICE_NAME || "galileo-news-api"} | ${message}`;
    if (Object.keys(metadata).length > 0) {
      msg += " | " + JSON.stringify(metadata);
    }
    return msg;
  },
);

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: path.join(process.env.LOG_DIR || "logs", "%DATE%-app.log"),
  datePattern: "YYYY-MM-DD",
  zippedArchive: process.env.LOG_COMPRESS === "true",
  maxSize: process.env.LOG_MAX_SIZE || "10m",
  maxFiles: process.env.LOG_MAX_FILES || "7d",
  format: process.env.LOG_FORMAT === "json" ? jsonFormat : readableFormat,
});

const errorFileRotateTransport = new winston.transports.DailyRotateFile({
  filename: path.join(process.env.LOG_DIR || "logs", "%DATE%-error.log"),
  datePattern: "YYYY-MM-DD",
  zippedArchive: process.env.LOG_COMPRESS === "true",
  maxSize: process.env.LOG_MAX_SIZE || "10m",
  maxFiles: process.env.LOG_MAX_FILES || "7d",
  level: "error",
  format: process.env.LOG_FORMAT === "json" ? jsonFormat : readableFormat,
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: format.combine(
    format.timestamp({ format: timezoned }),
    format.errors({ stack: true }),
    format.splat(),
  ),
  defaultMeta: {
    service: process.env.LOG_SERVICE_NAME,
    environment: process.env.LOG_ENVIRONMENT,
  },
  transports: [fileRotateTransport, errorFileRotateTransport],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: format.combine(format.colorize(), readableFormat),
    }),
  );
}

logger.logAPICall = (req, res, responseTime) => {
  const { method, originalUrl, ip, headers } = req;
  const userAgent = headers["user-agent"];
  const { statusCode } = res;

  logger.info(`API Call`, {
    method,
    url: originalUrl,
    statusCode,
    responseTime,
    ip,
    userAgent,
  });
};

logger.logError = (error, req) => {
  const { method, originalUrl, ip, headers } = req;
  const userAgent = headers["user-agent"];

  logger.error(`API Error`, {
    method,
    url: originalUrl,
    ip,
    userAgent,
    error: {
      message: error.message,
      stack: error.stack,
    },
  });
};

module.exports = logger;

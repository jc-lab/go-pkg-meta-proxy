import * as winston from 'winston';

const { printf, combine, timestamp } = winston.format;

const logFormat = printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

interface CustomLogger extends winston.Logger {
  writableStream: any;
}

const logger = winston.createLogger({
  level: 'info',
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({
      format: combine(
        timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        logFormat,
      ),
    })
  ]
}) as CustomLogger;

logger.writableStream = {// morgan wiston 설정
  write: (message: string) => {
    logger.info(message.trim());
  }
}

export default logger;

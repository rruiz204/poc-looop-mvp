import winston from "winston";

export class LoggingService {  
  public static getLogger(): winston.Logger {
    return winston.createLogger({
      level: "info",
    });
  };
};
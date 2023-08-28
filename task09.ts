class Logger {

  private static instance: Logger | null = null;

  private constructor() {}

  static getLogger(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  logMsg(msg: string): void {
    console.log(`Message Logs: ${msg}`);
  }
}

const logger1 = Logger.getLogger();
const logger2 = Logger.getLogger();

console.log(logger1 === logger2);
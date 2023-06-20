import { loggerText } from "config"
import { logger } from "lib/pino-browser"
import styles from "../styles/Home.module.css"

export function PinoButtons() {
  return (
    <div className={styles.buttonsWrap}>
      <button
        onClick={() => {
          logger.info(loggerText)
        }}
      >
        New changes using amplify CI/CD
      </button>
      <button
        onClick={() => {
          logger.warn(loggerText)
        }}
      >
        Warn
      </button>
      <button
        onClick={() => {
          logger.error(new Error("My custom error"), loggerText)
        }}
      >
        Error
      </button>
    </div>
  )
}

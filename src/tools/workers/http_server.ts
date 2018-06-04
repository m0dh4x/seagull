/** @module Tools */
import * as fs from 'fs'
import * as http from 'http'
import * as log from 'npmlog'
import { join } from 'path'
import { IWorker } from './interface'

/**
 * A local http server, serving a statically compiled app.
 */
export class HTTPServer implements IWorker {
  private server: http.Server | undefined

  constructor(public srcFolder: string, public port: number = 8080) {}

  async onFileEvent(filePath: string) {
    await this.restart()
  }

  async watcherDidStart() {
    await this.start()
  }

  async restart() {
    if (this.server && this.server!.listening) {
      await this.stop()
      await this.start()
    }
  }

  async start() {
    return new Promise((resolve, reject) => {
      this.server = this.boot()
      this.server.listen(this.port, () => {
        const message = `dev server ready on port: ${this.port}`
        log.info('', message)
        resolve()
      })
    })
  }

  async stop() {
    return new Promise((resolve, reject) => {
      this.server!.close(() => resolve())
    })
  }

  private boot() {
    return http.createServer(async (req, res) => {
      let result: string
      try {
        result = await this.handleStaticApp(req)
      } catch (error) {
        result = JSON.stringify(error, null, 2)
      }
      res.write(result)
      res.end()
    })
  }

  private async handleStaticApp(req: http.IncomingMessage) {
    const url = req.url || ''
    const filePath = join(this.srcFolder, '.seagull/dist', url)
    if (url && url !== '/' && fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8')
    } else {
      const indexFilePath = join(this.srcFolder, '.seagull/dist/index.html')
      return fs.readFileSync(indexFilePath, 'utf-8')
    }
  }
}

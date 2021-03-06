import { Command } from '@seagull/commands'
import * as fs from 'fs'
import { noop } from 'lodash'

/**
 * Command to copy a file from [[filePathFrom]] to [[filePathTo]]
 */
export class CopyFile extends Command {
  /**
   * Absolute Path to the file source location
   */
  filePathFrom: string

  /**
   * Absolute Path to the file target location
   */
  filePathTo: string

  /**
   * see the individual property descriptions within this command class
   */
  constructor(from: string, to: string) {
    super()
    this.filePathFrom = from
    this.filePathTo = to
  }

  /**
   * copy a file from [[filePathFrom]] to [[filePathTo]]
   */
  async execute() {
    return fs.copyFileSync(this.filePathFrom, this.filePathTo)
  }

  /**
   * remove a file from [[filePathTo]]
   */
  async revert() {
    return fs.unlinkSync(this.filePathTo)
  }
}

import { API, Request, Response } from '../../../lib'

export default class Greet extends API {
  method = 'POST'
  path = '/greet'
  async handle(request: Request): Promise<Response> {
    const name = request.params.name || 'world'
    return this.text(`hello ${name}`)
  }
}

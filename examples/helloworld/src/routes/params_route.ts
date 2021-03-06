import { Route } from '@seagull/routes'

export default class ParamsRoute extends Route {
  static method = 'get'
  static path = '/params/:id'
  async handler() {
    const data = {
      body: this.request.body,
      headers: this.request.headers,
      method: this.request.method,
      params: this.request.params,
      path: this.request.path,
      query: this.request.query,
    }
    this.json(data)
  }
}

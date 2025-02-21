import { isString } from './util'

class WUIError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'WUIError'
  }
}

export function throwError(scope: string, msg: string): never {
  throw new WUIError(`[${scope}] ${msg}`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope)
      ? new WUIError(`[${scope}] ${message}`)
      : scope
    // eslint-disable-next-line no-console
    console.warn(error)
  }
}
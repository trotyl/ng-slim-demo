import { enableProdMode } from '@angular/core'
import { platformBrowser } from '@angular/platform-browser'

import { AppModuleNgFactory } from './app/app.module.ngfactory'
import { environment } from './environments/environment'

window['Zone'] = {
  get current() { return this },
  assertZonePatched() { },
  fork() { return this },
  get() { return true },
  run(fn: Function) { return fn() },
  runGuarded(fn: Function) { return fn() },
}

if (environment.production) {
  enableProdMode()
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory, { ngZone: 'noop' })
  .catch(err => console.log(err))

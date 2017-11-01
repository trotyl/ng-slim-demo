import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
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

platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop' })
  .catch(err => console.log(err))

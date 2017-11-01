import { enableProdMode } from '@angular/core'
import { platformBrowser } from '@angular/platform-browser'

import { AppModuleNgFactory } from './app/app.module.ngfactory'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
  .catch(err => console.log(err))

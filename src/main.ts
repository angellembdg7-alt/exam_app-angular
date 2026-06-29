import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then(() => console.log('Angular bootstrapped successfully'))
  .catch(err => {
    console.error('Bootstrap error:', err);
    document.body.innerHTML = `<pre style="color:red;padding:2rem;font-size:14px">
BOOTSTRAP ERROR:\n${err?.message ?? err}
\nStack:\n${err?.stack ?? ''}
    </pre>`;
  });

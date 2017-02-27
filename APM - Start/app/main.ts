// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//Loads the AppModule from our application 
platformBrowserDynamic().bootstrapModule(AppModule);

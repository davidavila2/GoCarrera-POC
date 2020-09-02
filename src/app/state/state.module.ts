import { NgModule } from '@angular/core';
import {
  EntityOperators,
  NgrxAutoEntityService,
  NgrxAutoEntityModule
} from '@briebug/ngrx-auto-entity';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [],
  imports: [
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25
    // }),
    // StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    NgrxAutoEntityModule.forRoot()
  ]
})
export class StateModule { }

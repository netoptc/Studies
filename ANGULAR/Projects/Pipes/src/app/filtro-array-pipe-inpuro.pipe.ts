import { Pipe, PipeTransform } from '@angular/core';
import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayPipeInpuro',
  pure: false
})
export class FiltroArrayPipeInpuroPipe extends FiltroArrayPipe {


}

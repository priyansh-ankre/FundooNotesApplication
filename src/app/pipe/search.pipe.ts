import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(noteData: any[], searchItem: string): any {
    if (!noteData || !searchItem)
      return noteData;
    return noteData.filter((note) => {
      return ((note.title.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1) ||
        (note.description.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1));
    })
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '@stores/projects/project.model';

@Pipe({
  name: 'projectIcon',
})
export class ProjectIconPipe implements PipeTransform {
  transform(project: Project): unknown {
    return project.isShared ? 'small-user' : 'small-circle';
  }
}

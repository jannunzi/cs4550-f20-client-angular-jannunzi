import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {
  findModulesForCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${course._id}/modules`)
      .then(response => response.json())
  createModuleForCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${course._id}/modules`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Module'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  deleteModule = (module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/modules/${module._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}

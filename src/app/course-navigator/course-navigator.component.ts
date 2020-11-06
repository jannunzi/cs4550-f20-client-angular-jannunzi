import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ModuleService} from '../../services/module-service';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = []
  selectedCourse = {title: ''}

  modules = []

  constructor(private courseService: CourseService,
              private moduleService: ModuleService) { }

  createCourse = () =>
    this.courseService.createCourse()
      .then(actualCourse => this.courses.push(actualCourse))

  createModuleForCourse = (course) =>
    this.moduleService.createModuleForCourse(course)
      .then(actualModule => this.modules.push(actualModule))

  deleteModule = (module) =>
    this.moduleService.deleteModule(module)
      .then(status => this.modules = this.modules.filter(m => m !== module))

  deleteCourse = (course) =>
    this.courseService.deleteCourse(course)
      .then(status => this.courses = this.courses.filter(c => c !== course))

  selectCourse = (course) => {
    this.selectedCourse = course
    this.moduleService.findModulesForCourse(course)
      .then(modules => this.modules = modules)
  }

  editing = (course) =>
    course.editing = true

  save = (course) => {
    course.editing = false;
    this.courseService.updateCourse(course);
  }

  ngOnInit(): void {
    this.courseService.fetchAllCourses()
      .then(courses => this.courses = courses)
  }

}

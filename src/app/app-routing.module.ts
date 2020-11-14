import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';


const routes: Routes = [
  {path: 'courses', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

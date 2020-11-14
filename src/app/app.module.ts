import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {FormsModule} from '@angular/forms';
import {CourseService} from '../services/course-service';
import {ModuleService} from '../services/module-service';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPilssComponent } from './topic-pilss/topic-pilss.component';
import { WidgetListComponent } from './widget-list/widget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPilssComponent,
    WidgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseService, ModuleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

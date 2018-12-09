import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechSkillsPage } from './tech-skills';

@NgModule({
  declarations: [
    TechSkillsPage,
  ],
  imports: [
    IonicPageModule.forChild(TechSkillsPage),
  ],
})
export class TechSkillsPageModule {}

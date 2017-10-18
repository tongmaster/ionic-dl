import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RegionComponent } from './region/region';
import { ProvinceComponent } from './province/province';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [RegionComponent,
    ProvinceComponent],
	imports: [CommonModule,
		FormsModule,
		IonicModule],
	exports: [RegionComponent,
    ProvinceComponent]
})
export class ComponentsModule {}

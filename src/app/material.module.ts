import { NgModule } from "@angular/core";
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    imports: [
        MatBadgeModule, 
        MatButtonModule,
        MatListModule,
        MatTabsModule
       
    ],
    exports: [
        MatBadgeModule, 
        MatButtonModule,
        MatListModule,
        MatTabsModule     
        ]
})

export class MaterialModule {}
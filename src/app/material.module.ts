import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule
     } from '@angular/material';
@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatInputModule,MatCardModule],
    exports: [CommonModule, MatToolbarModule, MatButtonModule, MatInputModule,MatCardModule],
})
export class CustomMaterialModule { }

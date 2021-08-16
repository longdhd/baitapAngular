import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './Directive.component';
import { MaterialModule } from '../Material/Material.module';

@NgModule({
    imports: [CommonModule,FormsModule,MaterialModule],
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent],
    providers: [],
})

export class DirectiveModule { }

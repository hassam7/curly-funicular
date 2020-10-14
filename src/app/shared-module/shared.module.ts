import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FileSizePipe } from '../services/file-size.pipe';

const SHARED_MODULES = [
  NzButtonModule,
  NzInputModule,
  NzTableModule,
  NzDividerModule,
  NzMenuModule,
  NzFormModule,
  NzSelectModule,
  CommonModule,
  FormsModule
];

@NgModule({
  imports: [...SHARED_MODULES],
  declarations: [FileSizePipe],
  exports: [...SHARED_MODULES, FileSizePipe],
})
export class SharedModule { }

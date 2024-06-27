import { NgModule } from '@angular/core';
// import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
const MaterialComponents=[
  // MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [MatButtonModule,MatListModule, MatToolbarModule,MatIconModule,MatGridListModule ,MatSidenavModule],
  exports: [MatButtonModule,MatListModule, MatToolbarModule, MatIconModule,MatGridListModule,MatSidenavModule],
})
export class MaterialModule {}

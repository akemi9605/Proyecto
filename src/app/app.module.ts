import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages//header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages//characters/characters.component';
import { HousesComponent } from './pages/houses/houses.component';
import { HouseComponent } from './pages/houses/house/house.component';
import { CharacterComponent } from './pages/character/character.component';
import { MenuComponent } from './pages//header/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './core/service/character.service';
import { HouseService } from './core/service/house.service';
import { TabsComponent } from './tabs/tabs.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { TimelineService } from './timeline.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CharactersComponent,
    HousesComponent,
    HouseComponent,
    CharacterComponent,
    MenuComponent,
    TabsComponent,
    FilterPipe,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    CharacterService,
    HouseService,
    TimelineService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { NavComponent } from './nav/nav.component';
import { SelectRepositoryComponent } from './select-repository/select-repository.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardIndicatorsComponent } from './dashboard-indicators/dashboard-indicators.component';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';
import { DashboardIndicatorComponent } from './dashboard-indicator/dashboard-indicator.component';
import { DashboardRankingsComponent } from './dashboard-rankings/dashboard-rankings.component';
import { DashboardRankingComponent } from './dashboard-ranking/dashboard-ranking.component';
import { SelectProjectComponent } from './select-project/select-project.component';
import { SelectDeveloperComponent } from './select-developer/select-developer.component';
import { RankingSelectorComponent } from './ranking-selector/ranking-selector.component';
import { RankingSelectorService } from './shared/services/ranking-selector.service';
import { SelectPresetPeriodComponent } from './select-preset-period/select-preset-period.component';
import { SiblingPeriodService } from './shared/services/sibling-period.service';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { DateSelectorDialogComponent } from './date-selector-dialog/date-selector-dialog.component';
import { SelectDatepickerComponent } from './select-datepicker/select-datepicker.component';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularTokenModule } from 'angular-token';
import { environment } from 'src/environments/environment';
import { SelectRepositoriesService } from './shared/services/select-repositories.service';
import { AdminComponent } from './admin/admin.component';
import { SignupService } from './shared/services/signup.service';
import { PersistenceComponent } from './persistence/persistence.component';
import { PersistenceRankingComponent } from './persistence-ranking/persistence-ranking.component';
import { PersistenceTableComponent } from './persistence-table/persistence-table.component';
import { PersistenceChartComponent } from './persistence-chart/persistence-chart.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PersistenceService } from './shared/services/persistence.service';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { CommitmentComponent } from './commitment/commitment.component';
import { RankingComponent } from './ranking/ranking.component';
import { CommitmentTableComponent } from './commitment-table/commitment-table.component';
import { CommitmentChartComponent } from './commitment-chart/commitment-chart.component';
import { CommitmentRankingComponent } from './commitment-ranking/commitment-ranking.component';
import { CommitmentService } from './shared/services/commitment.service';
import { ContextService } from './shared/services/context.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardManagerComponent,
    NavComponent,
    SelectRepositoryComponent,
    DashboardIndicatorsComponent,
    DashboardChartComponent,
    DashboardIndicatorComponent,
    DashboardRankingsComponent,
    DashboardRankingComponent,
    SelectProjectComponent,
    SelectDeveloperComponent,
    RankingSelectorComponent,
    SelectPresetPeriodComponent,
    DateSelectorComponent,
    DateSelectorDialogComponent,
    SelectDatepickerComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    PersistenceComponent,
    PersistenceRankingComponent,
    PersistenceTableComponent,
    PersistenceChartComponent,
    ThankYouPageComponent,
    CommitmentComponent,
    RankingComponent,
    CommitmentTableComponent,
    CommitmentChartComponent,
    CommitmentRankingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ChartsModule,
    SatDatepickerModule, 
    SatNativeDateModule,
    NgxPaginationModule,
    AngularTokenModule.forRoot({
      apiBase: environment.baseUrl
    })
  ],
  providers: [
    RankingSelectorService,
    SiblingPeriodService,
    DatePipe,
    AngularTokenModule,
    SelectRepositoriesService,
    SignupService,
    PersistenceService,
    CommitmentService, 
    ContextService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DateSelectorDialogComponent]
})
export class AppModule { }

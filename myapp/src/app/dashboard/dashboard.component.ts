import { Component, OnInit } from '@angular/core';
import { PieChartComponent } from '@swimlane/ngx-charts';
import { FcService } from '../service/FcService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [FcService]
})
export class DashboardComponent implements OnInit {

  public pieData: any[];
  public lineData: any[];
  public currentTab:string;
  public headContext:string;
  template: any[] = [
    {
      name: 'template',
      series: [
        {
          name: "demo",
          value: 0
        }
      ]
    }]

  viewPie: any[] = [900, 600];
  viewLine: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Score';
  timeline = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(private fcService: FcService) {
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    var username = localStorage.getItem("username");
    this.currentTab = "dashboard";
    this.headContext = "DashBoard"
    this.fcService.sendPost(username, "/api/rulestat/fetchSummary").subscribe(res => {
      this.pieData = res;
    })

    this.fcService.sendPost(username, "/api/rulestat/fetchMonthly").subscribe(res => {
      this.lineData = this.template;
      this.lineData[0].name = "Statistic";
      this.lineData[0].series = res;
    })
  }
  

}

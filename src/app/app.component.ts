import { Component } from '@angular/core';

@Component({
  selector: 'app-ssrs',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  reportServer: string = 'http://rpsvr02/reportserver';
  pdfSrc: string = 'Departments/General Reports/SampleWithParameters';
  showparameters: string = "collapsed"; //true, false, collapsed
  parameters: any = {
   "SampleStringParameter": null,
   "SampleBooleanParameter" : false,
   "SampleDateTimeParameter" : "9/1/2017",
   "SampleIntParameter" : 1,
   "SampleFloatParameter" : "123.1234",
   "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
   };
  language: string = "en-us";
  width: number = 100;
  height: number = 100;
/*
  reportServer: string = 'http://rpsvr02/reportserver';
  pdfSrc: string = 'Departments/General Reports/Sample';
  showparameters: string = "false"; //true, false, collapsed
  language: string = "en-us";
*/
}
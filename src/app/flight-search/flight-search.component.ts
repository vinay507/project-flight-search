import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  constructor() { }

  activeTab: number;
  oneWayParam = {
    origin: 'pune',
    destination: 'delhi',
    departure: '',
    passengers: 1,
    range: 0
  }
  returnParam = {
    origin: 'pune',
    destination: 'mumbai',
    departure: '',
    return: '',
    passengers: 1,
    range: 0
  }
  searchedParams;
	isSearched = false;
	searchResults: any;
  data = [
    {"id": 1, "origin": "Pune", "destination": "Delhi", "flights": [
        {"id": 11, "cost": 2500.00, "oneWay": {"id": "AI-202", "code": "PNG > DEL", "depart": "5.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "DEL > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}},
        {"id": 11, "cost": 2900.00, "oneWay": {"id": "AI-202", "code": "PNG > DEL", "depart": "2.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "DEL > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}},
        {"id": 11, "cost": 3500.00, "oneWay": {"id": "AI-202", "code": "PNG > DEL", "depart": "1.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "DEL > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}}
    ]},
    {"id": 1, "origin": "Pune", "destination": "Mumbai", "flights": [
      {"id": 11, "cost": 2500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "10.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}},
      {"id": 11, "cost": 5500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "12.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}},
      {"id": 11, "cost": 6500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "1.00 PM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}}
  ]},
  {"id": 1, "origin": "Mumbai", "destination": "Delhi", "flights": [
    {"id": 11, "cost": 1500.00, "oneWay": {"id": "AI-202", "code": "MUM > DEL", "depart": "10.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "DEL > MUM", "depart": "8.00 PM", "arrive": "11.00 PM"}},
    {"id": 11, "cost": 4500.00, "oneWay": {"id": "AI-202", "code": "MUM > DEL", "depart": "12.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "DEL > MUM", "depart": "8.00 PM", "arrive": "11.00 PM"}},
    {"id": 11, "cost": 5500.00, "oneWay": {"id": "AI-202", "code": "MUM > DEL", "depart": "9.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "DEL > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}}
  ]},
  {"id": 1, "origin": "Delhi", "destination": "Mumbai", "flights": [
		{"id": 11, "cost": 3500.00, "oneWay": {"id": "AI-202", "code": "DEL > MUM", "depart": "1.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > DEL", "depart": "8.00 PM", "arrive": "11.00 PM"}},
		{"id": 11, "cost": 2500.00, "oneWay": {"id": "AI-202", "code": "DEL > MUM", "depart": "4.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > DEL", "depart": "8.00 PM", "arrive": "11.00 PM"}},
		{"id": 11, "cost": 4500.00, "oneWay": {"id": "AI-202", "code": "DEL > MUM", "depart": "7.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > DEL", "depart": "8.00 PM", "arrive": "11.00 PM"}}
  ]},
  
];

  ngOnInit() {
    this.activeTab = 1;
  }

  changeTab(tab){
    this.activeTab = tab;
    this.isSearched = false;
  }

  search = (form, flag) => {
    let isEnter = false;
		if(!form.valid) return;
		this.isSearched = true;
    if(flag == 'oneway'){
			let copy = Object.assign({}, this.oneWayParam);
      this.searchedParams = copy;
      if(this.oneWayParam.origin && this.oneWayParam.destination){
        this.data.map(flights => {
          if(this.oneWayParam.origin == flights.origin.toLowerCase() && this.oneWayParam.destination == flights.destination.toLowerCase() && !isEnter){
            isEnter = true;
            this.searchResults = flights;
          }
        })
      }
    }else {
			let copy = Object.assign({}, this.returnParam);
      this.searchedParams = copy;
      if(this.returnParam.origin && this.returnParam.destination){
        this.data.map(flights => {
          if(this.returnParam.origin == flights.origin.toLowerCase() && this.returnParam.destination == flights.destination.toLowerCase() && !isEnter){
            isEnter = true;
            this.searchResults = flights;
          }
        })
      }
    }
		
  }
       


}

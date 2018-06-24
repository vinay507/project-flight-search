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
    returnorigin: 'pune',
    returndestination: 'mumbai',
    returndeparture: '',
    return: '',
    returnpassengers: 1,
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
  {"id": 1, "origin": "Hyd", "destination": "Pune", "flights": [
    {"id": 11, "cost": 2500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "10.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}},
    {"id": 11, "cost": 5500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "12.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}},
    {"id": 11, "cost": 6500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "1.00 PM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}}
  ]},
    {"id": 1, "origin": "Hyd", "destination": "Mumbai", "flights": [
      {"id": 11, "cost": 2500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "10.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}},
      {"id": 11, "cost": 5500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "12.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}},
      {"id": 11, "cost": 6500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "1.00 PM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}}
    ]},
      {"id": 1, "origin": "Hyd", "destination": "Delhi", "flights": [
        {"id": 11, "cost": 2500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "10.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}},
        {"id": 11, "cost": 5500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "12.00 AM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}},
        {"id": 11, "cost": 6500.00, "oneWay": {"id": "AI-202", "code": "PNG > MUM", "depart": "1.00 PM", "arrive": "12.00 PM"}, "return": {"id": "AI-203", "code": "MUM > PNG", "depart": "8.00 PM", "arrive": "11.00 PM"}}    
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
		if(!form.valid) return;
		this.isSearched = true;
    if(flag == 'oneway'){
			let copy = Object.assign({}, form.value);
      this.searchedParams = copy;
    }else {
			let copy = Object.assign({}, form.value);
      this.searchedParams = copy;
		}
		let isEnter = false;
		if(form.value.origin && form.value.destination){
			this.data.map(flights => {
				if(form.value.origin == flights.origin.toLowerCase() && form.value.destination == flights.destination.toLowerCase() && !isEnter){
					isEnter = true;
					this.searchResults = flights;
				}
			})
		}
  }
       


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  selectedMale = true;
  selectedFemale = true;
  searchText = '';

  data = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female',
    },
    {
      id: 2,
      first_name: 'Giavani',
      last_name: 'Frediani',
      email: 'gfrediani1@senate.gov',
      gender: 'Male',
    },
    {
      id: 3,
      first_name: 'Noell',
      last_name: 'Bea',
      email: 'nbea2@imageshack.us',
      gender: 'Female',
    },
    {
      id: 4,
      first_name: 'Willard',
      last_name: 'Valek',
      email: 'wvalek3@vk.com',
      gender: 'Male',
    },
  ];
  newCandidategenderMale = true;
  newCandidategenderFemale = false;
  displayData = this.data;
  newCandidate = {
    id: 5,
    first_name: '',
    last_name: '',
    email: '',
    gender: 'Male',
  };
  constructor() {}

  ngOnInit() {}
  changeGender(gen) {
    if (gen == 'F') {
      this.newCandidategenderMale = false;
      this.newCandidategenderFemale = true;
    } else {
      this.newCandidategenderFemale = false;
      this.newCandidategenderMale = true;
    }
  }
  addCandidate() {
    if (this.newCandidategenderFemale) {
      this.newCandidate.gender = 'Female';
    } else {
      this.newCandidate.gender = 'Male';
    }
    this.data.push(this.newCandidate);
    let newId = this.newCandidate.id + 1;
    this.newCandidate = {
      id: newId,
      first_name: '',
      last_name: '',
      email: '',
      gender: 'Male',
    };
    this.displayData = this.data;
    this.selectedFemale = true;
    this.selectedMale = true;
    this.searchText = '';
  }
  filtergender(gen) {
    if (gen == 'M') {
      this.selectedMale = !this.selectedMale;
    } else {
      this.selectedFemale = !this.selectedFemale;
    }

    this.filterData();
  }
  searchByNameEmail() {
    let tempData = this.data;
    console.log(this.searchText);
    if (this.searchText != '') {
      tempData = [];
      for (let index = 0; index < this.data.length; index++) {
        if (
          this.data[index].first_name == this.searchText ||
          this.data[index].email == this.searchText ||
          this.data[index].last_name == this.searchText
        ) {
          tempData.push(this.displayData[index]);
        }
      }
    }
    this.displayData = tempData;
  }

  filterData() {
    this.displayData = [];
    for (let index = 0; index < this.data.length; index++) {
      if (
        (this.selectedFemale && this.selectedMale) ||
        (!this.selectedFemale && !this.selectedMale)
      ) {
        this.displayData.push(this.data[index]);
      } else if (
        this.selectedFemale &&
        !this.selectedMale &&
        this.data[index].gender == 'Female'
      ) {
        this.displayData.push(this.data[index]);
      } else if (
        this.selectedMale &&
        !this.selectedFemale &&
        this.data[index].gender == 'Male'
      ) {
        this.displayData.push(this.data[index]);
      }
    }
  }
}

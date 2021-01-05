import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { JsondataService } from '../jsondata.service';

@Component({
  selector: 'app-usersposts',
  templateUrl: './usersposts.component.html',
  styleUrls: ['./usersposts.component.scss']
})
export class UserspostsComponent implements OnInit {
data = [
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    // { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    // { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    // { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
  ];
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(public userData: JsondataService) { }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    this.getallPosts()
  }


  getallPosts() {
    this.userData.getallPosts().subscribe(res => {
      this.data = res;
      this.dtTrigger.next()
    })
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



}

import { Component, OnInit } from '@angular/core';
import { SharedDataUsersService } from './data';
import { UserProfileService } from '../../../core/services/user.service';
import { User } from '../../../core/models/auth.models';
import { Pagination } from '../../../core/models/pagination.models';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

/**
 * Contacts user-list component
 */
export class UserlistComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  listData: User[];
  loading = false;
  page = 1;
  totalItems = 0;

  constructor(private dataService: SharedDataUsersService, private userService: UserProfileService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'System Users' }, { label: 'Users List', active: true }];
    //this.dataService.currentTable.subscribe(tableData => (this.listData = tableData));
    this.navigateToPage(1);
  }

  navigateToPage(nextPage){
    this.loading = true;
    this.userService.getAll(nextPage).subscribe(users => {
      this.listData = users.docs;
      this.page = users.page;
      this.totalItems = users.totalDocs;
      this.loading = false;
    })
  }
}

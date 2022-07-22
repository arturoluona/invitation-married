import { Component, OnInit } from '@angular/core';
import {ListInvitationsService} from "../../list-invitations.service";
import {ListInvitations} from "../../ListInvitations";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-section-third',
  templateUrl: './section-third.component.html',
  styleUrls: ['./section-third.component.scss']
})
export class SectionThirdComponent implements OnInit {

  listInvitations!: ListInvitations;

  constructor(private invitationService: ListInvitationsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((param) => {
      const id = param.get('id');
      const user = this.invitationService.listInvitations.find((item) => item.id == id);
      this.listInvitations = user as ListInvitations;
    });
  }

}

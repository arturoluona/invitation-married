import { TestBed } from '@angular/core/testing';

import { ListInvitationsService } from './list-invitations.service';

describe('ListInvitationsService', () => {
  let service: ListInvitationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListInvitationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

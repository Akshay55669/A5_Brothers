import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';


import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {


    TestBed.configureTestingModule({
      declarations: [HttpClient],
            imports: [HttpClient,BrowserDynamicTestingModule],
            providers: [HttpClient]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

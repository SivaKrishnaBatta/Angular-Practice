import { TestBed } from '@angular/core/testing';

import { Observable } from './observable';
import { provideHttpClient } from '@angular/common/http';
describe('Observable', () => {
  let service: Observable;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(Observable);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { DataService } from './data.service';
import {
  BaseRequestOptions, Http, XHRBackend, HttpModule,
  Response, ResponseOptions, RequestMethod
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

describe('DataService', () => {
  let mockBackend: MockBackend;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
      imports: [
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));


  it('should get ObservableArr', (done) => {
    let dataService: DataService;

    getTestBed().compileComponents().then(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: [Observable, Observable]
            }
            )));
        });

      dataService = getTestBed().get(DataService);
      expect(DataService).toBeDefined();

      dataService.getChar().subscribe((obsArr: Observable<any>[]) => {
        expect(obsArr.length).toBeDefined();
        expect(obsArr.length).toEqual(2);
        expect(obsArr.length).not.toBe(1);
        done();
      });
    });
  });


  it('should check the service',
    inject([DataService], (service: DataService) => {
      expect(service).toBeTruthy();
    }));

  it('should get ObservableArray async',
    async(inject([DataService], (dataService: DataService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: [Observable, Observable]
            }
            )));
        });
      dataService.getChar().subscribe(
        (response) => {
          expect(response.length).toBe(2);
          // expect(response[0].name).toBe('Observable');
          // expect(response[1].name).toBe('Observable');
          // expect(response).toEqual([Observable, Observable]);
        });
    })));
});

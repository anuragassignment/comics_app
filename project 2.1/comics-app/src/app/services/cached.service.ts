import { Injectable, OnDestroy } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class CachedService {

  comicsArr: {}[];
  data: {}[];
  charDt: {}[];
  charArr: {}[];
  chDd: {}[];
  comDd: {}[];
  chDtls: {}[];
  comDtls: {}[];
  allCom: {}[];
  allComLst: {}[];
  allCre: {}[];
  allCreLst: {}[];
  constructor(private dt: DataService) { }

  getComics(): void {
    this.dt.getChar().subscribe((responses: Response) => {
      this.data = responses[1].json().data.results;
      this.comicsArr = this.data;
      console.log(this.comicsArr);
      // this.comicsList = [...this.comicsArr];
    },
      (error: Response) => {
        console.log(error);
      }
    );
  }
  getChar(): void {
    this.dt.getChar().subscribe((responses: Response) => {
      this.charDt = responses[0].json().data.results;
      this.charArr = this.charDt;
      console.log(this.charArr);
    },
      (error: Response) => {
        console.log(error);
      });
  }

  getCharDe(id: string): void {
    this.dt.charId = id;
    this.dt.getChar().subscribe((responses: Response) => {
      this.chDd = (responses[2] ? responses[2] : responses[4]).json().data.results;
      this.chDtls = this.chDd;
      console.log(responses);
    },
      (error: Response) => {
        console.log(error);
      });
  }

  getComDe(id: string): void {
    this.dt.comicsId = id;
    this.dt.getChar().subscribe((responses: Response) => {
      this.comDd = (responses[4] ? responses[4] : responses[2]).json().data.results;
      this.comDtls = this.comDd;
      console.log(this.comDtls);
    },
      (error: Response) => {
        console.log(error);
      });
  }

  getAllCom(): void {
    this.dt.getChar().subscribe((responses: Response) => {
      this.allCom = (responses[3] ? responses[3] : responses[5]).json().data.results;
      this.allComLst = this.allCom;
      console.log(this.allComLst);
    },
      (error: Response) => {
        console.log(error);
      });
  }
  getAllCre(): void {
    this.dt.getChar().subscribe((responses: Response) => {
      this.allCre = (responses[5] ? responses[5] : responses[3]).json().data.results;
      this.allCreLst = this.allCre;
      console.log(this.allComLst);
    },
      (error: Response) => {
        console.log(error);
      });
  }
}

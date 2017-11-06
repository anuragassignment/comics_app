import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CachedService } from '../../services/cached.service';

// On clicking on the character, it routes to another URL
// and in that it gives back the information about the characters.
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  providers: [CachedService]
})
export class CharacterDetailsComponent implements OnInit, DoCheck {

  charDtls: {}[];
  constructor(private route: ActivatedRoute, private chDl: CachedService, private router: Router) { }

  ngOnInit() {
    this.chDl.getCharDe(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.params['id']);
  }

  ngDoCheck() {
    this.charDtls = this.chDl.chDtls;
    console.log(this.charDtls);
  }

  onClick() {
    this.router.navigate(['comics'], { relativeTo: this.route });
    console.log(this.route);
  }
}



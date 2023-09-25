import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterDetail } from 'src/app/model/character-detail';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  character?: CharacterDetail;
  
  //ActivatedRoute è come il search params di javascript
  constructor(private route: ActivatedRoute, private dataServ: DataService,private router:Router) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.dataServ
        .getSingleCharacter(id)
        .subscribe((char) => (this.character = char));
    }
  }
  navigateToLocation(){
    const url = this.character!.location.url;
    const urlArray = url.split('/');
    const lastElement = urlArray[urlArray.length-1];
    console.log(lastElement);
    this.router.navigateByUrl('/location/'+lastElement)
  }
  navigateToOrigin(){
    const url = this.character!.origin.url;
    const urlArray = url.split('/');
    const lastElement = urlArray[urlArray.length-1];
    console.log(lastElement);
    this.router.navigateByUrl('/origin/'+lastElement)
  }

}

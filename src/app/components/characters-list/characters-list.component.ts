import { Component, OnInit } from '@angular/core';
import { CharacterDetail } from 'src/app/model/character-detail';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters: CharacterDetail[] =[];
  constructor(private data: DataService){}

  ngOnInit(): void {

    // this.data.getAllCharacters().subscribe(characters=>console.log(this.characters=characters))
    this.data.allCharacters.subscribe(chars=> this.characters=chars)

  }

}

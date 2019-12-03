import { Component, OnInit } from '@angular/core';
import { SelectRepositoriesService } from '../shared/services/select-repositories.service';

@Component({
  selector: 'app-select-repository',
  templateUrl: './select-repository.component.html',
  styleUrls: ['./select-repository.component.css']
})
export class SelectRepositoryComponent implements OnInit {

  constructor(private selectRepositoriesService: SelectRepositoriesService) { }

  public repositorySelected;
  public repositoryList;

  ngOnInit() {
    this.selectRepositoriesService.getRepositories().subscribe(res => {
      this.repositoryList = res;
      console.log('this.repositoryList', this.repositoryList)
    })
  }

  onRepositorySelect(repo) {
    console.log('repoonselect:', repo)
  }

}

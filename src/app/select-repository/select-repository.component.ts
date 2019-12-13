import { Component, OnInit, OnDestroy } from '@angular/core';
import { SelectRepositoriesService } from '../shared/services/select-repositories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-repository',
  templateUrl: './select-repository.component.html',
  styleUrls: ['./select-repository.component.css']
})
export class SelectRepositoryComponent implements OnInit, OnDestroy {

  constructor(private selectRepositoriesService: SelectRepositoriesService) { }

  public repositorySelected;
  public repositoryList;
  private repositoriesSubcription: Subscription;

  ngOnInit() {
    this.repositoriesSubcription = this.selectRepositoriesService.getRepositories().subscribe(res => {
      this.repositoryList = res;
    })
  }

  onRepositorySelect(repo) {
    console.log('repoonselect:', repo)
  }

  ngOnDestroy() {
    if(this.repositoriesSubcription) {
      this.repositoriesSubcription.unsubscribe();
    }
  }

}

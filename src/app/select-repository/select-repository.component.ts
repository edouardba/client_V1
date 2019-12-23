import { Component, OnInit, OnDestroy } from '@angular/core';
import { SelectRepositoriesService } from '../shared/services/select-repositories.service';
import { Subscription } from 'rxjs';
import { ContextService } from '../shared/services/context.service';

@Component({
  selector: 'app-select-repository',
  templateUrl: './select-repository.component.html',
  styleUrls: ['./select-repository.component.css']
})
export class SelectRepositoryComponent implements OnInit, OnDestroy {

  constructor(private selectRepositoriesService: SelectRepositoriesService, private contextService: ContextService) { }

  public repositorySelected;
  public repositoryList;
  private repositoriesSubcription: Subscription;

  ngOnInit() {
    this.repositoriesSubcription = this.selectRepositoriesService.getRepositories().subscribe(res => {
      this.repositoryList = res;
    })
  }

  onRepositorySelect(id) {
    this.contextService.changeRepositoryId(id)
    console.log('repoonselect:', id)
  }

  ngOnDestroy() {
    if(this.repositoriesSubcription) {
      this.repositoriesSubcription.unsubscribe();
    }
  }

}

import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
  DestroyRef
} from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { UserService } from '../../core/services';

@Directive({ selector: '[appShowAuthed]' })
export class ShowAuthedDirective implements OnInit {
  @Input() set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }
  condition: boolean;
  destroyRef = inject(DestroyRef);

  constructor(
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private viewContainer: ViewContainerRef
  ) {}


  ngOnInit() {
    this.userService.isAuthenticated.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(
      (isAuthenticated) => {
        this.viewContainer.clear();
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }
    );
  }


}

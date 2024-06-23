import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, SharedModule } from '../../shared';
import { UserService } from '../../core/services';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  authForm: UntypedFormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: UntypedFormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(([{path: authType}]) => {
      this.authType = authType;
      this.title = (authType === 'login') ? 'Sign in' : 'Sign up';

      if (authType === 'register') {
        this.authForm.addControl('username', new UntypedFormControl());
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.authForm.value;
    this.userService
    .attemptAuth(this.authType, credentials)
    .subscribe({
      next: () =>  {
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        this.errors = err;
        this.isSubmitting = false;
      }
    });
  }
}

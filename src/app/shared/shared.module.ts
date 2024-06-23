import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent, FavoriteButtonComponent, 
  FollowButtonComponent, ListErrorsComponent, ArticleCommentComponent, ArticleComponent } from './components';

import { ArticlesService, CommentsService, TagsService, ProfilesService, ApiService } from './services';
import { ShowAuthedDirective } from './directives';
import { MarkdownPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    ArticlesService,
    CommentsService,
    ProfilesService,
    TagsService,
    ApiService
  ],
  declarations: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    ListErrorsComponent,
    ArticleCommentComponent,
    ArticleComponent,
    ShowAuthedDirective,
    MarkdownPipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    ListErrorsComponent,
    ArticleCommentComponent,
    ArticleComponent,
    ShowAuthedDirective,
    MarkdownPipe,
  ]
})
export class SharedModule {}

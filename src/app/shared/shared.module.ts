import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent, FavoriteButtonComponent, 
  FollowButtonComponent, ListErrorsComponent, ArticleCommentComponent, ArticleComponent, FooterComponent,
  HeaderComponent } from './components';

import { UserService, ApiService, ArticlesService, CommentsService, JwtService, TagsService, ProfilesService } from './services';
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
    UserService, 
    ApiService, 
    ArticlesService,
    CommentsService, 
    JwtService,
    ProfilesService,
    TagsService
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
    FooterComponent,
    HeaderComponent,
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
    FooterComponent,
    HeaderComponent,
    MarkdownPipe,
  ]
})
export class SharedModule {}

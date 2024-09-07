import { Component } from '@angular/core';
import { PostService } from './post.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  public resposta: any;

  constructor(private postService: PostService) {

  }

  public buscarPosts() {
    this.postService.buscarPosts().then(r => {
      this.resposta = r;
      console.log(r);
    })
  }

}

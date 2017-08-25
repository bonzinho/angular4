import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-post-save',
  templateUrl: './post-save.component.html',
  styleUrls: ['./post-save.component.css']
})
export class PostSaveComponent implements OnInit {

  post =  {
    id: null,
    title: '',
    body: '',
  };

  constructor(
      private postService: PostService,
      private router: Router, // para poder fazer redirecionamentos
      private route: ActivatedRoute, // aceder à rota que estamos (verificar a rota atual)
      private messageService: MessageService
  ) { }

  ngOnInit() {
    // para aceder aos parametro e necessario usar o route.params.subscribe(params=> {})
    this.route.params.subscribe(params => {
      if(params.hasOwnProperty('id')) { // verifica se no url existe o prametro id
        this.postService.find(+params['id']) // +params['id] converte para numero
            .subscribe(data => this.post = data); // subscribe = success, recebe a variavel data do posService.find()
      }
    });
  }

  save() {
    this.postService.save(this.post)
        .subscribe( () => {
          this.messageService.message = 'Post Editado com sucesso';
          this.router.navigate(['/posts']);
        });
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../services/post.service';
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<any> = [];
  postToDelete = null;
  message = null;

  @ViewChild(ModalComponent) // para guardar a instancia do componente inteiro, ou seja do modal completo
  modal: ModalComponent;

  constructor(private postService: PostService, private messageService: MessageService) {
      this.message = this.messageService.message;
  }

  ngOnInit() {
   this.postService.query()
       .subscribe(data => this.posts = data);
  }

  /*destroy(id, index) {
    if (confirm('Deseja excluir este post?')){
      this.postService.destroy(+id) // +id para passar para tipo number
          .subscribe( () => {
            this.posts.splice(index, 1); // remove o index passado para o destroy
              alert('Post removido');
          });

    }
  }*/
  destroy() {
    this.postService.destroy(+this.postToDelete.id) // +id para passar para tipo number
        .subscribe( () => {
          const index = this.posts.indexOf(this.postToDelete);
          this.posts.splice(index, 1); // remove o index passado para o destroy
          this.modal.close();

        });
  }

  openModal(post) {
    this.postToDelete = post;
    // abrir o modal
    this.modal.open();

  }

}

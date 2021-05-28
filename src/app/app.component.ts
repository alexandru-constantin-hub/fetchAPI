import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { APIjson } from './APIjson';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fetchAPI';
  closeResult = '';
  selection = ['Java', 'CSS', 'Git', 'Learn to code', 'JavaScript'];
  selected = '';



  constructor(private rs : RestService, private modalService: NgbModal){}
  columns = ["ID", "Description", "URL", "Types", "Topics", "Levels"];
  index = ["id", "description", "url", "types", "topics", "levels"];
  filteredData = [];

  data : APIjson[] = [];

  ngOnInit(): void {
    this.rs.getData().subscribe(
      (response)=> {
        this.data = response;
      },
      (error)=>{
        console.log("Error Occured: "+ error);
      }
    )
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  selectChangeHandler(event: any) {

    this.selected = event.target.value;

  }



}

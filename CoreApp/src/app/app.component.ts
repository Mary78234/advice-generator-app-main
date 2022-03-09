import { Component, OnInit } from '@angular/core';
import { AdviceService } from './advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CoreApp';
  advice!: any;
  constructor(private adviceService: AdviceService){
  }

  ngOnInit(): void {
    this.load();
  }

  private load(){
    this.adviceService.getAdvice().subscribe(res =>{
      if(res){
        this.advice = res;
      } else {
        alert("Advice not found");
      }
    })
  }
}

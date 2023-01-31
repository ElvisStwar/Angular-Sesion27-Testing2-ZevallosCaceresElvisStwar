import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testing2';

  formLogin!:FormGroup;
  enviado!:boolean

  constructor(private formBuilder:FormBuilder, private cd:ChangeDetectorRef){}

  ngOnInit(): void {
      
    this.formLogin = this.formBuilder.group({

      username:['',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      password:['',
        [
          Validators.required,
          Validators.minLength(4)

        ]
      ]
    })
    
  }

  onSubmit(){

    this.enviado=true
    setTimeout(() => {
      this.enviado=false
    }, 1500);
  }





}

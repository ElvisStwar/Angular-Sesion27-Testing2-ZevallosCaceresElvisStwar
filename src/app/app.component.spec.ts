import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('testing2');
  });

  it('Espero que el formulario sea invalido',()=>{
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    fixture.detectChanges();

    let formulario = app.formLogin;
    let username = app.formLogin.controls['username'];
    let password = app.formLogin.controls['password'];

    // username.setValue('elvis.stwar@hotmail.com');
    // password.setValue('123456789');
    
    expect(app.formLogin.invalid).toBeTruthy();
  })

  it('Espero que el formulario sea valido',()=>{
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    fixture.detectChanges();

    let formulario = app.formLogin;
    let username = app.formLogin.controls['username'];
    let password = app.formLogin.controls['password'];

    username.setValue('elvis.stwar@hotmail.com');
    password.setValue('123456789');
    
    expect(app.formLogin.valid).toBeTruthy();
  })

});

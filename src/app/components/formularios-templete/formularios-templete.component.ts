import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators, ControlContainer } from '@angular/forms';


@Component({
  selector: 'app-formularios-templete',
  templateUrl: './formularios-templete.component.html',
  styles: []
})
export class FormulariosTempleteComponent implements OnInit {

  public formulario: FormGroup;

  constructor() {
    //Se ejecuta cuando entra el componente 
  }

  ngOnInit() { 
     //Se ejecuta cuando css y html se terminaron de renderizar 
     this.CrearFormulario();
  }

  public CrearFormulario():void{//void no return ningun valor

    this.formulario = new FormGroup({
      name :  new FormControl(null,[Validators.minLength(5),Validators.required, this.No_Numeros]),
      email : new FormControl(null,[Validators.required,Validators.pattern( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
      mensaje : new FormControl(null,[Validators.required, Validators.minLength(5)]),
      password1:new FormControl(null,[Validators.minLength(8), Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
      password2:new FormControl(null)
    })
    this.formulario.controls.password2.setValidators(this.MatchPassword.bind((this)))
  }


  public VerEstadoFormulario():void{
    console.log(this.formulario)
  }

//Key es una variable de apoyo 
  private No_Numeros(control:FormControl):{[key:string]:boolean}{
    // console.log(control);
    if(control.value==null) return null

    let regex:RegExp = /^\w+@[a-zA-Z_]*$/

    // if(!/^\w+@[a-zA-Z_]*$/.test(control.value)
    // return {ExisteNumero:true}

    let cControl:Array<string> = control.value.split('')
    console.log(cControl);

  for (let index=0; index<cControl.length; index++){
    const element = cControl[index];

    if(element.charCodeAt(0)>=48 && element.charCodeAt(0)<=57)
    return {ExisteNumero:true}
}

    cControl.forEach((value)=>{
      if(!isNaN(Number(value))) return {ExisteNumero:true}
    })
    
  
    return null
  }



private MatchPassword(control:FormControl):{[key:string]:boolean}{

if (control.value!==this.formulario.controls.password1.value)

  return{noigual:true}

  return (null)

}

}

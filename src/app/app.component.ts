import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'appCrud';
  //mensaje
  msg:string = '';
  //arreglo de objetos de empleados
  employees=[
    {name: "luis" , position: "ceo", email: "email.@gamil.com"},
    {name: "alfredo" , position: "cto", email: "email2.@gamil.com"},
    {name: "jaziel" , position: "coo", email: "email3.@gamil.com"}
  ];
  /*para que el doble enlace de datos funcione, hay que ejecutar un modelo.
   */
  model: any ={};
  //segundo modelo para el updateEmployee
  model2: any ={};
  //
  hideUpdate: boolean = true;

  //metodos para CRUD
  //create
  addEmployee():void {
    this.employees.push(this.model);
    this.msg='campo agregado';
  }
  //delete
  deleteEmployee(i):void {
    var answer = confirm('Estas seguo querer eliminarlo?');
    if(answer){
      this.employees.splice(i,1);
      this.msg='campo eliminado';
    }
    
  }
  //prepara para editar
  myValue;
  editEmployee(i):void {
    this.hideUpdate=false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }
  //update
  updateEmployee():void {
    let i = this.myValue;
    for(let j=0; j<this.employees.length; j++){
      if(i == j){
        this.employees[i]= this.model2;
        this.msg='campo actualizado';
        this.model2={};
      }
    }
  }
  //metodo para cerrar el mensaje
  closeAlert():void{
    this.msg='';
  }




}

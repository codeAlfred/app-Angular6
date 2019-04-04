import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'appCrud';
  //arreglo de objetos de empleados
  employees=[
    {name: "luis" , position: "ceo"},
    {name: "alfredo" , position: "cto"},
    {name: "jaziel" , position: "coo"}
  ];
  /*para que el doble enlace de datos funcione, hay que ejecutar un modelo.
   */
  model: any ={};

  //metodos para CRUD
  //create
  addEmployee():void {
    this.employees.push(this.model);
  }
  //delete
  deleteEmployee():void {

  }
  //prepara para editar
  editEmployee():void {

  }
  //update
  updateEmployee():void {

  }




}

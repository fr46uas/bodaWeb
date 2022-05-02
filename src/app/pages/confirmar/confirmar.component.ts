import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InvitadosService } from 'src/app/services/invitados.service';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {

  formulario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    asistencia: new FormControl(''),
    acompañante: new FormControl(''),
    autobus: new FormControl(''),
    alergias: new FormControl(''),
    datos: new FormControl('')
  });

  listado: any;

  constructor(
    private fb: FormBuilder,
    private service: InvitadosService
  ) { }

  ngOnInit(): void {

    this.service.getInvitados().subscribe((data) => {
      console.log(data)
    })

  }

  submit() {
    console.log(this.formulario.value)

    this.service.postInvitado(this.formulario.value).subscribe((r) => {
      console.log(r)
    })
  }

  // private buildForm() {
  //   return this.fb.group({
  //     nombre: this.fb.control(''),
  //     confirmacion: this.fb.control(''),
  //     acompañante: this.fb.control(''),
  //     nombreAcompañante: this.fb.control(''),
  //     autobus: this.fb.control(''),
  //     alergias: this.fb.control(''),
  //     otrosDatos: this.fb.control('')
  //   })
  // }

}

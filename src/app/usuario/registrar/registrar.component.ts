import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  nombre = '';
  direccion = '';
  email = '';

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  CrearUsuario(): void {
    const usuario = new Usuario(this.nombre, this.direccion, this.email);
    this.usuarioService.GuardarUsuario(usuario).subscribe(
      data => {
        this.toastr.success('Usuario Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/usuarios']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  public ListaUsuario(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'Listar');
  }

  public UsuarioPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.usuarioURL + `BuscarPorId/${id}`);
  }


  public GuardarUsuario(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.usuarioURL + 'Guardar', usuario);
  }

  public ActualizarUsuario(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(this.usuarioURL + `Actualizar/${id}`, usuario);
  }

  public ElimnarUsuario(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.usuarioURL + `Eliminar/${id}`);
  }

}

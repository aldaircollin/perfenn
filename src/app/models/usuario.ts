export class Usuario{
    id?: number;
    nombre: string;
    direccion: string;
    email: string;

    constructor(nombre: string, direccion: string, email: string) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.email = email;
    }
}

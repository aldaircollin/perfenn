export class Producto{
    id?: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    cantidad: string;
    precio: string;

    constructor(nombre: string, categoria: string, descripcion: string, cantidad: string, precio: string) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

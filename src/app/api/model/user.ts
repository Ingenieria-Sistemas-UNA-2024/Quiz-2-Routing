export class User {
  id: number;
  nombre: string;
  apellidos: string;
  privacidad: string;
  rol: string;
  genero: string;
  lugarDeResidencia: string;
  fechaDeNacimiento: Date;

  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    privacidad: string,
    rol: string,
    genero: string,
    lugarDeResidencia: string,
    fechaDeNacimiento: Date
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.privacidad = privacidad;
    this.rol = rol;
    this.genero = genero;
    this.lugarDeResidencia = lugarDeResidencia;
    this.fechaDeNacimiento = fechaDeNacimiento;
  }
}

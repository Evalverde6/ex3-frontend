export class Usuario {
    id_usuario?: number;
    id_persona?: number;
    id_rol?: number;
    rol?: string;
    nombre?: string;
    username?: string;
    password?: string;
    estado?: number;
    accesos?: string[];
    token?: string;
}
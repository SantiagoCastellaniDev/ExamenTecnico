export class LoginUser {
    nombreUsuario: string // Corresponde al email
    password: string
  
    constructor(email: string, password: string) {
      this.nombreUsuario = email
      this.password = password
    }
}
  
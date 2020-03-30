export class LoginCredentials {
    constructor (public email: string, public password:string) {}
}

export class NewUserCredentials {
    constructor (public firstName:string, public lastName:string, public email: string, public password:string){}
}
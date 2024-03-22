import fs from 'fs';

let idNunber: number = 11

export class User {
    id: number
    name: string
    password: string
    admin: boolean

    constructor(id: number, name: string, password: string, admin: boolean) {
        this.id = id
        this.name = name
        this.password = password
        this.admin = admin
    }
}

const filePath: string = './src/app/api/model/users.json'

function getUsers(): User[] {
    try {
        const jsonData = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(jsonData)
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error)
        return []
    }
}

function setUsers(users: User[]): void {
    try {
        const jsonData = JSON.stringify(users)
        fs.writeFileSync(filePath, jsonData)
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error)
    }
}

export function getUser(id: number): User | null {
    try {
        const users: User[] | null = getUsers()
        if (users !== null) {
            const index: number = users.findIndex(u => u.id === id)
            if (index !== -1) {
                return users[index]
            }
        }
        console.error('No se encontró ningún usuario con el ID proporcionado.')
        return null;
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error)
        return null
    }
}

export function setUser(user: User): void {
    try {
        const users: User[] = getUsers()
        const index: number = users.findIndex(u => u.id === user.id)
        if (index < 0) {
            users[index] = user
            setUsers(users)
        }
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error)
    }
}

export function addUser(user: User): void {
    try {
        const users: User[] = getUsers()
        if (user !== null) {
            user.id = idNunber
            idNunber++
            users.push(user)
            setUsers(users)
        }
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error)
    }
}

export function deleteUser(id: number): boolean {
    try {
        const users: User[] = getUsers()
        const index: number = users.findIndex(u => u.id === id)
        if (index !== -1) {
            users.splice(index, 1)
            setUsers(users)
            return true
        }
        return false
    } catch (error) {
        return false
        console.error('Error al escribir en el archivo JSON:', error)
    }
}
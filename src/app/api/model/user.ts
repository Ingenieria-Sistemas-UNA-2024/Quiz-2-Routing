import fs from 'fs';
import { use } from 'react';

export class user {
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

const filePath: string = './users.json'

function getUsers(): user[] {
    try {
        const jsonData = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(jsonData)
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error)
        return []
    }
}

function setUsers(users: user[]): void {
    try {
        const jsonData = JSON.stringify(users)
        fs.writeFileSync(filePath, jsonData)
    } catch (error) {
    console.error('Error al escribir en el archivo JSON:', error)
}
}

export function getUser(id: number): user | null {
    try {
        const users: user[] | null = getUsers()
        const index: number = users.findIndex(u => u.id === id)
        if (index !== -1) {
            return users[index]
        }
        console.error('No se encontró ningún usuario con el ID proporcionado.')
        return null;
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error)
        return null
    }
}

export function setUser(user: user): void {
    try {
        const users: user[] = getUsers()
        const index: number = users.findIndex(u => u.id === user.id)
        if (index < 0) {
            users[index] = user
            setUsers(users)
        }
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error)
    }
}

export function addUser(user: user): void {
    try {
        const users: user[] = getUsers()
        if (user !== null) {
            users.push(user)
            setUsers(users)
        }
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error)
    }
}

export function deleteUser(id: number): void {
    try {
        const users: user[] = getUsers()
        const index: number = users.findIndex(u => u.id === id)
        if (index < 0) {
            users.splice(index, 1)
            setUsers(users)
        }
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error)
    }
}

import fs from 'fs';

const filePath: string = './src/app/api/model/accounts.json'

let idNunber: number = getIdNumber()

function getIdNumber(): number {
    const accounts = getAccounts();
    if (accounts.length === 0) {
        return 1;
    } else {
        const maxId = Math.max(...accounts.map(account => account.id));
        return maxId + 1;
    }
}
export class Account {
    id: number
    idUser: number
    privacy: string

    constructor(id: number, idUser: number, privacy: string) {
        this.id = id
        this.idUser = idUser
        this.privacy = privacy
    }
}

function getAccounts(): Account[] {
    try {
        const jsonData = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(jsonData)
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error)
        return []
    }
}

function setAccounts(users: Account[]): void {
    try {
        const jsonData = JSON.stringify(users)
        fs.writeFileSync(filePath, jsonData)
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error)
    }
}

export function getAccount(id: number): Account | null {
    try {
        const accounts: Account[] | null = getAccounts()
        if (accounts !== null) {
            const index: number = accounts.findIndex(u => u.id === id)
            if (index !== -1) {
                return accounts[index]
            }
        }
        console.error('No se encontró ningún usuario con el ID proporcionado.')
        return null;
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error)
        return null
    }
}

export function setAccount(account: Account): void {
    try {
        const accounts: Account[] = getAccounts()
        const index: number = accounts.findIndex(u => u.id === account.id)
        if (index < 0) {
            accounts[index] = account
            setAccounts(accounts)
        }
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error)
    }
}

export function addAccount(account: Account): void {
    try {
        const accounts: Account[] = getAccounts()
        if (account !== null) {
            account.id = idNunber
            idNunber++
            accounts.push(account)
            setAccounts(accounts)
        }
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error)
    }
}

export function deleteAccount(id: number): boolean {
    try {
        const accounts: Account[] = getAccounts()
        const index: number = accounts.findIndex(u => u.id === id)
        if (index !== -1) {
            accounts.splice(index, 1)
            setAccounts(accounts)
            return true
        }
        return false
    } catch (error) {
        return false
        console.error('Error al escribir en el archivo JSON:', error)
    }
}

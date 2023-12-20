import { MOCK_DATA } from "../Data/data"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 3000)
    })
}
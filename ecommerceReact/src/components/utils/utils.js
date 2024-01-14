import { MOCK_DATA } from "../Data/data"

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1000)
    })
}
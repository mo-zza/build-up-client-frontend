import {API_PATH} from "@src/enum/Path";

export class AuthService {

    async login(email: string, password: string) {
        const response = await fetch(API_PATH.SIGN_IN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })

        if (!response.ok) {
            return {
                error: response.statusText,
                status: response.status
            }
        }

        const data = await response.json()
        return {
            data,
            status: response.status
        }
    }

    async resetPassword(email: string) {
        const response = await fetch(API_PATH.VERIFY_RESET_PASSWORD, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email})
        })

        if (!response.ok) {
            return {
                error: response.statusText,
                status: response.status
            }
        }

        const data = await response.json()
        return {
            data,
            status: response.status
        }
    }
}
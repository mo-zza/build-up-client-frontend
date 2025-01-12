import {API_PATH} from "@src/enum/Path";

export class MemberService {

    async existsEmail(email: string) {
        const response = await fetch(API_PATH.MEMBER_EXISTS + `?email=${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!response.ok) {
            return {
                error: response.statusText,
                status: response.status
            }
        }

        const data = await response.json();
        return {
            data,
            status: response.status
        }
    }

    async existsNickname(nickname: string) {
        const response = await fetch(API_PATH.MEMBER_EXISTS + `?nickname=${nickname}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!response.ok) {
            return {
                error: response.statusText,
                status: response.status
            }
        }

        const data = await response.json();
        return {
            data,
            status: response.status
        }
    }

    async signUp(data: {
        email: string, password: string, nickname: string, agreeTerms: boolean
    }) {
        const response = await fetch(API_PATH.SIGN_UP, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            return {
                error: response.statusText,
                status: response.status
            }
        }

        const res = await response.json();
        return {
            data: res,
            status: response.status
        }
    }
}
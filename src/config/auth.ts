import {AuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

interface UsterType {
    email: string;
    password: string;
}

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "register",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const res = await fetch("http://localhost:3000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",

                    },
                    body: JSON.stringify(credentials),
                });
                const data = await res.json();
                if(data){
                    console.log(data);
                    
                    return {
                        accessToken: data.accessToken,
                        email: data.user.email,
                        name: data.user.name,
                        id: data.user.id
                    }
                }
                
                return null
            }
        })
    ],
    session:{
        strategy: "jwt",
        maxAge: 1 * 60 * 60,
    },
    pages:{
        signIn:"/login"
    }
}
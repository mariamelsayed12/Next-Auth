'use client'

import { useSession } from "next-auth/react"
import Image from "next/image"
import SigninButton from "./SigninButton"

const ClientComponent = () => {
    const {data:session, status, update}= useSession()
    return (
    <div>
        {
            status==="loading" && <p>Loading...</p> 
        }
        {
            status==="unauthenticated" && <SigninButton/>
        }
        {
            status==="authenticated" && (
                <div className="flex flex-col items-center justify-center gap-4">
                <h1 className=""> Welcome {session.user?.name}</h1>
                    <Image src={session.user?.image || ""} alt="user image" width={50} height={50} className="rounded-full"/>
                    <p className="text-sm">Email: {session.user?.email}</p>
                </div>
            )
        }
        
    </div>
    )
}

export default ClientComponent
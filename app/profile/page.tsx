import Image from 'next/image'
import React from 'react'
import Signout from '../_copmonents/Signout'
import { getServerSession } from 'next-auth'
import { authoptions } from '../lib/nextAuth'

const  Profile =async () => {
    const session= await getServerSession(authoptions)
    
    return (
    <div>
        {
                session &&
                (
                <div className="flex flex-col  items-center justify-center gap-4">
                <h1 className=""> Welcome {session.user?.name}</h1>
                    <Image src={session.user?.image || ""} alt="user image" width={50} height={50} className="rounded-full"/>
                    <p className="text-sm">Email: {session.user?.email}</p>
                    <Signout/>
                </div>
                )
                
                }
    </div>
    )
}

export default Profile
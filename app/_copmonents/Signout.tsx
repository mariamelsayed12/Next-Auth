'use client'

import { signOut } from "next-auth/react"

const Signout = () => {
    return (
    <button type="button"
    className="bg-red-500 cursor-pointer text-white p-2 rounded-md hover:bg-red-600 flex items-center gap-2"
    onClick={()=>signOut()}
    >Signout
    </button>
    )
}

export default Signout
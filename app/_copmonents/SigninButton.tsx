"use client"

import { signIn } from "next-auth/react"

const SigninButton = () => {
  return (
        <button  type="button" onClick={()=>signIn('google')} className="bg-red-500 text-white p-2 cursor-pointer rounded-md hover:bg-red-600 flex items-center gap-2">
        Signin with google</button>
  )
}

export default SigninButton
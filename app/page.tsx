import {  getServerSession} from "next-auth";
import { authoptions } from "./lib/nextAuth";
import SigninButton from "./_copmonents/SigninButton";
import Image from "next/image";
import Signout from "./_copmonents/Signout";
import ClientComponent from "./_copmonents/ClientComponent";


export default async function Home() {
  const session= await getServerSession(authoptions)
  console.log(session);
  return (
    <div className=" mx-auto w-full bg-gray-800 text-white p-4">
      {/* {
        session?
        (
          <div className="flex flex-col items-center justify-center gap-4">
        <h1 className=""> Welcome {session.user?.name}</h1>
          <Image src={session.user?.image || ""} alt="user image" width={50} height={50} className="rounded-full"/>
          <p className="text-sm">Email: {session.user?.email}</p>
          <Signout/>
        </div>
        )
          :
          (
            <div className="flex flex-col items-center justify-center gap-4">
                          <SigninButton/>


            </div>
          )
      } */}
      <ClientComponent/>
    </div>
  );
}

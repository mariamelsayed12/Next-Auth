import Profile from "./profile/page";


export default async function Home() {
  return (
    <div className=" mx-auto w-full bg-gray-800 text-white p-4">
      <Profile/>
      {/* <ClientComponent/> */}
    </div>
  );
}

import { Link } from "react-router"

const RegisterPage = () => {
  return (
    <div className="w-full h-[30rem] md:h-auto">
      <div className="flex flex-col w-[100%] md:w-[65%] lg:w-[40%] xl:w-[25%] mx-auto gap-10 md:border-[3px] md:border-[#E2E1E1] px-[0.8rem] md:px-[1.5rem] md:py-[1.5rem] mt-[2rem] md:mt-[4rem]">
        <h1 className="text-[2rem]">Register</h1>
        <form className="flex flex-col w-[100%] gap-6">
          <input type="email" placeholder='Enter Email' className="w-[100%] outline-none h-[2.5rem] text-[#000] px-[1rem] border-[2px] border-[#E2E1E1]" />
          <input type="password" placeholder='Enter Password' className="w-full outline-none h-[2.5rem] text-[#000] px-[1rem] border-[2px] border-[#E2E1E1]" />
          <input type="password" placeholder='Confirm Password' className="w-full outline-none h-[2.5rem] text-[#000] px-[1rem] border-[2px] border-[#E2E1E1]"/>
          <button className="w-full items-center py-[0.5rem] bg-[#66BB6A] text-[#fff]">Register</button>
        </form>
        <button className="w-full items-center py-[0.5rem] border-[2px] border-[#E2E1E1]">Register with Google</button>
        <p className="">You already have an account please <Link to={"/login"} className="text-[#3D73B3]">login</Link> </p>
      </div>
    </div>
  )
}

export default RegisterPage
import { Link } from 'react-router-dom'

export default function Navbar() {
    const menu = [
    {
        link: "/",
        name: "Home",
    },
    {
        link: "/store",
        name: "Store",
    },
    {
        link: "/about",
        name: "About",
    },
]
  return (
    <>
    <div className="flex text-white p-6 text-xl">
        <div className='mr-8'>ShopName</div>
        <div className='flex gap-4 text-black w-full'>
            {menu.map(link => (
                <div key={link.name} className='text-white hover:text-red-700'><Link to={link.link}>{link.name}</Link></div>
            ))}
        <div className='flex justify-end w-full mr-4 text-white'><Link className='hover:text-red-700' to={"login"}>Log in</Link></div>
        </div>   
    </div>
    </>
  )
}

import Bliss from '../assets/bliss.jpg'
import { BiMenu, BiMessage, BiNotification, BiSearch } from 'react-icons/bi'
import propTypes from "prop-types"
import Input from './Input'

const Nav = ({ setToggle }) => {
  return (
    <div>
      <nav className="bg-blue-800 flex justify-between p-2 px-10 items-center h-24">
        <div className="p-2 rounded-full flex gap-2 items-center">
          <BiMenu className="text-2xl text-white cursor-pointer" onClick={() => setToggle(prev => !prev)} />
          <BiSearch className="text-2xl text-white lg:hidden" />
          {/* <div className='items-center relative hidden lg:flex'>
            <input type="text" className='w-[400px] bg-blue-500 rounded-full outline-none p-2 text-white'/>
            <BiSearch className="text-2xl text-white absolute right-5 cursor-pointer" />
          </div> */}
          <Input />
        </div>
        <div className="flex items-center gap-2">
          <BiMessage className="text-2xl text-white" />
          <BiNotification className="text-2xl text-white" />
          <div className="flex items-center gap-2">
            <h3 className="text-white text-lg font-extralight">Hello, Blissmal</h3>
            <img src={Bliss} alt="Profile" width={50} height={50} className="rounded-full" />
          </div>
        </div>
      </nav>
    </div>
  )
}
Nav.propTypes = {
  setToggle: propTypes.func
}

export default Nav

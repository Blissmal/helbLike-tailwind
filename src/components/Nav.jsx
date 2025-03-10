import Bliss from '../assets/bliss.jpg'
import { BiMenu, BiMessage, BiNotification, BiSearch } from 'react-icons/bi'
import propTypes from "prop-types"
import Input from './Input'
import { IconButton } from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = ({isDrawerOpen, openDrawer}) => {
  return (
    <div>
      <nav className="bg-blue-800 flex justify-between p-2 px-10 items-center h-24">
        <div className="p-2 rounded-full flex gap-2 items-center">
          {/* <BiMenu className="text-2xl text-white cursor-pointer" onClick={() => setToggle(prev => !prev)} /> */}
          <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" color='white'/>
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" color='white'/>
        )}
      </IconButton>
          <BiSearch className="text-2xl text-white lg:hidden" />
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

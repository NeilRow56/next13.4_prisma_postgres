'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Box from './Box'
import SidebarItem from './SidebarItem'

//useMemo syntax is similar to the useEffect’s where you can pass a function and an array of dependencies. useMemo watch the elements inside the array, and detect the changes in values, if there are no changes it doesn’t matter if the entire component re-renders, the function result will stay the same and it will not re-run but instead will return the memoized result. This can eventually help to avoid expensive calculations on every render.

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname()
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/'
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search'
      }
    ],
    [pathname]
  )
  //Use overflow-auto to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike overflow-scroll, which always shows scrollbars, this utility will only show them if scrolling is necessary.
  return (
    <div className='flex h-full'>
      <div className='hidden h-full w-[300px] flex-col gap-y-2 bg-black p-2 md:flex'>
        <Box>
          <div className='flex flex-col gap-y-4 px-5 py-4'>
            {routes.map(item => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className='h-full overflow-y-auto'>Song Library</Box>
      </div>
    </div>
  )
}

export default Sidebar

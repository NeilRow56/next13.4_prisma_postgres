'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaPlay } from 'react-icons/fa'

interface ListItemProps {
  image: string
  name: string
  href: string
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(href)
  }

  return (
    <button
      onClick={onClick}
      //When you need to style an element based on the state of some parent element, mark the parent with the group class, and use group-* modifiers like group-hover to style the target element
      className='
        group 
        relative 
        flex 
        cursor-pointer 
        items-center 
        gap-x-4 
        overflow-hidden 
        rounded-md 
        bg-neutral-100/10 
        pr-4 
        transition 
        hover:bg-neutral-100/20
      '
    >
      <div className='relative min-h-[64px] min-w-[64px]'>
        <Image
          className='object-cover'
          src={image}
          fill
          sizes='(max-width: 64px) 100vw, (max-width: 64px) 50vw, 33vw'
          alt='Image'
        />
      </div>
      <p className='truncate py-5 font-medium'>{name}</p>
      <div
        className='
          absolute 
          right-5 
          flex 
          items-center 
          justify-center 
          rounded-full 
          bg-green-500 
          p-4 
          opacity-0 
          drop-shadow-md 
          transition
          hover:scale-110 
          group-hover:opacity-100
        '
      >
        <FaPlay className='text-black' />
      </div>
    </button>
  )
}

export default ListItem

import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="flex justify-between items-center cursor-pointer px-5 h-12 bg-gray-500 text-blue font-semibold w-full rounded-xl hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  )
}

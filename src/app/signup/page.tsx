'use client'

import Image from 'next/image'
import Link from 'next/link'
import { toast, Toaster } from 'react-hot-toast'

export default function SignupPage() {
  const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast('Sign up is not implemented yet', { icon: '🚧' })
  }
  return (
    <div className='flex min-h-screen'>
      <Toaster />
      <div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <Link href='/'>
              <Image
                width={72}
                height={72}
                className='h-12 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='Your Company'
              />
            </Link>
            <h2 className='mt-6 text-3xl font-bold tracking-tight text-gray-900'>Sign up to your account</h2>
          </div>

          <div className='mt-8'>
            <div className='mt-6'>
              <form onSubmit={_handleSubmit} method='POST' className='space-y-6'>
                <div>
                  <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                    Username
                  </label>
                  <div className='mt-1'>
                    <input
                      id='username'
                      name='username'
                      type='text'
                      required
                      className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                    Email address
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='space-y-1'>
                  <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                    Password
                  </label>
                  <div className='mt-1'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='flex items-center justify-between'></div>

                <div>
                  <button
                    type='submit'
                    className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Sign up
                  </button>
                </div>

                <div className='flex items-center justify-center'>
                  <div className='text-sm'>
                    <Link href='/login' className='font-medium text-indigo-600 hover:text-indigo-500'>
                      Already have an account? Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='relative hidden w-0 flex-1 lg:block'>
        <Image
          className='absolute inset-0 h-full w-full object-cover'
          width={1908}
          height={1426}
          src='https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
          alt=''
        />
      </div>
    </div>
  )
}
import React from 'react'

function SignUp() {
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
            <form className='flex flex-col gap-4'>
                <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username' />
                <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' />
                <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' />
                <button className=''>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp

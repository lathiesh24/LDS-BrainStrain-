import React from 'react'

const Home = () => {
  return (
    <>
      <header className='bg-cover bg-center h-64' style={{ backgroundImage: 'url(https://via.placeholder.com/1500x500)' }}>
        <div className='flex items-center justify-center h-full'>
          <h1 className='text-white text-5xl font-bold'>Welcome to My Site</h1>
        </div>
      </header>
      <main className='py-10'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center'>About Us</h2>
          <p className='py-4 text-gray-600 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.
          </p>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full md:w-1/3 px-4 py-6'>
              <h3 className='text-xl font-bold'>Our Mission</h3>
              <p className='py-2 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
            </div>
            <div className='w-full md:w-1/3 px-4 py-6'>
              <h3 className='text-xl font-bold'>Our Vision</h3>
              <p className='py-2 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
            </div>
            <div className='w-full md:w-1/3 px-4 py-6'>
              <h3 className='text-xl font-bold'>Our Values</h3>
              <p className='py-2 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className='bg-gray-900 py-10 text-white'>
        <div className='container mx-auto text-center'>
          Copyright &copy; 2023 My Site
        </div>
      </footer>
    </>
  )
}

export default Home

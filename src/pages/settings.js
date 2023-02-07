import { Header } from '../components/Header';
import Login from '../components/Login';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../hooks/useAuth';

export function Settings () {
  const {user} = useAuth()

  return user ? (
    <div className="max-w-[358px] md:max-w-[628px] lg:max-w-[1276px] xl:max-w-[1600px] lg:container mx-auto px-4 pt-2 h-[100vh] bg-white rounded-t-none rounded-b-2xl">
      <div className="hidden lg:block h-full w-full">
        <Sidebar />
      </div>
      <div>
        
      <Header />

        <main className='mt-5 md:mt-8 max-w-full md:max-w-[480px] md:mx-auto lg:max-w-full lg:mt-4 lg:pr-[58px] lg:pl-12'>
          <h3 className='text-2xl mt-12 font-medium'>Room's Name Settings</h3>
          <div className='mt-8'>
            <span>Image</span>
            <div className='flex items-center flex-col lg:flex-row gap-3 mt-4'>
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room avatar"  className="w-10 h-10  lg:w-14 lg:h-14 object-cover rounded-full"/>
              <button className='border-blue-500 w-full lg:max-w-fit border px-2 py-2 rounded-lg text-blue-500 hover:text-white transition-colors hover:bg-blue-500'>Upload</button>
              <button className='border-blue-500 w-full lg:max-w-fit border px-2 py-2 rounded-lg text-blue-500 hover:text-white transition-colors hover:bg-blue-500'>Remove</button>
            </div>
            <div className='mt-10 lg:mt-4 lg:max-w-xs'>
              <span className='block'>Room's name</span>
              <label htmlFor="roomName"></label>
              <input type="text" id='roomName' name='roomName'placeholder="Room's Name" className='mt-4 border py-2 px-2 rounded-lg border-gray-500 placeholder:text-gray-500 w-full'/>
              <button className='mt-4 border-blue-500 w-full lg:min-w-fit border px-2 py-2 rounded-lg  text-blue-500 hover:text-white transition-colors hover:bg-blue-500'>Save Settings</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  ) : (
    <Login />
  )
}
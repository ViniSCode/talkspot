import { Header } from '../components/Header';
import { ListUsers } from '../components/ListUsers';
import { Sidebar } from '../components/Sidebar';

export function Users () {
  return (
    <div className="max-w-[358px] md:max-w-[628px] lg:max-w-[1276px] lg:container mx-auto px-4 pt-2 h-[100vh] bg-white rounded-t-none rounded-b-2xl">
      <div className="hidden lg:block h-full w-full">
        <Sidebar />
      </div>
      <div>
        
      <Header />

        <main className='mt-5 md:mt-8 lg:pl-6 lg:mt-4 lg:pr-[58px]'>
         <ListUsers />
        </main>
      </div>
    </div>
  )
}
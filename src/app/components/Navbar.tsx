import { SignedIn, SignedOut} from '@clerk/nextjs';
import Link from 'next/link';
import { SignInButton, UserButton } from '@clerk/nextjs';


function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-900 text-gray-50">
        <a href="/" className="uppercase font-bold text-md h-12 flex items-center">
          BLLAPRATA 925
        </a>
        <div className='flex items-center gap-8'>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
             <SignInButton mode='modal'>
                <button className='border rounded-md border-gray-400 px-3 py-3'> 
                  Fazer Login 
                </button>
              </SignInButton>
            </SignedOut>

        </div>
      </nav>
    )
}
export default Navbar;
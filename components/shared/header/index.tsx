import {ShoppingCart, UserIcon} from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { APP_NAME } from '@/lib/constants';
import ModeToggle from './mode-toggle';


const Header = () => {
    return ( 
        <header className='w-full border-b'>
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href='/' className='flex-start'>
                      <Image src='/images/logo.svg' width={40} height={40} priority={true} alt={`${APP_NAME} logo`}/>
                    </Link>
                    <span className="hidden lg:block font-bold text-2xl-ml-3">
                        {APP_NAME}
                    </span>
                </div>
                <div className="space-x-2">
                    <ModeToggle />
                    <Button asChild variant='ghost'>
                        <Link href="/cart">
                         <ShoppingCart /> Cart
                        </Link>
                    </Button>
                     <Button asChild>
                        <Link href="/signin">
                         <UserIcon /> Sign In
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
     );
}
 
export default Header;
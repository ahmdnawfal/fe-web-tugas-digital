import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import FormSignin from '@/components/auth/signin/FormSignin';
import Image from 'next/image';
import Logo from '@/app/assets/images/logo.png';

export default function Signin() {
  return (
    <Card className='sm:min-w-[500px] shadow-md'>
      <CardContent className='pt-6'>
        <div className='flex justify-center'>
          <Image
            src={Logo}
            width={120}
            height={120}
            alt='logo'
            className='mb-9'
          />
        </div>
        <h2 className='text-2xl'>Welcome !</h2>
        <h1 className='mt-6 font-semibold text-3xl text-primary'>
          Sign in to your account
        </h1>
        <div className='mt-6'>
          <FormSignin />
        </div>
      </CardContent>
      <CardFooter>
        <p>
          Don’t have an account?{' '}
          <Link href='/signup' className='text-primary cursor-pointer'>
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}

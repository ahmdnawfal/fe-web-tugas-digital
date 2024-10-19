import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/assets/images/logo.png';
import FormSignup from '@/components/auth/signup/FormSignup';

export default function Signup() {
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
          Sign up your account
        </h1>
        <div className='mt-6'>
          <FormSignup />
        </div>
      </CardContent>
      <CardFooter>
        <p>
          Have an account?{' '}
          <Link href='/signin' className='text-primary cursor-pointer'>
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}

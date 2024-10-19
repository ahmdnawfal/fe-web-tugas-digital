'use client';

import FormCheckbox from '@/components/form/form-checkbox';
import FormInput from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { decryptData, encryptData } from '@/helpers/crypto';
import { signinSchema } from '@/schemas/authScehma';
import { zodResolver } from '@hookform/resolvers/zod';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function FormLogin() {
  const [defaultValues, setDefaultValues] = useState<
    z.infer<typeof signinSchema>
  >({
    email: '',
    password: '',
    rememberMe: false,
  });

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues,
  });

  useEffect(() => {
    const cookieRememberMe = getCookie('secure-remember-me');
    if (cookieRememberMe) {
      const parsedData = JSON.parse(cookieRememberMe);
      const decryptedEmail = decryptData(parsedData.email);
      const decryptedPassword = decryptData(parsedData.password);

      setDefaultValues({
        email: decryptedEmail,
        password: decryptedPassword,
        rememberMe: parsedData.rememberMe,
      });

      form.reset({
        email: decryptedEmail,
        password: decryptedPassword,
        rememberMe: parsedData.rememberMe,
      });
    }
  }, [form]);

  const onSubmit = (values: z.infer<typeof signinSchema>) => {
    deleteCookie('secure-remember-me');
    if (values.rememberMe) {
      const emailEncrypt = encryptData(values.email);
      const passwordEncrypt = encryptData(values.password);
      const userEncrypt = {
        email: emailEncrypt,
        password: passwordEncrypt,
        rememberMe: values.rememberMe,
      };

      setCookie('secure-remember-me', userEncrypt);
    }

    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-4'
      >
        <FormInput
          form={form}
          label='Email'
          name='email'
          type='email'
          placeholder='Input your email'
        />
        <FormInput
          form={form}
          label='Password'
          name='password'
          type='password'
          placeholder='Input your password'
        />
        <div className='flex justify-between items-center'>
          <FormCheckbox form={form} label='Remember me' name='rememberMe' />
          <Link href='/forgot-password' className='text-sm text-gray-500'>
            Forgot password ?
          </Link>
        </div>
        <Button className='w-full mt-3' type='submit'>
          Sign in
        </Button>
      </form>
    </Form>
  );
}

'use client';

import FormInput from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { signupSchema } from '@/schemas/authScehma';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function FormSignup() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof signupSchema>) => {
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
          label='Name'
          name='name'
          type='text'
          placeholder='Input your name'
        />
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
        <Button className='w-full mt-3' type='submit'>
          Sign up
        </Button>
      </form>
    </Form>
  );
}

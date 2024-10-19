import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { Checkbox } from '../ui/checkbox';

type PropsFormCheckbox<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
};

export default function FormCheckbox<T extends FieldValues>({
  form,
  label,
  name,
}: PropsFormCheckbox<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className='flex items-end'>
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className='cursor-pointer'
              />
            </FormControl>
            <FormLabel className='px-2 cursor-pointer'>{label}</FormLabel>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

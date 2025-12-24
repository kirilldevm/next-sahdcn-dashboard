import { EyeClosed, EyeIcon } from 'lucide-react';
import { Input } from './input';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function PasswordInput({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className='relative'>
      <Input
        {...props}
        type={isPasswordVisible ? 'text' : 'password'}
        className={cn('pr-9', className)}
      />
      <span
        className='absolute right-2 top-1/2 -translate-y-1/2 select-none cursor-pointer'
        onClick={() => setIsPasswordVisible((prev) => !prev)}
      >
        {isPasswordVisible ? <EyeClosed size={20} /> : <EyeIcon size={20} />}
      </span>
    </div>
  );
}

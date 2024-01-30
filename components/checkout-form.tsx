'use client';

import { Button, RadioGroup, useDisclosure } from '@nextui-org/react';
import CartSummary from './cart-summary';
import Input from './input';
import { z } from 'zod';
import { useState } from 'react';
import { CustomRadio } from './custom-radio';
import { CashOnDeliveryIcon } from './icons/cash-on-delivery';
import ConfirmationPopup from './confirmation-popup';

const createCheckoutSchema = z.object({
  name: z.string().min(1, 'Field cannot be empty'),
  email: z.string().min(1, 'Field cannot be empty').email(),
  phone: z.string().min(1, 'Field cannot be empty'),
  address: z.string().min(1, 'Field cannot be empty'),
  zip: z.string().min(1, 'Field cannot be empty').max(5, 'Invalid format'),
  city: z.string().min(1, 'Field cannot be empty'),
  country: z.string().min(1, 'Field cannot be empty'),
});

export interface CreateCheckoutFormState {
  errors: {
    name?: string[];
    email?: string[];
    phone?: string[];
    address?: string[];
    zip?: string[];
    city?: string[];
    country?: string[];
    eMoneyNumber?: string[];
    eMoneyPin?: string[];
  };
}

enum Payment {
  E_MONEY = 'E_MONEY',
  CASH_ON_DELIVERY = 'CASH_ON_DELIVERY',
}

export default function CheckoutForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [eMoneyNumber, setEMoneyNumber] = useState<string>('');
  const [eMoneyPin, setEMonyPin] = useState<string>('');
  const [payment, setPayment] = useState<Payment | string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<CreateCheckoutFormState>();

  const { isOpen, onOpenChange } = useDisclosure();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const result = createCheckoutSchema.safeParse({
      name,
      email,
      phone,
      address,
      zip,
      city,
      country,
    });

    if (result.success) {
      onOpenChange();
      setLoading(false);
      return;
    }

    setErrors({ errors: result.error.flatten().fieldErrors });
    setLoading(false);
  };

  return (
    <>
      <form className='mt-6' onSubmit={handleSubmit}>
        <div className='flex flex-col justify-between gap-8 lg:flex-row'>
          <div className='flex w-full flex-col gap-16 rounded-lg bg-white px-12 py-14 shadow-sm'>
            <h1 className='text-h4 sm:text-h3'>CHECKOUT</h1>
            <div className='flex flex-col gap-4'>
              <h3 className='text-subtitle uppercase text-orange'>
                Billing details
              </h3>
              <div className='grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-2 sm:grid-rows-2'>
                <Input
                  label='Name'
                  name={'name'}
                  placeholder='Alexei Ward'
                  onChange={(value) => setName(value)}
                  error={!!errors?.errors['name']}
                  errorMessage={errors?.errors.name?.join(', ')}
                />
                <Input
                  label='Email'
                  name={'email'}
                  placeholder='alexei@mail.com'
                  onChange={(value) => setEmail(value)}
                  error={!!errors?.errors.email}
                  errorMessage={errors?.errors.email?.join(', ')}
                />
                <Input
                  label='Phone number'
                  name={'phone'}
                  placeholder='+1 202-555-0136'
                  onChange={(value) => setPhone(value)}
                  error={!!errors?.errors.phone}
                  errorMessage={errors?.errors.phone?.join(', ')}
                />
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <h3 className='text-subtitle uppercase text-orange'>
                Shipping Info
              </h3>
              <div className='grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-2'>
                <Input
                  label='Address'
                  name={'address'}
                  placeholder='1137 Williams Avenue'
                  className='sm:col-span-2'
                  onChange={(value) => setAddress(value)}
                  error={!!errors?.errors.address}
                  errorMessage={errors?.errors.address?.join(', ')}
                />
                <Input
                  label='ZIP Code'
                  name={'zip'}
                  placeholder='10001'
                  className='sm:row-start-2'
                  onChange={(value) => setZip(value)}
                  error={!!errors?.errors.zip}
                  errorMessage={errors?.errors.zip?.join(', ')}
                />
                <Input
                  label='City'
                  name={'city'}
                  placeholder='New York'
                  className='sm:row-start-2'
                  onChange={(value) => setCity(value)}
                  error={!!errors?.errors.city}
                  errorMessage={errors?.errors.city?.join(', ')}
                />
                <Input
                  label='Country'
                  name={'country'}
                  placeholder='United States'
                  onChange={(value) => setCountry(value)}
                  error={!!errors?.errors.country}
                  errorMessage={errors?.errors.country?.join(', ')}
                />
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <h3 className='text-subtitle uppercase text-orange'>
                Payment details
              </h3>
              <div className='flex flex-col gap-4 gap-y-8 sm:grid sm:grid-cols-2 sm:grid-rows-2'>
                <div className='sm:row-span-1'>
                  <p className='text-subtitle text-black'>Payment Method</p>
                </div>

                <div className='sm:col-start-2 sm:row-start-1'>
                  <RadioGroup
                    color='warning'
                    name='payment'
                    onChange={(val) => {
                      setPayment(val.target.value);
                    }}
                  >
                    <CustomRadio value={Payment.E_MONEY}>e-Money</CustomRadio>
                    <CustomRadio value={Payment.CASH_ON_DELIVERY}>
                      Cash on Delivery
                    </CustomRadio>
                  </RadioGroup>
                </div>
                {payment === Payment.E_MONEY && (
                  <>
                    <Input
                      label='e-Money Number'
                      name={'eMoneyNumber'}
                      placeholder='238521993'
                      className='sm:row-start-2'
                      onChange={(value) => setEMoneyNumber(value)}
                      error={!!errors?.errors.eMoneyNumber}
                      errorMessage={errors?.errors.eMoneyNumber?.join(', ')}
                    />
                    <Input
                      label='e-Money PIN'
                      name={'eMoneyPin'}
                      placeholder='6891'
                      className='sm:col-start-2 sm:row-start-2'
                      onChange={(value) => setEMonyPin(value)}
                      error={!!errors?.errors.eMoneyPin}
                      errorMessage={errors?.errors.eMoneyPin?.join(', ')}
                    />
                  </>
                )}
                {payment === Payment.CASH_ON_DELIVERY && (
                  <div className='col-span-2 flex items-center gap-8'>
                    <div className='grid h-16 w-16 place-items-center'>
                      <CashOnDeliveryIcon />
                    </div>
                    <p className='text-justify text-regular text-black opacity-50'>
                      The &apos;Cash on Delivery&apos; option enables you to pay
                      in cash when our delivery courier arrives at your
                      residence. Just make sure your address is correct so that
                      your order will not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='flex h-auto max-h-fit w-full min-w-[350px] flex-col self-start rounded-lg bg-white p-8 shadow-sm lg:w-[350px]'>
            <CartSummary />
            <Button
              isLoading={loading}
              radius='none'
              type='submit'
              className='mt-8 w-full bg-orange px-6 py-4 uppercase text-white'
            >
              Continue & pay
            </Button>
          </div>
        </div>
      </form>
      {isOpen && (
        <ConfirmationPopup isOpen={isOpen} onOpenChange={onOpenChange} />
      )}
    </>
  );
}

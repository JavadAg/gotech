'use client'

import React, { useEffect, useState } from 'react'
import contact_bg from '@/assets/images/contact-bg.svg'
import contact_right from '@/assets/images/contact-right.svg'
import contact_left from '@/assets/images/contact-left.svg'
import Image from 'next/image'
import Heading from '../Ui/Heading'
import Input from '../Ui/Input'
import { useMutation, useQuery } from 'react-query'
import { FormData, FormInput } from '@/types/formData.type'
import cn from 'clsx'
import { Button } from '../Ui/Button'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    problemId: 'Select One',
    message: ''
  })
  const [response, setResponse] = useState('')

  const getFormData = async () => {
    const res = await fetch('http://localhost:3000/api/form')
    const data: FormInput[] = await res.json()

    if (!res.ok) throw new Error('something went wrong')
    return data
  }

  const { isLoading, isError, isSuccess, data } = useQuery(
    'formData',
    getFormData
  )

  const submitForm = async (formData: FormData) => {
    try {
      const res = await fetch('http://localhost:3000/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      return res.json()
    } catch (error) {
      throw new Error(error as string)
    }
  }

  const {
    mutate,
    isLoading: Mutating,
    isSuccess: posted
  } = useMutation(submitForm, {
    onSuccess: (data) => {
      setResponse(data.message)
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        problemId: '',
        message: ''
      })
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setResponse('')
    mutate(formData)
  }

  return (
    <section className='relative flex items-center justify-center w-full mt-[6.4375rem]'>
      <Image
        draggable={false}
        src={contact_bg}
        alt='contact_bg'
        className='absolute top-0 select-none -z-10'
      />
      <Image
        src={contact_left}
        alt='contact_bg'
        className='z-10 self-end -mb-4 -mr-10 select-none'
      />
      <div className='flex flex-col items-center justify-center py-[3.6875rem] gap-[2.1875rem]'>
        <div className='text-center'>
          <Heading
            level={2}
            className='leading-[2.875rem] text-black-5'
          >
            Facing Problem? <br />
            <span className='font-semibold'>Lets Get In Touch Now</span>
          </Heading>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className='grid max-h-[40.625rem] grid-cols-2 relative bg-white pt-[3.75rem] px-[3.25rem] pb-[3.0313rem] w-[48.125rem] gap-[2.2188rem] rounded-lg shadow-box'
        >
          {isLoading && (
            <div className='min-h-[40.625rem] self-center'>Loading...</div>
          )}
          {isError && (
            <div className='min-h-[40.625rem] text-red-500 self-center'>
              Error
            </div>
          )}
          {isSuccess &&
            data.map((field) => {
              switch (field.field_name) {
                case 'select':
                  return (
                    <div
                      key={field.id}
                      className='grid col-span-full gap-[1.0625rem] border-b'
                    >
                      <label
                        className='text-sm font-medium text-black-5'
                        htmlFor='select'
                      >
                        Which Related Problem You Are Facing?
                      </label>
                      <select
                        className={cn(
                          'text-[.8125rem] h-[1.1875rem] mb-[1.0625rem] outline-none',
                          formData?.problemId === field.field_placeholder &&
                            'text-gray-2'
                        )}
                        value={formData.problemId}
                        id='select'
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                          setFormData({
                            ...formData,
                            [field.field_postname]: e.target.value
                          })
                        }
                      >
                        <option value='Select One'>
                          {field.field_placeholder}
                        </option>
                        {field.field_option.map((item, index) => (
                          <option
                            key={index}
                            value={item.value}
                            className='text-black-5'
                          >
                            {item.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  )
                case 'text':
                  return (
                    <Input
                      key={field.id}
                      type={field.field_name}
                      value={formData[field.field_postname as keyof FormData]}
                      labelClass='text-sm font-medium text-black-5'
                      inputClass='text-[.8125rem] placeholder:text-gray-2 h-[1.1875rem] mb-[1.0625rem]'
                      className={cn(
                        'grid gap-[1.0625rem] border-b',
                        field.field_break === true ||
                          (field.id === 2 && 'col-span-1')
                          ? 'col-span-1'
                          : 'col-span-full'
                      )}
                      placeholder={field.field_placeholder}
                      isDisabled={isLoading || isError}
                      label={field.field_title}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({
                          ...formData,
                          [field.field_postname]: e.target.value
                        })
                      }
                    />
                  )
                case 'email':
                  return (
                    <Input
                      labelClass='text-sm font-medium text-black-5'
                      inputClass='text-[.8125rem] placeholder:text-gray-2 h-[1.1875rem] mb-[1.0625rem]'
                      key={field.id}
                      value={formData.email}
                      type={field.field_name}
                      className='grid col-span-full gap-[1.0625rem] border-b'
                      placeholder={field.field_placeholder}
                      isDisabled={isLoading || isError}
                      label={field.field_title}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({
                          ...formData,
                          [field.field_postname]: e.target.value
                        })
                      }
                    />
                  )

                case 'text_area':
                  return (
                    <div
                      key={field.id}
                      className='grid col-span-full gap-[1.0625rem] border-b'
                    >
                      <label className='text-sm font-medium text-black-5'>
                        {field.field_title}
                      </label>
                      <textarea
                        className='min-h-[6.0938rem] resize-none text-[.8125rem] placeholder:text-gray-2 outline-none'
                        key={field.id}
                        value={formData.message}
                        placeholder={field.field_placeholder}
                        disabled={isLoading || isError}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                          setFormData({
                            ...formData,
                            [field.field_postname]: e.target.value
                          })
                        }
                      ></textarea>
                    </div>
                  )
                default:
                  break
              }
            })}
          <div className='flex items-center justify-between col-span-full'>
            {isSuccess && (
              <Button
                disabled={
                  Mutating ||
                  formData.problemId == 'Select One' ||
                  !formData.email ||
                  !formData.first_name ||
                  !formData.last_name ||
                  !formData.message ||
                  !formData.problemId
                }
                type='submit'
                variant='primary'
                className='w-[8.75rem] h-[3rem] rounded-md text-[.9375rem] font-medium'
              >
                Our Works
              </Button>
            )}
            <span>{posted && response}</span>
          </div>
        </form>
      </div>
      <Image
        src={contact_right}
        draggable={false}
        alt='contact_bg'
        className='z-10 self-end -ml-10 -mb-4 draggable={false}'
      />
    </section>
  )
}

export default Contact

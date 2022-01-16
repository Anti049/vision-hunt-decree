/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import Image from 'next/image'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SignInModal = ({ signinOpen, setSigninOpen }) => {
    const signInButtons = [
        {
            id: 'email',
            text: 'Sign In with Email',
            background: 'bg-black',
            color: 'text-white',
        },
        {
            id: 'google',
            text: 'Sign In with Google',
            background: 'bg-white',
            color: 'text-black',
        },
        {
            id: 'facebook',
            text: 'Sign In with Facebook',
            background: 'bg-[#1778f2]',
            color: 'text-white',
        },
        {
            id: 'apple',
            text: 'Sign In with Apple',
            background: 'bg-black',
            color: 'text-white',
        },
    ]

    return (
        <Transition.Root show={signinOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                onClose={setSigninOpen}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-item rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div>
                                <div className="mx-auto flex items-center justify-center">
                                    <Image
                                        className="h-8 w-8 rounded-full"
                                        src="/images/paimon.png"
                                        alt=""
                                        width="80"
                                        height="80"
                                    />
                                </div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <Dialog.Title
                                        as="h1"
                                        className="text-3xl leading-10 font-medium text-white"
                                    >
                                        Select a sign-in method
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-md text-gray-300 font-inter">
                                            You can sign-in with an email
                                            address and password, or with
                                            Google, Facebook, or Apple
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6 space-y-3">
                                {signInButtons.map((signInButton) => (
                                    <button
                                        key={signInButton.id}
                                        type="button"
                                        className={classNames(
                                            signInButton.color,
                                            signInButton.background,
                                            'flex items-center px-3 py-2 leading-4 w-full rounded-md border border-transparent shadow-sm font-inter text-md space-x-4'
                                        )}
                                        onClick={() => setSigninOpen(false)}
                                    >
                                        <Image
                                            src={`/images/auth/${signInButton.id}.png`}
                                            width="32"
                                            height="32"
                                            alt={signInButton.id}
                                        />
                                        <div className="mx-4" />
                                        {signInButton.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default SignInModal

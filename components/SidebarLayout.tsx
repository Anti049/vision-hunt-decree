import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuAlt2Icon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import SignInModal from './SignInModal'

const PageButtons = [
    {
        title: 'Home',
        link: '/',
        image: '/images/navigation/home.png',
    },
    {
        title: 'Characters',
        link: '/characters',
        image: '/images/navigation/characters.png',
    },
    {
        title: 'Wish Counter',
        link: '/wishes',
        image: '/images/navigation/wish.png',
    },
    {
        title: 'Calculator',
        link: '/calculator',
        image: '/images/navigation/calculator.png',
    },
    {
        title: 'To-Do List',
        link: '/todo',
        image: '/images/navigation/todos.png',
    },
    {
        title: 'Database',
        link: '/database',
        image: '/images/navigation/items.png',
    },
    {
        title: 'Timeline',
        link: '/timeline',
        image: '/images/navigation/timeline.png',
    },
    {
        title: 'Events',
        link: '/events',
        image: '/images/navigation/events.png',
    },
    {
        title: 'Settings',
        link: '/settings',
        image: '/images/navigation/settings.png',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SidebarButton = ({ title, link, image }) => {
    const router = useRouter()
    var isActive = router.route.startsWith(link)
    if (link == '/') isActive = router.route == link

    return (
        <div className="mt-5 flex-1 px-2 space-y-1 z-10 cursor-pointer">
            <Link href={link} passHref>
                <div
                    className={classNames(
                        isActive
                            ? 'bg-navigation'
                            : 'opacity-60 hover:opacity-100 hover:bg-navigation-hover',
                        'group flex items-center px-2 py-2 text-xl font-medium rounded-lg text-white transition ease-in duration-200'
                    )}
                >
                    <div className="w-10 h-10 mr-4 relative">
                        <Image src={image} alt={title} layout="fill" />
                    </div>
                    {title}
                </div>
            </Link>
        </div>
    )
}

const ProfileButton = ({ signinOpen, setSigninOpen }) => {
    const signedInNav = [
        { text: 'My Profile', link: '/profile' },
        { text: 'Settings', link: '/settings' },
    ]
    const notSignedInNav = [{ text: 'Settings', link: '/settings' }]
    const [signedIn, setSignedIn] = useState(false)

    function signIn() {
        setSigninOpen(true)
        console.log(signedIn)
    }

    function signOut() {
        //auth.signOut()
        setSignedIn(false)
        console.log(signedIn)
    }

    if (signedIn) {
        return (
            <div className="ml-4 flex items-center md:ml-6">
                <button
                    type="button"
                    className="bg-item p-1 rounded-full text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-navigation"
                >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                    <div>
                        <Menu.Button className="max-w-xs bg-background flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <span className="sr-only">Open user menu</span>
                            <Image
                                className="h-8 w-8 rounded-full"
                                src="/images/paimon.png"
                                width="40"
                                height="40"
                                alt="Profile"
                            />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-background ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-item">
                            <div className="py-1">
                                {signedInNav.map((item) => (
                                    <Link
                                        href={item.link}
                                        key={item.text}
                                        passHref
                                    >
                                        <a>
                                            <Menu.Item onClick={item.onClick}>
                                                {({ active }) => (
                                                    <span
                                                        className={classNames(
                                                            active
                                                                ? 'bg-item'
                                                                : '',
                                                            'block px-4 py-2 text-sm font-inter text-white'
                                                        )}
                                                    >
                                                        {item.text}
                                                    </span>
                                                )}
                                            </Menu.Item>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                            <div className="py-1">
                                <Menu.Item onClick={signOut}>
                                    {({ active }) => (
                                        <span
                                            className={classNames(
                                                active ? 'bg-item' : '',
                                                'block px-4 py-2 text-sm font-inter text-red'
                                            )}
                                        >
                                            Sign Out
                                        </span>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        )
    }

    return (
        <div className="ml-4 flex items-center md:ml-6">
            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative">
                <div>
                    <Menu.Button className="max-w-xs bg-background flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <Image
                            className="h-8 w-8 rounded-full"
                            src="/images/paimon.png"
                            width="40"
                            height="40"
                            alt="Profile"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-background ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-item">
                        <div className="py-1">
                            {notSignedInNav.map((item) => (
                                <Link href={item.link} key={item.text} passHref>
                                    <a>
                                        <Menu.Item onClick={item.onClick}>
                                            {({ active }) => (
                                                <span
                                                    className={classNames(
                                                        active ? 'bg-item' : '',
                                                        'block px-4 py-2 text-sm font-inter text-white'
                                                    )}
                                                >
                                                    {item.text}
                                                </span>
                                            )}
                                        </Menu.Item>
                                    </a>
                                </Link>
                            ))}
                        </div>
                        <div className="py-1">
                            <Menu.Item onClick={signIn}>
                                {({ active }) => (
                                    <span
                                        className={classNames(
                                            active ? 'bg-item' : '',
                                            'block px-4 py-2 text-sm font-inter text-green'
                                        )}
                                    >
                                        Sign In
                                    </span>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

const SidebarLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [signinOpen, setSigninOpen] = useState(false)

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 flex z-40 tablet:hidden"
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <XIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-1 flex flex-col h-0 overflow-y-auto bg-gradient-to-b from-background to-background-secondary">
                                    <nav className="flex-1 px-2 space-y-1 z-10">
                                        {PageButtons.map((item) => (
                                            <SidebarButton
                                                key={item.title}
                                                title={item.title}
                                                image={item.image}
                                                link={item.link}
                                            />
                                        ))}
                                    </nav>
                                    <div className="px-2 pt-0 pb-5 z-10 inset-x-0 bottom-0">
                                        <SidebarButton
                                            title="My Profile"
                                            image="/images/paimon.png"
                                            link="/profile"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden tablet:flex tablet:w-80 tablet:flex-col tablet:fixed tablet:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex-1 flex flex-col min-h-0 bg-background">
                        <div className="flex-1 flex flex-col overflow-y-auto">
                            <div className="overflow-x-hidden h-[550px] w-full tablet:w-80 fixed z-0 opacity-75">
                                <div className="pl-10 pt-5 bg-emblem-pattern bg-no-repeat bg-cover bg-left-top w-full h-full bg-origin-content blur-sm" />
                            </div>
                            <nav className="flex-1 px-2 space-y-2 z-10">
                                {PageButtons.map((item) => (
                                    <SidebarButton
                                        key={item.title}
                                        title={item.title}
                                        image={item.image}
                                        link={item.link}
                                    />
                                ))}
                            </nav>
                            <div className="px-2 pt-0 pb-5 z-10 inset-x-0 bottom-0">
                                <SidebarButton
                                    title="My Profile"
                                    image="/images/paimon.png"
                                    link="/profile"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tablet:pl-80 flex flex-col h-screen">
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-item shadow">
                        <button
                            type="button"
                            className="px-4 border-r border-background text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 tablet:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt2Icon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                        <div className="flex-1 px-4 flex justify-between bg-item">
                            <div className="flex-1 flex">
                                <form
                                    className="w-full flex md:ml-0"
                                    action="#"
                                    method="GET"
                                >
                                    <label
                                        htmlFor="search-field"
                                        className="sr-only"
                                    >
                                        Search
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                            <SearchIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <input
                                            id="search-field"
                                            className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-white placeholder-gray-200 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm md:text-md bg-item"
                                            placeholder="Search"
                                            type="search"
                                            name="search"
                                        />
                                    </div>
                                </form>
                            </div>
                            <ProfileButton
                                signinOpen={signinOpen}
                                setSigninOpen={setSigninOpen}
                            />
                            <SignInModal
                                signinOpen={signinOpen}
                                setSigninOpen={setSigninOpen}
                            />
                        </div>
                    </div>

                    <main className="flex-1 overflow-y-auto bg-background-secondary text-white">
                        <div className="py-6 pt-22">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default SidebarLayout

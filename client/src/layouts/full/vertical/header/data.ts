import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';

import icon1 from 'src/assets/images/svgs/icon-account.svg'
import icon2 from 'src/assets/images/svgs/icon-inbox.svg'
import icon3 from 'src/assets/images/svgs/icon-tasks.svg'

import ddIcon1 from 'src/assets/images/svgs/icon-dd-chat.svg'
import ddIcon2 from 'src/assets/images/svgs/icon-dd-cart.svg'
import ddIcon3 from 'src/assets/images/svgs/icon-dd-invoice.svg'
import ddIcon4 from 'src/assets/images/svgs/icon-dd-date.svg'
import ddIcon5 from 'src/assets/images/svgs/icon-dd-mobile.svg'
import ddIcon6 from 'src/assets/images/svgs/icon-dd-lifebuoy.svg'
import ddIcon7 from 'src/assets/images/svgs/icon-dd-message-box.svg'
import ddIcon8 from 'src/assets/images/svgs/icon-dd-application.svg'

// Notifications dropdown

interface notificationType {
  avatar: string;
  title: string;
  subtitle: string;
}

const notifications: notificationType[] = [
  {
    avatar: img1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
  },
  {
    avatar: img2,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar: img3,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
  },
  {
    avatar: img4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
  {
    avatar: img1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
  },
  {
    avatar: img2,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar: img3,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
  },
  {
    avatar: img4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
];

//
// Messages dropdown
//
interface messageType {
  avatar: string;
  title: string;
  subtitle: string;
  time: string;
  status: string;
}
const messages: messageType[] = [
  {
    avatar: img1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
    time: '1 hours ago',
    status: 'success',
  },
  {
    avatar: img2,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
    time: '1 day ago',
    status: 'warning',
  },
  {
    avatar: img3,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
    time: '2 days ago',
    status: 'success',
  },
  {
    avatar: img4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
    time: '1 week ago',
    status: 'danger',
  },
];

//
// Profile dropdown
//
interface ProfileType {
  href: string;
  title: string;
  subtitle: string;
  icon: any;
}
const profile: ProfileType[] = [
  {
    href: '/user-profile',
    title: 'My Profile',
    subtitle: 'Account Settings',
    icon: icon1,
  },
  {
    href: '/apps/email',
    title: 'My Inbox',
    subtitle: 'Messages & Emails',
    icon: icon2,
  },
  {
    href: '/apps/notes',
    title: 'My Tasks',
    subtitle: 'To-do and Daily Tasks',
    icon: icon3,
  },
];

// apps dropdown

interface appsLinkType {
  href: string;
  title : string;
  subtext: string;
  avatar: string;
}

const appsLink:appsLinkType[] = [
  {
    href: '/apps/chats',
    title: 'Chat Application',
    subtext: 'New messages arrived',
    avatar: ddIcon1
  },
  {
    href: '/apps/ecommerce/shop',
    title: 'eCommerce App',
    subtext: 'New stock available',
    avatar: ddIcon2
  },
  {
    href: '/apps/notes',
    title: 'Notes App',
    subtext: 'To-do and Daily tasks',
    avatar: ddIcon3
  },
  {
    href: '/apps/calendar',
    title: 'Calendar App',
    subtext: 'Get dates',
    avatar: ddIcon4
  },
  {
    href: '/apps/contacts',
    title: 'Contact Application',
    subtext: '2 Unsaved Contacts',
    avatar: ddIcon5
  },
  {
    href: '/apps/tickets',
    title: 'Tickets App',
    subtext: 'Submit tickets',
    avatar: ddIcon6
  },
  {
    href: '/apps/email',
    title: 'Email App',
    subtext: 'Get new emails',
    avatar: ddIcon7
  },
  {
    href: '/apps/blog/posts',
    title: 'Blog App',
    subtext: 'added new blog',
    avatar: ddIcon8
  },
]


interface LinkType {
  href: string;
  title: string;
}

const pageLinks:LinkType[] = [
  {
    href: '/pricing',
    title: 'Pricing Page'
  },
  {
    href: '/auth/login',
    title: 'Authentication Design'
  },
  {
    href: '/auth/register',
    title: 'Register Now'
  },
  {
    href: '/404',
    title: '404 Error Page'
  },
  {
    href: '/auth/login',
    title: 'Login Page'
  },
  {
    href: '/user-profile',
    title: 'User Application'
  },
  {
    href: '/apps/blog/posts',
    title: 'Blog Design'
  },
  {
    href: '/apps/ecommerce/eco-checkout',
    title: 'Shopping Cart'
  },
]

export { notifications, messages, profile, pageLinks, appsLink };

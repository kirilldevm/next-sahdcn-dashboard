import MenuItem from './menu-item';

const items = [
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    label: 'Teams',
    href: '/dashboard/teams',
  },
  {
    label: 'Employees',
    href: '/dashboard/employees',
  },
  {
    label: 'Account',
    href: '/dashboard/account',
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
  },
];

export default function NavigationMenu() {
  return (
    <ul className='flex flex-col gap-2'>
      {items.map((item) => (
        <MenuItem key={item.href} href={item.href}>
          {item.label}
        </MenuItem>
      ))}
    </ul>
  );
}

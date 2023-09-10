'use client';

import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import TimeIcon from '../../public/icons/time.svg';
import HistoryIcon from '../../public/icons/history.svg';
import LogoutIcon from '../../public/icons/turn_off.svg';

export const Header = () => {
	const isLoggedIn = true;

	const currentPathname = usePathname();

	const items: MenuItem[] = [
		{
			label: 'Trackers',
			icon: <TimeIcon className='header__icon' />,
			url: '/trackers',
			className:
				currentPathname === '/trackers'
					? 'menu-item--active p-menuitem-active'
					: 'menu-item',
		},
		{
			label: 'History',
			icon: <HistoryIcon className='header__icon' />,
			url: '/history',
			className:
				currentPathname === '/history'
					? 'menu-item--active p-menuitem-active'
					: 'menu-item',
		},
	];

	const start = (
		<div className='header__start'>
			<Image
				src='/devot_logo.svg'
				alt='devot logo'
				width={165}
				height={45}
				className='logo'
			/>
			<p className='header__start-text'>Tracking tool</p>{' '}
		</div>
	);

	const end = (
		<div className='header__end '>
			<Button
				className='menubar-button'
				icon={<LogoutIcon className='header__icon' />}
				iconPos='left'>
				Logout
			</Button>
		</div>
	);

	return (
		<Menubar
			className='header'
			model={isLoggedIn ? items : undefined}
			start={start}
			end={isLoggedIn ? end : undefined}
		/>
	);
};

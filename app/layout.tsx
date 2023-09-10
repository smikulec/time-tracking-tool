'use client';
import { Header } from '@/modules';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../styles/styles.scss';

export const metadata: Metadata = {
	title: 'Time tracking tool',
	description: 'Created by SM',
};

const nunito = Nunito_Sans({
	weight: ['400', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}

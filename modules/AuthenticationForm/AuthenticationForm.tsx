'use client';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import UserNewSvg from '../../public/user_new.svg';
import UserSvg from '../../public/user.svg';
import EyeIcon from '../../public/icons/eye.svg';
import Image from 'next/image';

export const AuthenticationForm = ({
	isLogin = false,
}: {
	isLogin?: boolean;
}) => {
	return (
		<div className='authentication-form'>
			<Card
				className='authentication-form__container'
				title={isLogin ? 'Login' : 'Register'}>
				<div className='authentication-form__inputs'>
					<span className='p-float-label'>
						<InputText id='username' className='authentication-form__input' />
						<label htmlFor='username'>Username</label>
					</span>
					<span className='p-float-label p-input-icon-right'>
						<InputText id='password' className='authentication-form__input' />
						<label htmlFor='password'>Password</label>
						<EyeIcon />
					</span>
					{!isLogin && (
						<span className='p-float-label p-input-icon-right'>
							<InputText
								id='repeatPassword'
								className='authentication-form__input'
							/>
							<label htmlFor='repeatPassword'>Repeat password</label>
							<EyeIcon />
						</span>
					)}
				</div>
				<Button severity='secondary' className='authentication-form__button'>
					{isLogin ? 'Login' : 'Register'}
				</Button>
			</Card>

			<Card className='authentication-form__info'>
				{isLogin ? (
					<Image
						src='/user_new.svg'
						alt='new user icon'
						width='95'
						height='80'
					/>
				) : (
					<Image src='/user.svg' alt='user icon' width='95' height='80' />
				)}
				<div className='authentication-form__info-text'>
					<p>{isLogin ? 'Need an account?' : 'Already have an account?'}</p>
					<a
						href={isLogin ? '/register' : '/login'}
						className='authentication-form__info-link'>
						{isLogin ? 'Register here' : 'Login here'}
					</a>
				</div>
			</Card>
		</div>
	);
};

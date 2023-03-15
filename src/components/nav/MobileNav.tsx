/***** IMPORTS *****/
import { Dialog, Disclosure } from '@headlessui/react';
import React, { FC } from 'react';
import PrimaryBtn from '../common/buttons/PrimaryBtn';
import LinkElement from '../common/LinkElement';
import Nav from './Nav';


/***** INTERFACES *****/
interface MobileNavProps {
	mobileMenuOpen?: boolean,
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>

};


/***** COMPONENT-FUNCTION *****/
const MobileNav: FC<MobileNavProps> = ({ mobileMenuOpen, setMobileMenuOpen }): JSX.Element => {

	/** return statement */
	return (
		<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
			<div className="fixed inset-0 z-10" />
			<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
				<div className="flex items-center justify-between">
					<h2>LOGO</h2>
					<PrimaryBtn onClick={() => setMobileMenuOpen(false)}>
						Close
						{/* TODO ADD ICON         */}
						{/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
					</PrimaryBtn>
				</div>
				<hr className=' my-6'></hr>
				<div className='flex flex-col gap-3'>
					<LinkElement href="/" > Home</LinkElement>
					<LinkElement href="#" > Features</LinkElement>
					<LinkElement href="#" >Marketplace</LinkElement>
					<LinkElement href="#" > Company</LinkElement>
				</div>
				<hr className=' my-6'></hr>
				<div className='mt-6 flow-root'>
					<LinkElement href='/login' className="-m-2.5 p-2.5">
						Log In <span aria-hidden="true">&rarr;</span>
					</LinkElement>

				</div>
			</Dialog.Panel>
		</Dialog>
	);
};

/***** EXPORTS *****/
export default MobileNav;
import React from 'react';
import Logo from './logo';
import { motion } from 'framer-motion';

const Splash = () => {
	return (
		<motion.div
			className='flex h-full w-full flex-col items-center justify-center'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 0.3,
				ease: 'easeInOut',
				stiffness: 100,
				damping: 20,
			}}
		>
			<Logo size='lg' />
		</motion.div>
	);
};

export default Splash;

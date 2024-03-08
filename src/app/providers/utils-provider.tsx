'use client';

import CheckConnection from '@/components/ui/check-connection';
import React, { ReactNode } from 'react';
import { useInternetConnection } from '@/hooks/index';

const UtilsProvider = ({ children }: { children: ReactNode }) => {
	const isOnline = useInternetConnection();

	return isOnline ? children : <CheckConnection />;
};

export default UtilsProvider;

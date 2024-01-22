import { useState } from 'react';

const useToggleModal = () => {
	const [activeModal, setActiveModal] = useState<string | null>(null);

	const toggleModal = (modal: string | null) => {
		setActiveModal((prevModal) => (prevModal === modal ? null : modal));
	};

	return { activeModal, toggleModal };
};

export default useToggleModal;

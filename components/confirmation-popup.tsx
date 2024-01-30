import { Modal, ModalContent } from '@nextui-org/react';
import CheckIcon from './icons/check';

import PopupContent from './popup-content';
import PopupButton from './popup-button';

interface ConfirmationPopupProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function ConfirmationPopup({
  isOpen,
  onOpenChange,
}: ConfirmationPopupProps) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      placement='center'
      size='xl'
    >
      <ModalContent>
        <div className='flex flex-col gap-6 p-8 sm:gap-8 sm:p-12'>
          <div className=''>
            <CheckIcon />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-h4 sm:text-h3'>THANK YOU FOR YOUR ORDER</h1>
            <p className='text-regular text-black opacity-50'>
              You will receive an email confirmation shortly.
            </p>
          </div>
          <PopupContent />
          <PopupButton onOpenChange={onOpenChange} />
        </div>
      </ModalContent>
    </Modal>
  );
}

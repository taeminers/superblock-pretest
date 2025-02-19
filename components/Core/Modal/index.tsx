import { useModalStore } from "@/zustand/useModalStore";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const { isOpen, closeModal } = useModalStore();
  return <div>{children}</div>;
};

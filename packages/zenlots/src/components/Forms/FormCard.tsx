import { FormEventHandler } from 'react';

interface FormCardProps {
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
  className?: string;
}

const FormCard = ({ children, onSubmit, className }: FormCardProps) => {
  return (
    <form
      className={
        `flex flex-col overflow-hidden rounded-xl border border-grayText/80 ` +
        className
      }
      onSubmit={(event) => {
        event.preventDefault();
        if (!onSubmit) {
          return;
        }
        onSubmit(event);
      }}
    >
      {children}
    </form>
  );
};

export default FormCard;

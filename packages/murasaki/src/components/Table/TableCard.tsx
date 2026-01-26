import React from 'react';

interface TableCardProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const TableCard = ({ children, footer }: TableCardProps) => {
  return (
    <>
      <div className="bg-whiteShade custom-scrollbar w-full overflow-x-auto rounded-lg">
        <table className="w-full table-auto border-spacing-y-2">
          {children}
        </table>
      </div>
      {footer}
    </>
  );
};

export default TableCard;

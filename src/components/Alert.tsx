import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode;
    onClose: () => void;
}

const Alert = ( { children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
        {children}
        <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss ="alert"></button>
        </div>
  )
}

export default Alert
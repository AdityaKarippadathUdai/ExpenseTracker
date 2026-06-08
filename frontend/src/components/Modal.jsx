import React from 'react'

const Modal = ({children,isOpen,onClose,title}) => {
  return (
    <div className=''>
        <div className=''>
            {/*  Modal content*/}
            <div className=''>
                {/*  Modal Header*/}
                <div className=''>
                    <h3 className=''>
                        {title}
                    </h3>
                    <buttton
                    type='button'
                    className=''
                    onClick={onClose}
                    >
                    x
                    </buttton>
                </div>
                {/* Modal body*/}
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal
import React from 'react'

export default function Loader() {
    return (
        <div style={{ width: '100%', height: '90vh' }} className='d-flex justify-content-center align-items-center'>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        </div>
    )
}
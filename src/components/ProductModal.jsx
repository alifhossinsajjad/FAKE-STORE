import React, { useEffect, useRef } from 'react';

const ProductModal = ({ product, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (product && modalRef.current) {
            modalRef.current.showModal();
        }
    }, [product]);

    const handleClose = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
        onClose();
    };

    if (!product) return null;

    return (
        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-white text-gray-800">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>✕</button>
                </form>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                        <img src={product.image} alt={product.title} className="max-h-60 object-contain" />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col gap-2">
                        <div className="badge badge-accent badge-outline mb-2 uppercase text-xs font-bold tracking-wide">{product.category}</div>
                        <h3 className="font-bold text-lg leading-tight">{product.title}</h3>

                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-xl font-bold text-primary">${product.price}</span>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow-500">
                                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <span>{product.rating?.rate} ({product.rating?.count})</span>
                            </div>
                        </div>

                        <p className="py-2 text-sm text-gray-600 mt-2 max-h-32 overflow-y-auto">{product.description}</p>

                        <div className="card-actions mt-auto">
                            <button className="btn btn-primary btn-block text-white" onClick={handleClose}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={handleClose}>close</button>
            </form>
        </dialog>
    );
};

export default ProductModal;

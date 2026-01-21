import React from 'react';

const ProductCard = ({ product, index, onDragStart, onDragOver, onDrop, onClick }) => {
    return (
        <div
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-move border border-transparent hover:border-primary/20 group"
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, index)}
            onClick={() => onClick(product)}
        >
            <figure className="px-6 pt-6 bg-white flex items-center justify-center h-48 relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="badge badge-secondary text-xs">Drag me</div>
                </div>
            </figure>
            <div className="card-body p-4 items-center text-center">
                <h2 className="card-title text-sm line-clamp-2 min-h-[2.5rem]">{product.title}</h2>
                <p className="text-secondary font-bold text-lg">${product.price}</p>
                <div className="card-actions justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="btn btn-xs btn-outline btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

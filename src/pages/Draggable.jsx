import React, { useState, useRef, useEffect } from 'react';
import Moveable from 'react-moveable';
import "../App.css"

const Draggable = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (targetRef.current && !targetRef.current.contains(event.target)) {
                setIsSelected(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [targetRef]);

    return (
        <div className="flex h-full max-w-screen-md ml-24">
            <div className="flex-1 p-14">
                <button
                    className="md:hidden bg-green-900 text-white p-2 rounded-md"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
                <div className={`bg-white text-black w-full h-full rounded-lg shadow-lg flex border flex-1 flex-col justify-center items-center transition-colors duration-300 ${isDragging ? 'animate-color-change' : 'border-green-900'}`} style={{ overflow: "hidden" }}>
                    <div className="root">
                        <div className="container">
                            <div
                                className={`target p-4 transition-colors duration-300 ${isSelected ? 'bg-green-500 text-white border-2 border-green-700' : 'bg-orange-300 text-black border-2 border-orange-500'}`}
                                ref={targetRef}
                                style={{ width: "150px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}
                                onClick={() => setIsSelected(true)}
                            >
                                Target
                            </div>
                            {isSelected && targetRef.current && (
                                <Moveable
                                    target={".target"}
                                    draggable={true}
                                    onDragStart={() => setIsDragging(true)}
                                    onDragEnd={() => setIsDragging(false)}
                                    onRender={e => {
                                        e.target.style.cssText += e.cssText;
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Draggable;
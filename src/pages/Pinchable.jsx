import React, { useState, useRef, useEffect } from 'react';
import Moveable from 'react-moveable';
import "../App.css"; 

const colors = ['bg-orange-300', 'bg-green-300'];

const Pinchable = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [colorIndex, setColorIndex] = useState(0);
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

    const handleClick = () => {
        setIsSelected(true);
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    return (
        <div className="flex h-full max-w-screen-md ml-24">
            <div className="flex-1 p-14">
                <button
                    className="md:hidden bg-black text-white p-2 rounded-md"
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
                <div className={`bg-white text-black w-full h-full rounded-lg shadow-lg flex border flex-1 flex-col justify-center items-center transition-colors duration-300 ${isDragging ? 'animate-color-change' : 'border-black'}`} style={{ overflow: "hidden" }}>
                    <div className="root relative">
                        <div
                            className={`target p-4 ${colors[colorIndex]} ${isSelected ? 'border-2 border-blue-500' : ''}`}
                            ref={targetRef}
                            style={{ width: "150px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}
                            onClick={handleClick}
                        >
                            Target
                        </div>
                        {isSelected && targetRef.current && (
                            <Moveable
                                target={targetRef.current}
                                draggable={true}
                                scalable={true}
                                rotatable={true}
                                pinchable={true}
                                pinchOutside={true}
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
    );
};

export default Pinchable;
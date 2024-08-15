import React, { useState, useRef, useEffect } from 'react';
import Moveable from 'react-moveable';

const Clippable = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
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
                <div className="bg-white text-black w-full h-full rounded-lg shadow-lg flex border border-black flex-1 flex-col justify-center items-center" style={{ overflow: "hidden" }}>
                    <div className="root">
                        <div className="container">
                            <div
                                className={`target bg-blue-300 p-4 ${isSelected ? 'border-2 border-blue-500' : ''}`}
                                ref={targetRef}
                                style={{ width: "150px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}
                                onClick={() => setIsSelected(true)}
                            >
                                Target
                            </div>
                            {isSelected && targetRef.current && (
                                <Moveable
                                    target={targetRef}
                                    draggable={true}
                                    startDragRotate={0}
                                    throttleDragRotate={0}

                                    clippable={true}
                                    clipRelative={false}
                                    clipArea={false}

                                    dragWithClip={0}
                                    defaultClipPath={"inset"}
                                    clipTargetBounds={false}

                                    snapThreshold={5}
                                    keepRatio={false}
                                    onDrag={e => {
                                        e.target.style.transform = e.transform;
                                    }}
                                    onClip={e => {
                                        e.target.style.clipPath = e.clipStyle;
                                    }} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clippable;

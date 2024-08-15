import React, { useState, useRef, useEffect } from 'react';
import Moveable from 'react-moveable';

const DRR = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const targetRef = useRef(null);
    const moveableRef = useRef(null);

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
                                style={{ width: "150px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}
                                onClick={() => setIsSelected(true)}
                            >
                                Target
                            </div>
                            {isSelected && targetRef.current && (
                                <Moveable
                                    ref={moveableRef}
                                    target={targetRef.current}
                                    draggable={true}
                                    throttleDrag={1}
                                    edgeDraggable={false}
                                    startDragRotate={0}
                                    throttleDragRotate={0}
                                    resizable={true}
                                    keepRatio={false}
                                    throttleResize={1}
                                    renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
                                    rotatable={true}
                                    throttleRotate={0}
                                    rotationPosition={"top"}
                                    onDrag={e => {
                                        e.target.style.transform = e.transform;
                                    }}
                                    onResize={e => {
                                        e.target.style.width = `${e.width}px`;
                                        e.target.style.height = `${e.height}px`;
                                        e.target.style.transform = e.drag.transform;
                                    }}
                                    onRotate={e => {
                                        e.target.style.transform = e.drag.transform;
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

export default DRR;
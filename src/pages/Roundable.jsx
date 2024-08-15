import React, { useState, useRef, useEffect } from 'react';
import Moveable from 'react-moveable';
import "./style.css"


const Roundable = () => {
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
                            <div className="target target1">Target1</div>
                            <div className="target target2">Target2</div>
                            <div className="target target3">Target3</div>
                            <div className="target target4">Target4</div>
                            <Moveable
                                target={".target1"}
                                draggable={true}
                                roundable={true}
                                resizable={true}
                                isDisplayShadowRoundControls={"horizontal"}
                                roundClickable={"control"}
                                roundPadding={15}
                                onRound={e => {
                                    console.log("ROUND", e.borderRadius);
                                }}
                                onRender={e => {
                                    e.target.style.cssText += e.cssText;
                                }}
                                onRenderEnd={e => {
                                    e.target.style.cssText += e.cssText;
                                }}
                            />
                            <Moveable
                                target={".target2"}
                                roundable={true}
                                roundClickable={true}
                                onRound={e => {
                                    console.log("ROUND", e.borderRadius);
                                    e.target.style.borderRadius = e.borderRadius;
                                }}
                            />
                            <Moveable
                                target={".target3"}
                                roundable={true}
                                onRound={e => {
                                    console.log("ROUND", e.borderRadius);
                                    e.target.style.borderRadius = e.borderRadius;
                                }}
                            />
                            <Moveable
                                target={".target4"}
                                roundable={true}
                                onRound={e => {
                                    console.log("ROUND", e.borderRadius);
                                    e.target.style.borderRadius = e.borderRadius;
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roundable;
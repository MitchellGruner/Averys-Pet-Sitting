"use client";

import { useState, useEffect, useRef } from "react";
import { motion, MotionConfig } from "framer-motion";

import OpenHamburgerMenu from "./OpenHamburgerMenu";

const HamburgerMenu = () => {
    const [active, setActive] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setActive(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <section className="relative" ref={menuRef}>
            <MotionConfig
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <motion.button 
                    initial={false}
                    onClick={() => setActive(!active)}
                    className={`relative h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20 ease-in-out duration-500 ${active ? 'bg-white/20' : ''}`}
                    animate={active ? "open" : "closed"}
                >
                    <motion.span
                        style={{
                            left: "50%",
                            top: "35%",
                            x: "-50%",
                            y: "-50%",
                        }}
                        className="absolute h-1 w-10 bg-white"
                        variants={{
                            open: {
                                rotate: "45deg",
                                top: "50%",
                            },
                            closed: {
                                rotate: "0deg",
                            },
                        }}
                    />
                    <motion.span
                        style={{
                            left: "50%",
                            top: "50%",
                            x: "-50%",
                            y: "-50%",
                        }}
                        className="absolute h-1 w-10 bg-white"
                        variants={{
                            open: {
                                rotate: "-45deg",
                            },
                            closed: {
                                rotate: "0deg",
                            },
                        }}
                    />
                    <motion.span
                        style={{
                            left: "calc(50% + 10px)",
                            bottom: "35%",
                            x: "-50%",
                            y: "50%",
                        }}
                        className="absolute h-1 w-5 bg-white"
                        variants={{
                            open: {
                                rotate: "45deg",
                                left: "50%",
                                bottom: "50%",
                            },
                            closed: {
                                rotate: "0deg",
                                left: "calc(50% + 10px)",
                                bottom: "35%",
                            },
                        }}
                    />
                </motion.button>
            </MotionConfig>

            {active && (
                <OpenHamburgerMenu closeState={setActive} />
            )}
        </section>
    )
}

export default HamburgerMenu;
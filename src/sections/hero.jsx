import HeroExperience from '../components/HeroExperience.jsx'
import { words } from '../constants/index.js'
import Button from '../components/Button.jsx'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter.jsx';



const hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            },
        )
    })

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/*LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />

                                                <span>{word.text}</span>

                                            </span>))}
                                    </span>
                                </span>
                            </h1>
                            <h1>Into Personal Projects</h1>
                            <h1>That Amass Interest</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I'm Ayinde Abrams, a passionate computer scientist from the US
                        </p>
                        <Button
                            text="See My Work"
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="counter"
                        />
                    </div>
                </header>
                {/*RIGHT: 3D Model */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter/>
                                            
        </section>
    )
}

export default hero
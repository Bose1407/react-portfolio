import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'

import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { SiFlask} from 'react-icons/si'
import { SiSolidity} from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { animate, motion } from 'framer-motion'
import { transition } from '@chakra-ui/react'

const iconanimate = (dur)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:dur,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconanimate(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-400'></SiMongodb>
            </motion.div>
            <motion.div variants={iconanimate(4)} animate="animate" initial="initial" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className='text-7xl text-light-400'></SiExpress>
            </motion.div>
            <motion.div  variants={iconanimate(3)} animate="animate" initial="initial" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'></RiReactjsLine>
            </motion.div>
            <motion.div  variants={iconanimate(2)} animate="animate" initial="initial" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNodedotjs className='text-7xl text-green-400'></SiNodedotjs>
            </motion.div>
            <motion.div variants={iconanimate(4)}  animate="animate" initial="initial" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className='text-7xl text-yellow-400'></SiPython>
            </motion.div>
            <motion.div variants={iconanimate(2)} animate="animate" initial="initial" className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className='text-7xl '></DiJava>
            </motion.div>
            <motion.div variants={iconanimate(3)} animate="animate" initial="initial" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFlask className='text-7xl '></SiFlask>
            </motion.div>
            <motion.div variants={iconanimate(2)} animate="animate" initial="initial" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSolidity className='text-7xl '></SiSolidity>
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Technologies

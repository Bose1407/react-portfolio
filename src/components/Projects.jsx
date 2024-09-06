import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'
import { SiGithub } from 'react-icons/si'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4  text-2xl'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div className='font-light tracking-tighter'>
        <SimpleGrid spacing={20} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card bg="#2c2530" color="white">
                <CardHeader>
                <Heading size='md'>Chat App</Heading>
                </CardHeader>
                <CardBody>
                <Text>A FullStack Application Using MERN Stack.</Text>
                </CardBody>
                <CardFooter>
                <Button colorScheme='muted'><SiGithub/>View in GitHub</Button>
                </CardFooter>
            </Card>
            <Card bg="#2c2530" color="white">
                <CardHeader>
                <Heading size='md'>Task Manager</Heading>
                </CardHeader>
                <CardBody>
                <Text>A Task Manager Using Expressjs with Tailwind.css</Text>
                </CardBody>
                <CardFooter>
                <Button colorScheme='muted'><SiGithub/>View in GitHub</Button>
                </CardFooter>
            </Card>
            <Card bg="#2c2530" color="white">
                <CardHeader>
                <Heading size='md'>Snake Game</Heading>
                </CardHeader>
                <CardBody>
                <Text>Snake Game using PyGame Library in Python</Text>
                </CardBody>
                <CardFooter>
                <Button colorScheme='muted'><SiGithub/>View in GitHub</Button>
                </CardFooter>
            </Card>
            <Card bg="#2c2530" color="white">
                <CardHeader>
                <Heading size='md'>Portfolio</Heading>
                </CardHeader>
                <CardBody>
                <Text>Built Using React,Tailwind.css,Chakra UI</Text>
                </CardBody>
                <CardFooter>
                <Button colorScheme='muted'><SiGithub/>View in GitHub</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
        </div>
    </div>
  )
}

export default Projects

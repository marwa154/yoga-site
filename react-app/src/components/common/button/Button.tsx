import React from 'react'
import { motion } from 'framer-motion';
import './button.css';
interface ButtonProps {
    children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return (
        <motion.button
            className="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    )
}

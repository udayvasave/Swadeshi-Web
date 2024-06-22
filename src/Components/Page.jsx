// Page.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@cred/neopop-web/lib/components';
import EmailInput from './EmailInput';

const Page = () => {
    const [showInput, setShowInput] = useState(false);

    const handleButtonClick = () => {
        setShowInput(true);
    };

    const handleEmailSubmit = (email) => {
        console.log("Submitted email:", email);
        // Handle the submitted email here if needed
    };

    return (
        <div>
            <AnimatePresence>
                {!showInput && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Button
                            variant="primary"
                            kind="elevated"
                            size="big"
                            colorMode="light"
                            onClick={handleButtonClick}
                            style={{}}
                        >
                            Request Early Access
                        </Button>
                    </motion.div>
                )}
                {showInput && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <EmailInput onSubmit={handleEmailSubmit} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Page;

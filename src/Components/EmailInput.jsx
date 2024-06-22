import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@cred/neopop-web/lib/components';
import "./style/emailInput.css";
import SuccessAnimation from './SuccessAnimation';

const EmailInput = ({ onSubmit }) => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [submitted, setSubmitted] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const email = e.target.elements.email.value;

//         setLoading(true);
//         setError(null);

//         try {
//             const response = await fetch('https://your-api-endpoint.com/submit-email', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email }),
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             console.log('Submitted email:', data);

//             setSubmitted(true); // Set the submitted state to true
//             onSubmit(email);
//         } catch (err) {
//             setError('Failed to submit email. Please try again.');
//             console.error('Failed to submit email:', err);
//         } finally {
//             setLoading(false);
//         }
//     };   
    
//     return (
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//         >
//             {submitted ? (
//                 <SuccessAnimation />
//             ) : (
//                 <motion.form 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     onSubmit={handleSubmit}
//                 >
//                     <div className="inputBtn">
//                         <input className='inputField' type="email" name="email" placeholder="Enter your email" required />
//                         <Button
//                             variant="primary"
//                             kind="elevated"
//                             size="big"
//                             colorMode="light"
//                             type="submit"
//                             disabled={loading}
//                         >
//                             {loading ? 'Submitting...' : 'Submit'}
//                         </Button>
//                     </div>
//                     {error && <p style={{ color: 'red' }}>{error}</p>}
//                 </motion.form>
//             )}
//         </motion.div>
//     );
// };

// export default EmailInput;


//////////////////////////////////////////////////////////////////////////



const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;

        setLoading(true);
        setError(null);

        try {
            // Simulating successful submission by skipping the API call
            setTimeout(() => {
                console.log('Submitted email:', email);
                setSubmitted(true); // Set the submitted state to true
                onSubmit(email);
                setLoading(false);
            }, 1000); // Simulate a delay for the loading state
        } catch (err) {
            setError('Failed to submit email. Please try again.');
            console.error('Failed to submit email:', err);
            setLoading(false);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {submitted ? (
                <SuccessAnimation />
            ) : (
                <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                >
                    <div className="inputBtn">
                        <input className='inputField' type="email" name="email" placeholder="Enter your email" required />
                        <Button
                            variant="primary"
                            kind="elevated"
                            size="big"
                            colorMode="light"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </motion.form>
            )}
        </motion.div>
    );





}
export default EmailInput;
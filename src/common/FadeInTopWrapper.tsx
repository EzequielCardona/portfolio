import { motion } from 'framer-motion';

interface IProps {
  children: React.ReactElement;
  delay?: number;
}

export function FadeInTopWrapper({ children, delay }: IProps) {
  return (
    <motion.div
      style={{ display: 'flex', flexDirection: 'column' }}
      initial={{ opacity: 0, y: '2rem' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
}

import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import background from '../assets/bg.jpg';
import {motion } from 'framer-motion';

const Home = () => {
  return (
    <Box bgColor={'black'} w={'full'} h={'80vh'}>
      <motion.div
        style={{
          height: '80vh',
        }}
        animate={{
          translateY: '20px',
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Image
          w={'full'}
          h={'full'}
          objectFit={'contain'}
          src={background}
          filter={'grayscale(1)'}
        />
      </motion.div>
      <Text
        fontSize={'6xl'}
        textAlign={'center'}
        fontWeight={'thin'}
        color={'whiteAlpha.700'}
        mt={'-8'}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;

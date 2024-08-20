// pages/Guide.js
import { Box, Flex, Text, Icon, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaRobot, FaStethoscope, FaDonate, FaAmbulance } from 'react-icons/fa';

const MotionBox = motion(Box);

const features = [
  {
    title: 'AI Diagnosis',
    description:
      'An AI-powered health diagnosis system that uses advanced models to predict possible diseases based on symptoms, age, and gender.',
    icon: FaStethoscope,
    bg: 'blue.400',
    details: `The AI Diagnosis feature was created to assist users in identifying potential health concerns early on. 
              It leverages cutting-edge machine learning models from Hugging Face to analyze symptoms with high accuracy, 
              providing valuable insights while ensuring user privacy. This tool helps bridge the gap between users and 
              healthcare providers, offering a preliminary analysis before medical consultations.`,
  },
  {
    title: 'Doctor Chatbot',
    description:
      'Consult an AI-powered Doctor Chatbot, designed to help users with difficult questions while simulating a real doctor’s expertise.',
    icon: FaRobot,
    bg: 'yellow.400',
    details: `The Doctor Chatbot was developed using Large Language Models (LLMs) to offer users a space to ask 
              medical-related questions without hesitation. This system helps address common concerns or questions 
              that might feel too personal for a face-to-face consultation, providing trustworthy, AI-generated responses.`,
  },
  {
    title: 'Cardiometer',
    description:
      'Track your heart health effortlessly with CardioQ, a lightweight wearable device designed to monitor heart rate variations during sleep.',
    icon: FaHeartbeat,
    bg: 'red.400',
    details: `The Cardiometer device, named CardioQ, was designed with IoT integration to ensure real-time heart 
              monitoring during sleep. It detects fluctuations and sends alerts to the user, enabling timely health 
              interventions and constant monitoring of cardiac well-being. This product is perfect for those wanting 
              better insights into their heart health, even during rest.`,
  },
  {
    title: 'Emergency Services',
    description:
      'Use our emergency services for urgent assistance, including automated IoT emergency messages and real-time support.',
    icon: FaAmbulance,
    bg: 'teal.400',
    details: `Our Emergency Services feature integrates IoT devices to detect and respond to crisis situations. 
              It sends automated messages to emergency contacts and local healthcare providers, ensuring a swift response 
              during critical moments. The smart contracts in place allow for immediate dispatch of ambulances and 
              allocation of healthcare resources.`,
  },
  {
    title: 'Donation',
    description:
      'Support our organization’s vision and help us expand and maintain quality services through your generous donations.',
    icon: FaDonate,
    bg: 'purple.400',
    details: `Donations are vital to sustaining and expanding our services. With the funds received, we aim to improve 
              healthcare accessibility, increase our technology reach, and maintain the quality of our offerings, ensuring 
              that users continue to benefit from our innovative solutions.`,
  },
];

const Guide = () => {
  return (
    <Flex direction="column" align="center" p={10}>
      <Text fontSize="4xl" fontWeight="bold" mb={8}>
        Website Guide
      </Text>
      <Accordion allowToggle w="100%" maxW="800px">
        {features.map((feature, index) => (
          <AccordionItem key={index}>
            <MotionBox
              as="header"
              bg={feature.bg}
              color="white"
              p={6}
              borderRadius="lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              mb={4}
            >
              <AccordionButton>
                <Flex flex="1" align="center" justifyContent="space-between">
                  <Flex align="center">
                    <Icon as={feature.icon} w={12} h={12} mr={4} />
                    <Text fontSize="2xl" fontWeight="bold">
                      {feature.title}
                    </Text>
                  </Flex>
                  <AccordionIcon />
                </Flex>
              </AccordionButton>
            </MotionBox>

            <AccordionPanel pb={4} bg="white" color="black" borderRadius="lg" boxShadow="md">
              <Text mb={2}>{feature.description}</Text>
              <Text>{feature.details}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default Guide;

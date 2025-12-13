import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressStepProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressStep: React.FC<ProgressStepProps> = ({ currentStep, totalSteps }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressTrack}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <View 
            key={index} 
            style={[
              styles.step,
              index < currentStep ? styles.completed : null,
              index === currentStep - 1 ? styles.current : null
            ]}
          />
        ))}
      </View>
      <Text style={styles.stepText}>Step {currentStep} of {totalSteps}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  progressTrack: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  step: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E0E0E0',
  },
  completed: {
    backgroundColor: '#0057B8', // electric-blue
  },
  current: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0057B8',
  },
  stepText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  }
});

export default ProgressStep;

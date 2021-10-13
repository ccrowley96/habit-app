import { Box, Heading, VStack } from 'native-base';
import React from 'react';

const HabitContainer: React.FC<{ habits: Array<IHabit> }> = ({ habits }) => {
  if (habits.length === 0) {
    return (
      <VStack space={5} alignItems="center">
        <Heading size="lg">Click + to add a habit!</Heading>
      </VStack>
    );
  }

  return (
    <VStack space={5} alignItems="center">
      {habits.map((habit) => (
        <Box>{habit.label}</Box>
      ))}
    </VStack>
  );
};

export default HabitContainer;

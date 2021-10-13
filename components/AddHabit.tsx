import { Box, Icon, IconButton } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

import React from 'react';

const AddHabit: React.FC<{ onAdd: () => any }> = ({ onAdd }) => {
  return (
    <Box position={'absolute'} bottom={'32px'} right={'32px'}>
      <IconButton
        onPress={onAdd}
        icon={<Icon as={AntDesign} name="pluscircleo" />}
        borderRadius="full"
        _icon={{
          size: 'xl',
        }}
        _pressed={{
          _icon: {
            name: 'pluscircle',
          },
        }}
      />
    </Box>
  );
};

export default AddHabit;

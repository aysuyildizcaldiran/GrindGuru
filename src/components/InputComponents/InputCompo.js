import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {Input, Button, Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InputCompo = ({placeholder, width, inputRightIcon,type}) => {
    const [show, setShow] = useState(false);
  return (
    <Input
      placeholder={placeholder}
      width={width}
      alignSelf={'center'}
      borderRadius={15}
      marginHorizontal={10}
      marginBottom={5}
      type={ type ? (show ? 'text' : 'password') : 'string' }
      InputRightElement={
        inputRightIcon ? (
          <Button
            style={{backgroundColor: 'white'}}
            onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? 'visibility' : 'visibility-off'} />
              }
              size={6}
              mr="2"
              color="muted.400"
            />
          </Button>
        ) : (
          <></>
        )
      }
    />
  );
};

export default InputCompo;

const styles = StyleSheet.create({});

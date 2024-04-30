import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button } from 'native-base'

const ButtonCompo = ({variant,marginHorizontal,text,left}) => {
  return (
    <Button
        size="sm"
        variant={variant}
        colorScheme="secondary"
        left={left}
        marginHorizontal={marginHorizontal}>
        {text}
      </Button>
  )
}

export default ButtonCompo

const styles = StyleSheet.create({})
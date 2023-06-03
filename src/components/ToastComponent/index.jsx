import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Toast = ({ message, duration = 3000, onToastHidden }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onToastHidden?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onToastHidden]);

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  message: {
    color: 'black',
    fontSize: 16,
  },
});

export default Toast;

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface Props {
  onSubmit: (data: { amount: string; address: string }) => void;
}

const ExchangeForm: React.FC<Props> = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Wallet Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Exchange" onPress={() => onSubmit({ amount, address })} />
    </View>
  );
};

export default ExchangeForm;

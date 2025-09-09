import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
  currencies: string[];
  onSelect: (currency: string) => void;
}

const CurrencySelector: React.FC<Props> = ({ currencies, onSelect }) => {
  return (
    <View>
      {currencies.map((currency) => (
        <TouchableOpacity key={currency} onPress={() => onSelect(currency)}>
          <Text>{currency}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CurrencySelector;

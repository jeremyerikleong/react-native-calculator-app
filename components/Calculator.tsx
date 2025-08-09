import { COLORS, SIZES } from '@/constants/Theme';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './Button';

export default function Calculator() {
    const [firstValue, setFirstValue] = useState('');
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState('');

    function handleNumberInput(num: string) {
        if (displayValue === '0') {
            setDisplayValue(num);
            if (num === '00') {
                setDisplayValue('0');
            }
        } else {
            setDisplayValue(displayValue + num);
        }
    }

    function handleOperatorInput(operator: string) {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    }

    function handleCalculation() {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);

        switch (operator) {
            case '+':
                return setDisplayValue((num1 + num2).toString());
            case '-':
                return setDisplayValue((num1 - num2).toString());
            case 'x':
                return setDisplayValue((num1 * num2).toString());
            case '÷':
                return setDisplayValue((num1 / num2).toString());
            case '%':
                return setDisplayValue(((num2 / 100) * num1).toString());
            default:
                break;;
        }

        setOperator('');
        setFirstValue('');
    }

    function handleAllClear() {
        setDisplayValue('0')
        setOperator('');
        setFirstValue('');
    }

    function handleDelete() {
        if (displayValue.length === 1) {
            return setDisplayValue('0');
        }
        setDisplayValue(displayValue.slice(0, -1));
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.displayContainer}>
                <Text style={styles.previewAmount}>{firstValue + operator}</Text>
                <Text style={styles.currentAmount}>{displayValue}</Text>
            </View>
            <View style={styles.keypadContainer}>
                {
                    displayValue === '0' ? <Button text={'AC'} color={'btnPrimary'} onPress={handleAllClear} />
                        : <Button text="⌫" color={'btnPrimary'} onPress={handleDelete} />
                }
                <Button text={'+/-'} color={'btnPrimary'} />
                <Button text={'%'} color={'btnPrimary'} onPress={() => handleOperatorInput('%')} />
                <Button text={'÷'} color={'btnOperator'} onPress={() => handleOperatorInput('÷')} />

                <Button text={'7'} color={'btnSecondary'} onPress={() => handleNumberInput('7')} />
                <Button text={'8'} color={'btnSecondary'} onPress={() => handleNumberInput('8')} />
                <Button text={'9'} color={'btnSecondary'} onPress={() => handleNumberInput('9')} />
                <Button text={'x'} color={'btnOperator'} onPress={() => handleOperatorInput('x')} />

                <Button text={'4'} color={'btnSecondary'} onPress={() => handleNumberInput('4')} />
                <Button text={'5'} color={'btnSecondary'} onPress={() => handleNumberInput('5')} />
                <Button text={'6'} color={'btnSecondary'} onPress={() => handleNumberInput('6')} />
                <Button text={'-'} color={'btnOperator'} onPress={() => handleOperatorInput('-')} />

                <Button text={'1'} color={'btnSecondary'} onPress={() => handleNumberInput('1')} />
                <Button text={'2'} color={'btnSecondary'} onPress={() => handleNumberInput('2')} />
                <Button text={'3'} color={'btnSecondary'} onPress={() => handleNumberInput('3')} />
                <Button text={'+'} color={'btnOperator'} onPress={() => handleOperatorInput('+')} />

                <Button text={'0'} color={'btnSecondary'} onPress={() => handleNumberInput('0')} />
                <Button text={'00'} color={'btnSecondary'} onPress={() => handleNumberInput('00')} />
                <Button text={'.'} color={'btnSecondary'} onPress={() => handleNumberInput('.')} />
                <Button text={'='} color={'btnOperator'} onPress={() => handleCalculation()} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    displayContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingVertical: SIZES.large,
        paddingHorizontal: SIZES.xxLarge,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    previewAmount: {
        color: COLORS.previewText,
        fontSize: SIZES.large,
    },
    currentAmount: {
        color: COLORS.defaultText,
        fontSize: SIZES.large * 2,
    },
    keypadContainer: {
        flex: 2,
        backgroundColor: COLORS.background,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        gap: SIZES.medium,
        padding: SIZES.large
    }
})
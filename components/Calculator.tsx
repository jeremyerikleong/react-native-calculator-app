import { COLORS, SIZES } from '@/constants/Theme';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './Button';

export default function Calculator() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.displayContainer}>
                <Text style={styles.previewAmount}>Preview Display</Text>
                <Text style={styles.currentAmount}>Current Display</Text>
            </View>
            <View style={styles.keypadContainer}>
                <Button text={'AC'} color={'btnPrimary'} />
                <Button text={'+/-'} color={'btnPrimary'} />
                <Button text={'%'} color={'btnPrimary'} />
                <Button text={'÷'} color={'btnOperator'} />

                <Button text={'7'} color={'btnSecondary'} />
                <Button text={'8'} color={'btnSecondary'} />
                <Button text={'9'} color={'btnSecondary'} />
                <Button text={'x'} color={'btnOperator'} />

                <Button text={'4'} color={'btnSecondary'} />
                <Button text={'5'} color={'btnSecondary'} />
                <Button text={'6'} color={'btnSecondary'} />
                <Button text={'-'} color={'btnOperator'} />

                <Button text={'1'} color={'btnSecondary'} />
                <Button text={'2'} color={'btnSecondary'} />
                <Button text={'3'} color={'btnSecondary'} />
                <Button text={'+'} color={'btnOperator'} />

                <Button text={'0'} color={'btnSecondary'} />
                <Button text={'00'} color={'btnSecondary'} />
                <Button text={'.'} color={'btnSecondary'} />
                <Button text={'='} color={'btnOperator'} />
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
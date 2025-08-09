import { COLORS, SIZES } from '@/constants/Theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ text, color, onPress }: { text: string, color: "btnPrimary" | "btnSecondary" | "btnOperator", onPress: Function }) {
    return (
        <TouchableOpacity
            style={[styles.btn,
            { backgroundColor: color === 'btnPrimary' ? COLORS.btnPrimary : color === 'btnSecondary' ? COLORS.btnSecondary : COLORS.btnOperator }]}
            onPress={onPress}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: SIZES.small * 6,
        height: SIZES.small * 6,
        borderRadius: '50%',
        padding: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: SIZES.xxLarge,
        color: COLORS.defaultText
    }
})
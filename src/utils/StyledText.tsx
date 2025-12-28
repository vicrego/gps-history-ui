import { Text, StyleSheet, TextProps } from 'react-native';

interface AppTextProps extends TextProps {
  variant?: 'title' | 'body';
}

export const StyledText = ({ variant = 'body', style, ...props }: AppTextProps) => {
  const textStyle = variant === 'title' ? styles.title : styles.body;
  return <Text {...props} style={[textStyle, style]} />;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'OldEnglish-Bold',
    fontSize: 24,
    color: '#F5F5F5', // Off-white "stone" color
  },
  body: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#E0E0E0',
  },
});
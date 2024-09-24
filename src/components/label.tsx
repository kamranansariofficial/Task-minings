import React from 'react';
import { alpha, styled, useTheme } from '@mui/material/styles';

interface LabelProps {
  className?: string;
  sx?: any;
  children?: React.ReactNode;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  variant?: 'filled' | 'outlined' | 'ghost';
}

const RootStyle: any = styled('span')(
  ({ theme, ownerState }: { theme: any; ownerState: any }) => {
    const isLight = theme.palette.mode === 'light';
    const { color, variant } = ownerState;

    const styleFilled = (color: string) => ({
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
    });

    const styleOutlined = (color: string) => ({
      color: theme.palette[color].main,
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette[color].main}`,
    });

    const styleGhost = (color: string) => ({
      color: theme.palette[color][isLight ? 'main' : 'light'],
      backgroundColor: alpha(theme.palette[color].main, 0.16),
    });

    return {
      height: 36,
      minWidth: 66,
      lineHeight: 0,
      borderRadius: 8,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 1),
      color: theme.palette.grey[800],
      fontSize: theme.typography.pxToRem(14),
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.grey[300],
      fontWeight: 600,
      textTransform: 'capitalize',

      ...(color !== 'default'
        ? {
            ...(variant === 'filled' && { ...styleFilled(color) }),
            ...(variant === 'outlined' && { ...styleOutlined(color) }),
            ...(variant === 'ghost' && { ...styleGhost(color) }),
          }
        : {
            ...(variant === 'outlined' && {
              backgroundColor: 'transparent',
              color: theme.palette.text.primary,
              border: `1px solid ${theme.palette.grey[500_32]}`,
            }),
            ...(variant === 'ghost' && {
              color: isLight
                ? theme.palette.text.secondary
                : theme.palette.common.white,
              backgroundColor: theme.palette.grey[500_16],
            }),
          }),
    };
  }
);

const Label: React.FC<LabelProps> = ({
  color = 'default',
  variant = 'ghost',
  children,
  ...other
}) => {
  return (
    <RootStyle
      ownerState={{ color, variant }}
      {...other}>
      {children}
    </RootStyle>
  );
};

export default Label;

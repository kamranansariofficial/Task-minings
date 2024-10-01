export default function Button(theme: any) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'capitalize',
          borderRadius: '12px', // Add border-radius for all buttons
          '&:hover': {
            boxShadow: 'none',
          },
          '&.MuiButton-sizeMedium': {
            height: 40,
          },
          '&.MuiButton-sizeSmall': {
            height: 32,
          },
        },
        sizeLarge: {
          height: 48,
          borderRadius: '12px', // Add border-radius for large button size
        },
        containedInherit: {
          color: theme.palette.grey[800],
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
          borderRadius: '12px', // Add border-radius for contained buttons
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          borderRadius: '12px', // Add border-radius for outlined buttons
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          borderRadius: '12px', // Add border-radius for text buttons
        },
      },
    },
  };
}

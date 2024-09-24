import PropTypes from 'prop-types';

// material
import { TableRow, TableCell, TableHead } from '@mui/material';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// ----------------------------------------------------------------------

ProductListHead.propTypes = {
  headData: PropTypes.array,
};

export default function ProductListHead({ ...props }) {
  const { headData } = props;
  return (
    <TableHead>
      <TableRow>
        {headData.map((headCell: any) => (
          <TableCell
            key={Math.random()}
            align={headCell.alignRight ? 'right' : 'left'}
            sx={{
              color: 'text.secondary',
              bgcolor: 'transparent',
              fontFamily: montserrat.style.fontFamily + '!important',
            }}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

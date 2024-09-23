import PropTypes from 'prop-types';
// material
import { TableRow, TableCell, TableHead } from '@mui/material';

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
            }}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

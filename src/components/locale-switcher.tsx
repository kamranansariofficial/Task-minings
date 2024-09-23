'use client';
import { usePathname, useRouter } from 'next/navigation';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Flag from 'react-world-flags'; // for displaying country flags
import Image from 'next/image'; // Use Image for SVG
import ArrowDropDownIcon from '../../public/static/icons/Vector.svg'; // Custom SVG icon
import { Box } from '@mui/material';

interface LangProps {
  name: string;
  code: string;
  flagCode: string; // Add flagCode for country flags
}

const languages: LangProps[] = [
  {
    name: 'English',
    code: 'en',
    flagCode: 'GB', // UK flag
  },
  {
    name: 'German',
    code: 'de',
    flagCode: 'DE', // Germany flag
  },
  {
    name: 'Czech',
    code: 'cs',
    flagCode: 'CZ', // Czech Republic flag
  },
  {
    name: 'Arabic',
    code: 'ar',
    flagCode: 'SA', // Saudi Arabia flag
  },
];

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = event.target.value;
    router.push(segments.join('/'));
  };

  return (
    <FormControl>
      <Select
        size='small'
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={pathName?.split('/')[1]}
        onChange={handleChange}
        IconComponent={() => (
          <Box
            sx={{
              position: 'absolute',
              top: '20%',
              right: 10,
              transform: 'translateX(-50%)',
            }}>
            <ArrowDropDownIcon />
          </Box>
        )} // Custom select icon using Image
        sx={{
          border: 'none', // Removes the border
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none', // Removes the outlined border
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none', // Removes border on hover
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // Centers the content, including the icon
        }}
        renderValue={(value) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Display selected flag */}
            <Flag
              code={languages.find((lang) => lang.code === value)?.flagCode}
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
                borderRadius: '20px',
                objectFit: 'cover',
              }}
            />
            {languages.find((lang) => lang.code === value)?.name}
          </div>
        )}>
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            value={lang.code}>
            {/* Render each flag next to the language name */}
            <Flag
              code={lang.flagCode}
              style={{ width: 20, marginRight: 10 }}
            />
            {lang.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

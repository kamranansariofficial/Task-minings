import * as React from 'react';
import Container from '@mui/material/Container';
import { Locale } from 'i18n-config';

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return <Container fixed>sd</Container>;
}

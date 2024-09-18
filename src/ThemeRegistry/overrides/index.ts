import { merge } from 'lodash';
import Card from './card';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: any) {
  return merge(Card(theme));
}

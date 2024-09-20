import { merge } from 'lodash';
import Card from './card';
import Button from './button';
import Input from './input';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: any) {
  return merge(Card(theme), Button(theme), Input(theme));
}

import * as React from 'react';
import { Box, Disclosure, LayoutSet, Button, Set } from '../../';

export default { title: 'Disclosure' };

export function _default() {
  const disclosure = Disclosure.useState({ visible: true });

  return (
    <div>
      <Disclosure {...disclosure}>Toggle</Disclosure>
      <Disclosure.Region {...disclosure}>Hello world</Disclosure.Region>
    </div>
  );
}

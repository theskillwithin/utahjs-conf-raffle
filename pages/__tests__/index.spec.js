import React from 'react'
import { render } from '@testing-library/react'

import Index from '../index'

test('menu exists', () => {
  const { getByText } = render(<Index />)
  expect(getByText(/Theater/))
})

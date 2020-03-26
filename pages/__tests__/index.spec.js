import React from 'react'
import { render } from '@testing-library/react'
import { theaters } from 'definitions/theater'

import Index from '../index'

test('menu exists', () => {
  const { getByText } = render(<Index />)
  theaters.forEach(theater => {
    expect(getByText(`Theater ${theater}`))
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import { theaters } from 'definitions/theater'

import Index from 'pages/index'

test('menu exists', () => {
  render(<Index />)
  theaters.forEach(theater => {
    expect(screen.getByText(`Theater ${theater}`))
  })
})

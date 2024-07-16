import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'
import React from 'react'

describe('Button component', () => {
    test('Test render', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('Test theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})
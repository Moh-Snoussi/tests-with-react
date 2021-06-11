import '@testing-library/jest-dom';
import React from 'react';
import {render, screen, fireEvent, RenderResult} from '@testing-library/react';
import Gesetz from "../Gesetz";

describe('test Gesetz component', () => {
    let gesetzEl : RenderResult

    beforeEach(() => {
        gesetzEl = render(<Gesetz staat={'Berlin'} gesetz={'you should never lie'}/>)
    })

    it('should show correct title', async () => {
        await gesetzEl.findByText('Berlin')
    })
    it('should show correct gesetz', async () => {
        await gesetzEl.findByText('you should never lie')
    })

    it('counter should start with 0', async () => {
        const counterEl = await gesetzEl.findByTestId('counter')
        expect(parseInt(counterEl.innerHTML)).toBe(0)
    })

    it('counter should increment when clicking on vote up', async () => {
        const voteUpEl = await gesetzEl.findByTestId('voteUp')
        fireEvent.click(voteUpEl)

        const counterEl = await gesetzEl.findByTestId('counter')
        expect(parseInt(counterEl.innerHTML)).toBe(1)
    })

    it('counter should decrement when clicking on vote down', async () => {
        const voteDownEl = await gesetzEl.findByTestId('voteDown')
        fireEvent.click(voteDownEl)

        const counterEl = await gesetzEl.findByTestId('counter')
        expect(parseInt(counterEl.innerHTML)).toBe(-1)
    })


})
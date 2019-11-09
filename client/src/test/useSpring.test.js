import React from 'react'
import ReactDOM from 'react-dom'

import {PlayersList} from '../hooks/useSpring'

test('it returns a loading prompt wwhen no props come down from <Fetch/>',()=>{
    const container =document.createElement('div')
    ReactDOM.render(<PlayersList cards={[]}/>, container)
    expect(container.textContent).toBe("loading...")
})
test('it returns a loading prompt when props.cards is passed down as null',()=>{
    const container =document.createElement('div')
    ReactDOM.render(<PlayersList cards={[]}/>, container)
    expect(container.textContent).toBe("loading...")
})

test('it returns a list of futbol players when props.cards contains data',()=>{
    const container =document.createElement('div')
    ReactDOM.render(<PlayersList cards={[!null]}/>, container)
    expect(container.innerHTML).not.toBe('<div class=\"container\"><div class=\"row\"><div>loading...</div></div></div>')
})

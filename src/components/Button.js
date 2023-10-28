import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button `
color: ${props => props.color || 'red'}
`
const Button = (props) => {
    return <StyledButton {...props} />
};

export default Button;
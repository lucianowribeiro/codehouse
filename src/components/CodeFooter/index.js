import styled from 'styled-components'
import CodeLogo from '../CodeLogo'
const CodeFooter = styled.footer`   
    text-align:center;
    padding: var(--padding-bar);
    font-size: 12rem;
    font-weight: normal; 
    background-color: var(--color-bar);
    color: white;
    border-top: 2px solid var(--color-primary)
    &> ${CodeLogo}{
        margin-bottom: 4rem;
    }
`
export default CodeFooter
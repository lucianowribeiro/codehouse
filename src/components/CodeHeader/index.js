import styled from 'styled-components'
import CodeButton from '../CodeButton'

const CodeHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: var(--padding-bar);
    background-color: var(--color-bar);
    border-bottom: 2px solid var(--color-primary); 
    @media (max-width:500px){
            justify-content: center;        
       & > ${CodeButton}{
            background-color: var(--color-primary);
            color: var(--color-header);
            border-radius: 0;   
            border: 0;
            position:fixed;
            bottom: 0;
            left:0;
            width: 100vw;
            height: 8vh;
        }
    }
`
export default CodeHeader
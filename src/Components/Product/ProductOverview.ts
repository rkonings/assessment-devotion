import styled from 'styled-components';
import ProductTile from './ProductTile';

export default styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    align-items: flex-start;

    ${ProductTile} {
        width: 32%;
        margin: 0 0.5%;
        box-sizing: border-box;
    }

    @media screen and (max-width: 768px) {
        ${ProductTile} {
            width: 46%;
            margin: 0 2%;
            box-sizing: border-box;
        }
    }
`;

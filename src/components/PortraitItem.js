import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";

class PortraitItem extends React.Component {
    render() {
        const { item } = this.props;

        return (
            <div className="item" css={PortraitItemStyles}>
                <Link to={`/details/${item.id}`}>
                    <Image src={item.images.artwork} />
                </Link>
            </div>
        );
    }
}

export default PortraitItem;

const PortraitItemStyles = css`
    &.item {
        width: 100%;
        border: 5px solid;
        border-color: blue;
        &:hover {
            border-color: yellow;
        }
        a {
            display: flex;
        }
        img {
            min-width: 100%;
            max-width: 100%;
        }
    }
`;
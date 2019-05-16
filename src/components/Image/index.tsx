import * as React from 'react';
import { css } from 'emotion';

interface IProps {
    /**
     * 图片地址
     */
    source: string;
    /**
     * 图片宽度
     */
    width?: number;
    /**
     * 图片高度
     */
    height?: number;
}

const ImageStyle = css`
    border-radius: 10px;
`

export class Image extends React.Component<IProps> {
    render() {
        const {
            width = 400,
            height = 400,
            source,
        } = this.props;

        return (
            <div className="c-img">
                <img
                    className={ImageStyle}
                    src={source}
                    width={width}
                    height={height}
                />
            </div>
        )
    }
}
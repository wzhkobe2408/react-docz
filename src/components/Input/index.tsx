import * as React from 'react';
import { css } from "emotion";

const inputStyle = css`
    outline: none;
    border: 1px solid #aaa;
    border-radius: 4px;
    width: 100%;
    padding: 5px 10px;
`

export interface IProps {
    /**
     * 默认占位文字
     */
    placeholder: string;
    /**
     * 输入控件类型
     */
    type: 'password' | 'email' | 'radio' | 'checkbox';
    /**
     * 宽度
     */
    width: number;
    /**
     * 高度
     */
    height: number;
    /**
     * 点击回调函数
     */
    handleKeyUp?: () => void;
}

export const Input:React.SFC<IProps> = ({
    placeholder,
    type,
    height,
}) => {
    return (
        <div className="c-input-wrapper">
            <input
                autoComplete="off"
                className={inputStyle}
                placeholder={placeholder}
                type={type}
                height={height}
            />
        </div>
    )
};
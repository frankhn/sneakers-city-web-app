import React, { Fragment } from 'react';
import './index.scss';


export interface buttonProps {
    class_?: string
    clicked?: any
    value: string
    id?:string
    key?: any
    focusOut?: any
    disabled?: boolean
    type?: "submit" | "reset" | "button"
}

const button = ({id, key,type, clicked, class_, value, focusOut, disabled }: buttonProps) => (
    <Fragment>
        <button
            id={id}
            key={key}
            type={type}
            className={class_}
            onClick={clicked}
            onBlur={focusOut}
            disabled={disabled}>
            {value}
        </button>
        <style jsx scoped>
            {`
                button:disabled {
                    color: #ccc;
                    cursor: not-allowed;
                }
                .__logout {
                    color: #fff;
                    font-weight: 500;
                    background: #236b06;
                    padding: 0 0.5rem;
                    border-radius: 0.2rem;
                    font-size: .9rem;
                }
            `}
        </style>
    </Fragment>
);

export default button;

import React from 'react';
import classNames from 'classnames';

import './_button.scss';

// btn type: alpha, success,warning,danger, link, link-success, link-warning, link-danger, primary, action, action-success, action-warning, action-danger
// rounded: true / false 
// icon: true / false
//  split: true / false 
const Button = ({children, active, disabled, icon, round, size, type, dropdownToggle, split}) => {

    const styles = () => {
        return classNames(
            "btn",
            type,
            round && "round",
            icon && "icon",
            active && "active",
            size,
            dropdownToggle && "dropdown_toggle",
            split && "split"
            
        );
    }

    return <button className={styles()} disabled={disabled}>
        {children}
    </button>

    }
    
    export default Button;
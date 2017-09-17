import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Tab = ({ title, selected, onClickTab }) => {
    const cls = cx('tab',{ selected });
    return (
        <button className={cls} onClick={onClickTab}>{title}</button>
    )
};

Tab.propTypes = {
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onClickTab: PropTypes.func
};

Tab.defaultProps = {
    selected: false
}

export default Tab;
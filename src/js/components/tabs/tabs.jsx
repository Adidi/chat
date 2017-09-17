import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ selectedId, onClickTab, children }) => {
    let content = null;
    const tabs = Children.map(children, tab => {
            const selected = selectedId === tab.props.id;
            if (selected) {
                content = tab.props.children;
            }

            return cloneElement(tab,{
                    selected,
                    onClickTab: e => {
                        onClickTab(e, tab.props.id);
                    },
                }
            );
        });

    return (
        <div className="tabs" >
            <div className="tabs-panel">
                {tabs}
            </div>
            <div className="chats-panel">
                {content}
            </div>
        </div>
    );
};

Tabs.propTypes = {
    selectedId: PropTypes.string.isRequired,
    onClickTab: PropTypes.func.isRequired
};

export default Tabs;

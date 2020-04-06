import React from 'react';
import ComponentPropsError from '../component-props-error/ComponentsPropsError';
import './style.scss';

const SearchDropDown = ({ searchItems, defaultText, getSearchSelected, defaultSelectValue, isShowDefaults }) => {
    const isSearchItems = searchItems || searchItems.length;
    const defaultSelectDropdownValue = defaultSelectValue || 'default';
    const isSearchSelected = getSearchSelected || typeof getSearchSelected === 'function';
    const isPropsInvalid =  !defaultText && !isSearchItems && !isSearchSelected;
    const propsError = {
        header: 'Somethings wrong!',
        message: 'Please provide searchItems and defaultText'
    };
    
    if(isPropsInvalid) {
        return <ComponentPropsError header={propsError.header} message={propsError.message} />;
    }

    const selectItems = searchItems.map((data, key) => {
        return <option key={key} value={data.value}>{data.name}</option>;
    });
    return(
        <div className="select search-drop-down-container" >
            <select name="slct" id="slct" defaultValue={defaultSelectDropdownValue} onChange={e => getSearchSelected(e.target.value)}>
                { isShowDefaults && <option value="default" disabled>{defaultText}</option> }
                {selectItems}
            </select>
        </div>
    );
};

export default SearchDropDown;
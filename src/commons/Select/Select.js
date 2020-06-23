import React from 'react';

const Select = (props) => {
  const { info, name, onChange, value, className } = props;
  const { data, loading } = info;
  const createOptions = () => {
    const options = data.items.map((value, index) => {
      return (
        <option value={index} key={value.id}>{value.name}</option>
      );
    });
    return options;
  }

  return (
    <select disabled={loading || data.totalItems === 0} name={name} key={name} onChange={onChange} value={value} className={className}>
      {loading || value !== '' ? '' : <option value='' key='default'>Select one</option>}
      {createOptions()}
    </select>
  );
}

export default Select;

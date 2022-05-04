import React from 'react';

const CategoryList = (props) => {
  return (
    <div>
        <p>
            { props.categories.length } categories
        </p>
        { props.categories.map((c) => <p key={ c.id }>{ c.name }<img src={ c.icon } ></img></p>)}
    </div>
  );
}

export default CategoryList
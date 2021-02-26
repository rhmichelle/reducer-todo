import React from 'react';

const Form = () => {
    return(
        <form>
            <label htmlFor='title'>Title</label>
            <input
                id='title'
                type='text'
                placeholder='Enter Title of Task'
                // onChange={handleChanges}
            />
        </form>
    );
}

export default Form;
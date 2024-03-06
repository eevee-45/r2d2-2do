import { Checkbox } from '@nextui-org/react';
import { useState } from 'react';

export default function Task(props: object) {
  const [isChecked, setChecked] = useState(props.taskData && props.taskData.done);
  /*
  taskData = {
    id: asdf;sdjbadsf
    content: 'go to store',
    done: false
  }
   */
  // props.taskData.content = 'i am content';
  // let isChecked = props.taskData && props.taskData.done;

  const toggleCheckbox = () => {
    // element.checked = !element.checked;
    setChecked(!isChecked);
    // also, make request to db
      // put reqest to endpoint, current tasks' done
  }

  //flex max-w-20 max-h-10 p-15
  // {/* <Checkbox checked={isChecked} size='sm' color='success' className='mr-2'>
  //   <span className='text-sm'>{props.taskData.content}</span>
  // </Checkbox> */}
  return (
    <div className='form-control'>
      <label className='cursor-pointer label'>
        <span className='label-text text-primary'>{props.taskData.content}</span>
        <input
          type='checkbox'
          checked={isChecked}
          className='checkbox checkbox-warning'
          onChange={toggleCheckbox}
        />
      </label>
    </div>
  );
}

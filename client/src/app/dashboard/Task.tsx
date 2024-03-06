import { Checkbox } from '@nextui-org/react';

export default function Task(props: object) {
  /*
  taskData = {
    id: asdf;sdjbadsf
    content: 'go to store',
    done: false
  }
   */
  // props.taskData.content = 'i am content';
  const isChecked = props.taskData && props.taskData.done;
  //flex max-w-20 max-h-10 p-15
  return (
    <div className='flex items-center mb-2 h-10 px-2 py-1 border border-gray-300 rounded-lg shadow-md'>
      <Checkbox checked={isChecked} size='sm' color='success' className='mr-2'>
        <span className='text-sm'>{props.taskData.content}</span>
      </Checkbox>
    </div>
  );
}

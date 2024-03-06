import Task from "./Task";

export default function Checklist(props: object) {
  const tasks: React.ReactElement[] = [];
  props.checklistData.tasks.forEach(el => tasks.push(<Task taskData={el} />))
  const addTask = () => {
    const newFeedData = {...props.feedData};
    newFeedData.checklists.tasks.push({
      content: 'new content',
      done: 'false'
    })
    props.setFeedData({...newFeedData});
  }
  return (
    <div className='flex flex-col p-10'>i am checklist
      {...tasks}
      <button className='btn btn-secondary w-15' onClick={addTask}>+ Star Wars: A New Task</button>
    </div>
  );
}
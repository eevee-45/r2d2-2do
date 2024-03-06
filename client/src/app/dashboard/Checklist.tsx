import Task from "./Task";

export default function Checklist(props: object) {
  const tasks: React.ReactElement[] = [];
  props.checklistData.tasks.forEach(el => tasks.push(<Task taskData={el} />))
  return (
    <div className='flex flex-col p-10'>i am checklist
      {...tasks}
      <button className='btn btn-secondary w-15'>+ Star Wars: A New Task</button>
    </div>
  );
}
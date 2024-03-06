import Checklist from './Checklist';

export default function Feed(props: object) {
  const checklists: React.ReactElement[] = [];
  console.log('feedData', props.feedData);
  props.feedData.checklists.forEach((el) => checklists.push(<Checklist checklistData={el} />))
  
  return (
    <div>
      <div>i am feed</div> {...checklists}
    </div>
  );
}
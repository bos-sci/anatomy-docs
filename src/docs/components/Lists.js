import './Lists.scss';

const Lists = props => {
  const Heading = props.headingLevel || 'h3';
  return (
    <div className="component-lists">
      {Object.keys(props.lists).map(listName =>
        <div key={`${props.name}${listName}`} className="component-list-block">
          <Heading>{listName}</Heading>
          <ul>
            {props.lists[listName].map((item, i) => <li key={`${props.name}${listName}${i}`}>{item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Lists;
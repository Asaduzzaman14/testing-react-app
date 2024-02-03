
const FullList = ({ fruits }: { fruits: string[]; }) => {
  return (
    <div>
      <p>fruit list</p>

      <ul>
        {
          fruits.map((fruit, i) => {
            return <li key={i}>{fruit}</li>;
          })
        }
      </ul>

    </div>
  );
};

export default FullList;
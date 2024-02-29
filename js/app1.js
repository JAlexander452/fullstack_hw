class ParentComponent extends React.Component {
render(){
        return (
</div>
export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
</div>
  );
}

        );
    }
}

class ChildComponent extends React.Component {
    render() {
        return (
            <div className='ui centered card'>
                <div className='field'>
                    <label>ChildComponent</label>
                </div>
                <button className='ui basic red button'>
                    Submit!
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <ParentComponent />,
    document.getElementById("content")
);


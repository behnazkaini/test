import React from "react";
import "./App.css";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Header, Icon, List } from "semantic-ui-react";

function App() {
  const [values, setValues] = React.useState<[]>([]);
  React.useEffect(() => {
    axios.get("http://localhost:5000/api/values").then((response: any) => {
      setValues(response.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>test</Header.Content>
      </Header>
      {values.length && (
        <List>
          {values.map((i: any) => (
            <List.Item key={i.id}>{i.name}</List.Item>
          ))}
        </List>
      )}
    </div>
  );
}

export default App;

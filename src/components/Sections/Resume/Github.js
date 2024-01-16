import React from 'react';
import {Row} from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';

function Github() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
      <GitHubCalendar blockMargin={5} blockSize={20} colorScheme="dark" fontSize={16} username="fazaljoyia" />
    </Row>
  );
}

export default Github;

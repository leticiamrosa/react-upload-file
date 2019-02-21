import React, { Component } from 'react';
import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload/index';
import FileList from './components/FileList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state({
      uploadedFiles: [],
    });
  }

  async componentDidMount() {
    const response = await api.get('post');

    this.setState({
      uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url,
      }))  
    });
  }

  handleUpload = (files) => {
    const uploadedFiles = files.map(file => ({
      file,
      id:uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

      this.setState({ 
        uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
      });

      uploadedFiles.forEach(this.processUpload);
  }


  render() {
    return (
      <Container>
        <Content>
          <Upload/>
        </Content>
        <GlobalStyle/>
      </Container>
    );
  }
}

export default App;

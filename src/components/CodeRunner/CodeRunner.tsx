// components/CodeRunner.tsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const CodeRunner: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState<string>('python3');
  const [output, setOutput] = useState<string>('');

  const handleRunCode = async () => {
    try {
      const response = await axios.post('https://api.jdoodle.com/v1/execute', {
        script: code,
        language: language,
        versionIndex: '3',
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
      });

      setOutput(response.data.output);
    } catch (error) {
      console.error(error);
      setOutput('Erro ao executar o código.');
    }
  };

  return (
    <Box sx={{ p: 8, display: 'flex', flexDirection: 'column', alignItems: 'left', padding: '0 5rem', marginTop: '4rem' }}>
      <FormControl variant="outlined" sx={{ mb: 2, minWidth: 120 }}>
        <InputLabel>Linguagem</InputLabel>
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value as string)}
          label="Linguagem"
        >
          <MenuItem value="python3">Python 3</MenuItem>
          <MenuItem value="javascript">JavaScript</MenuItem>
          <MenuItem value="java">Java</MenuItem>
          <MenuItem value="c">C</MenuItem>
          <MenuItem value="cpp">C++</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', height: 'auto' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '295px' }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Entrada:</Typography>
          <Box sx={{ flex: 1 }}>
            <TextField
              label=""
              multiline
              variant="outlined"
              fullWidth
              rows={10} // Defina o número de linhas
              value={code}
              onChange={(e) => setCode(e.target.value)}
              sx={{ color: 'white', background: '#333333', height: '100%' }}
              InputProps={{
                sx: {
                  color: 'white',
                }
              }}
              InputLabelProps={{
                sx: {
                  color: 'white',
                }
              }}
            />
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '300px' }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Saída:</Typography>
          <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1, overflow: 'auto', height: '100%', background: '#333333' }}>
            <Typography variant="body1" component="pre" sx={{ whiteSpace: 'pre-wrap', color: 'white' }}>
              {output}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button variant="contained" color="primary" onClick={handleRunCode} sx={{ mt: 1, alignSelf: 'center' }}>
        Executar
      </Button>
    </Box>
  );
};

export default CodeRunner;

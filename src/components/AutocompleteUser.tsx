
import React from 'react';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import type { User } from '../types/user';
import { formatAndSortUsersByName } from '../utils';


export default function AutocompleteUser({ onUserSelect }: { onUserSelect: (user: User | null) => void }) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(false);

  

  const handleOpen = () => {
    setOpen(true);
    (async () => {
      setLoading(true);
      setLoading(false);
    if(options.length === 0) {
      const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setOptions(formatAndSortUsersByName(data));
      };

      await fetchUsers();
      setLoading(false);
    }
  })();
  };

  

  return (
    <Autocomplete
      sx={{ width: 300 }}
      open={open}
      onOpen={handleOpen}
      onClose={() => setOpen(false)}
      onChange={(_, value) => onUserSelect(value)}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Name"
          slotProps={{
            ...params.slotProps,
            input: {
              ...params.slotProps.input,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.slotProps.input.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
    />
  );

}
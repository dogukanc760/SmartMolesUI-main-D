import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

//material
import { Stack, Button, Container, Typography, Box, Modal, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// component
import MuiTable from '../../../components/tables/Table';
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import { FormProvider } from '../../../components/hook-form';

//mock
import { columns } from '../../../mock/user/modemImeiRecords/modemImeiRecordsColumn';
import { options } from '../../../mock/MuiTableOptions';

//service
import ModemImeiRecordService from '../../../services/ModemImeiRecordsService';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModemImeiRecord = () => {
  const services = new ModemImeiRecordService();

  const [data, setData] = useState({
    GatewayID: '',
    UserID: '',
    ImeiNumber: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const modemImeiRecordData = {
      GatewayID: '',
      UserID: '',
      ImeiNumber: data.ImeiNumber,
    };

    await services.addModemImeiRecord(modemImeiRecordData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        getData();
        handleClose();
      }
    });
  };

  const [modemImeiRecord, setModemImeiRecord] = useState({});
  const [getId, setGetId] = useState({});
  const [handleResult, setResult] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getData = () => {
    services.getModemImeiRecord().then((result) => setModemImeiRecord(result.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Page title="Cihaz Türleri">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            Modem IMEI Kayıtları
          </Typography>
          <Button
            onClick={handleOpen}
            variant="contained"
            component={RouterLink}
            to=""
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Yeni Kayıt Ekle
          </Button>
        </Stack>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography textAlign={'center'} variant="subtitle1" gutterBottom component="div">
              Yeni Kayıt Ekle
            </Typography>
            <FormProvider onSubmit={(e) => onSubmit(e)}>
              <Stack spacing={3}>
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="ImeiNumber"
                  label="IMEI Numarası"
                  value={data.ImeiNumber}
                  onChange={handleChange}
                />
                <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
                  Kaydet
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Box>
        </Modal>
        <MuiTable title={'Modem IMEI Kayıtları'} data={modemImeiRecord.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default ModemImeiRecord;

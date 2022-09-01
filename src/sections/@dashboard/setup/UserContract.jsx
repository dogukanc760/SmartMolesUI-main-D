import React from 'react';
import { useEffect, useState } from 'react';

//material
import { Stack, TextField, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';
import SuccessAlert from '../../../components/alerts/Alerts';

//service
import InstallationService from '../../../services/InstallationService';
import ContractTypeService from '../../../services/ContractTypeService';

function UserContract({ setDisabled }) {
  const services = new InstallationService();
  const contractService = new ContractTypeService();

  const alertState = (title, description, descriptionStrong, severity, color) => {
    return (
      <SuccessAlert
        title={`${title}`}
        description={`${description}`}
        descriptionStrong={`${descriptionStrong}`}
        severity={`${severity}`}
        color={`${color}`}
      />
    );
  };

  const renderMenuItems = (data) => {
    const colorArr = ['#9b5de5', '#f15bb5', '#00BBF9'];

    let colorCounter = -1;
    return data.map((item, index) => {
      // if counter is over 2, resets to 0
      // for colorArr bracket notation to get sequence of colors
      colorCounter < 2 ? colorCounter++ : (colorCounter = 0);

      // dynamic styles for each menu item
      const itemStyle = {
        top: `${index * 1.8}em`,
        backgroundColor: colorArr[colorCounter],
      };

      return (
        <div
          className="m-item"
          key={item.contentId}
          //style={openMenu ? itemStyle : null}
          onClick={() => alert(item.name)}
        >
          {item.name}
        </div>
      );
    });
  };
  const [selectModel, setSelectModel] = useState([
    {
      name: '',
      title: '',
      subMainTitle: '',
    },
  ]);

  const [listData, setListData] = useState([]);

  const [data, setData] = useState({
    UserID: '',
    ContractID: '',
    ContractTypeID: '',
    ContractName: '',
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
    const userContractData = {
      UserID: data.UserID,
      ContractID: data.ContractID,
      ContractTypeID: data.ContractTypeID,
      ContractName: data.ContractName,
    };

    await services.addUserContract(userContractData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        setApiState(true);
        setDisabled(false);
        setTimeout(() => {
          setApiState(false);
        }, 999999);
      }
    });
  };

  const [handleResult, setResult] = useState({});
  const [apiState, setApiState] = useState(false);

  const getData = () => {
    contractService.getContractType().then((result) => {
      setListData(result.data);
      setSelectModel(result.data.data);
    });
    setListData(getData.data);
  };
  useEffect(() => {
    getData(listData);
    console.log('ssss', selectModel);
    selectModel.map((x) => {
      console.log(x);
    });
  }, []);

  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        {apiState
          ? alertState(
              'Başarılı!!!',
              'Yeni Sözleşme Oluşturma İşlemi Başarıyla Tamamlandı!',
              'Lütfen Sonraki Adıma Geçiniz!',
              'success',
              'success'
            )
          : ''}
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="UserID"
            label="Kullanıcı ID"
            value={data.UserID}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ContractID"
            label="Sözleşme ID"
            value={data.ContractID}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ContractName"
            label="Adı"
            value={data.ContractName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Sözleşme Seçiniz</InputLabel>
            <Select value={data.ContractTypeID} label="testt" onChange={handleChange}>
              {/* {selectModel.map((x) => {
                <MenuItem value={x.ContractID}>{x.ContractName}</MenuItem>;
              })} */}
              {renderMenuItems(selectModel)}
              {/* {listData.map((alldata) => {
                return(

                ) 
              })} */}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Stack mt={3}>
        <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
          Kaydet
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

export default UserContract;

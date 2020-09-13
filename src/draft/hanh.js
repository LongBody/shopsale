import React, { useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Router, Redirect } from "react-router-dom";
import swal from "sweetalert";
function Cart(props) {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const Checkbox = () => {
    if (value === "Hoàng Oanh") {
      swal("Chúc Mừng!", "Bạn đã trả lời Đúng", "success");
      // localStorage.setItem("hanh", JSON.stringify("sập"));
      setValue2(true)
    }
    else {
      swal("Sai", "Ngu lắm con ạ", "error");
    }
  }

  
  const Checkbox2 = async() => {
    if (value === "1997") {
    await  localStorage.setItem("hanh", JSON.stringify("sập"));
      swal("Chúc Mừng!", "Bạn đã trả lời Đúng", "success");
    }
    else {
      swal("Sai", "Ngu lắm con ạ", "error");
    }
  }


  return (
    <div >
      <Container className="paddingTopFixed">

        {value2 ? <FormControl component="fieldset">
          <FormLabel component="legend"><h2>Sinh Năm</h2></FormLabel>
          <img src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/52020755_1316426171829389_6735954230026174464_o.jpg?_nc_cat=109&_nc_sid=174925&_nc_ohc=nJtbDQWwJYYAX-ZDEe8&_nc_ht=scontent-hkt1-1.xx&oh=4b1b70b2d6802568f701700baa511763&oe=5F8462FA" style={{ width: 200 }} />
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="2000" control={<Radio style={{ marginBottom: 12 }} />} label="2000" />
            <FormControlLabel value="2002" control={<Radio style={{ marginBottom: 12 }} />} label="2002" />
            <FormControlLabel value="1996" control={<Radio style={{ marginBottom: 12 }} />} label="1996" />
            <FormControlLabel value="1997" control={<Radio style={{ marginBottom: 12 }} />} label="1997" />
          </RadioGroup>
          <Button variant="contained" color="primary" onClick={() => Checkbox2()}>Check</Button>
        </FormControl>


          : <FormControl component="fieldset">
            <FormLabel component="legend"><h2>Đây là ai</h2></FormLabel>
            <img src="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/118808251_1863412973797370_184637182881577989_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=LaNrlXycCZkAX-E3Dfw&_nc_ht=scontent.fhan3-2.fna&oh=680426d7d0f4bd581348d43fe93a6a3a&oe=5F82BF4C" style={{ width: 200 }} />
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="Hoàng An" control={<Radio style={{ marginBottom: 12 }} />} label="Hoàng An" />
              <FormControlLabel value="Hoàng Anh" control={<Radio style={{ marginBottom: 12 }} />} label="Hoàng Anh" />
              <FormControlLabel value="Hoàng Oanh" control={<Radio style={{ marginBottom: 12 }} />} label="Hoàng Oanh" />
              <FormControlLabel value="Hoà Oanh" control={<Radio style={{ marginBottom: 12 }} />} label="Hoà Oanh" />
            </RadioGroup>
            <Button variant="contained" color="primary" onClick={() => Checkbox()}>Check</Button>
          </FormControl>
        }
      </Container>

    </div>
  );
}


export default Cart

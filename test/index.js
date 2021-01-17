import axios from 'axios';

const testAuthReg = 'http://localhost:33133/api/auth/register';
const testBase = 'http://localhost:33133/';
const testAuthLogin = 'http://localhost:33133/api/auth/login';

let options = {
    method: 'post',
    url: testAuthLogin,
    data: {
        login: 'email@mail.ru',
        password: 'password',
    },
};

const Ax = (opt) =>
    axios(opt)
        .then((response) => {
            console.log(response.data);
            //   for(let prop in response)
            //     console.log(prop);
            return response;
        })
        .catch((error) => console.log(error));

Ax(options);

import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormCadastro from './components/FormCadastro';
import FormLogin from './components/FormLogin';

export default props => (
    <Router>
        <Stack key="root">
            <Scene key='formLogin' component={FormLogin} title='Login' initial />
            <Scene key='formCadastro' component={FormCadastro} title='Cadastro' />
        </Stack>
    </Router>
);
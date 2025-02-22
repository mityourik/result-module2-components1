import './App.module.scss';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { Header } from './components/Heading/Heading';
import { Subtitle } from './components/Subtitle/Subtitle';
import { ButtonsBlock } from './components/ButtonsBlock/ButtonsBlock';
import { List } from './components/List/List';

const App = () => {
    return (
        <>
            <Header />
            <Subtitle />
            <ErrorMessage />
            <ButtonsBlock />
            <List />
        </>
    );
};

export default App;

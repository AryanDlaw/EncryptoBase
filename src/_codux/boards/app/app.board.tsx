import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App key={null} />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 461,
    }
});

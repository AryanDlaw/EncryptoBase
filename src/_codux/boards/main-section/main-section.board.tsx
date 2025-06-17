import { createBoard } from '@wixc3/react-board';
import { MainSection } from '../../../components/main-section/main-section';

export default createBoard({
    name: 'MainSection',
    Board: () => <MainSection />,
    isSnippet: true,
    environmentProps: {
        canvasPadding: {
            right: 20,
            left: 20
        }
    }
});

import config from 'config';
import { server } from './configureServer';

const port = config.get('port');

(async () => {
    try {
        server.listen(port, () => console.log(`[SERVER]: Started on port ${port}!`));
    } catch (error) {
        console.log('[INIT ERROR]:', error);
    }
})();

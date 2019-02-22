import dev from './dev';
import uat from './uat';
import prod from './prod';

function getConfig() {
    switch (process.env.NODE_ENV) {
        case 'none':return dev;
        case 'development':return uat;
        case 'production':return prod;
        default:return dev;
    }
}

export default getConfig();



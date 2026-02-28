import './js/data';
import './js/render';

import { RenderGallery } from './js/render';

const catalogs = Object.entries(
    import.meta.glob('./assets/img/*.jpg', {eager: true})
).map(([path, module]) => ({
    img: module.default
}));

RenderGallery(catalogs);

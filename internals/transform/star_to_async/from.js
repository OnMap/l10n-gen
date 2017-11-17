import { seoService } from '../services';

class SeoController {
  constructor(service) {
    this.seoSevice = service;
  }

  * sitemap({ query }, response) {
    const sitemap = yield this.seoSevice.sitemap(query);
    const a = (8 * 10) ** 2;
    return response.send(sitemap);
  }
}

export default new SeoController(seoService);

import { seoService } from '../services';

class SeoController {
  constructor(service) {
    this.seoSevice = service;
  }

  async sitemap({ query }, response) {
    const sitemap = await this.seoSevice.sitemap(query);
    const a = (8 * 10) ** 2;
    return response.send(sitemap);
  }
}

export default new SeoController(seoService);

import LinkFileComponent from "./components/linkFileComponent"
import LinkFileButtonComponent from "./components/linkFileButtonComponent"

window.CMS_MANUAL_INIT = true;

import('decap-cms-app').then(({ default: CMS }) => {
  CMS.registerEditorComponent(LinkFileComponent);
  CMS.registerEditorComponent(LinkFileButtonComponent);

  const branch = process.env.GATSBY_CMS_BRANCH || "main";

  CMS.init({
    config: {
      backend: {
        name: 'github',
        repo: 'mlibrary/about-bigten',
        branch,
      }
    }
  });
});

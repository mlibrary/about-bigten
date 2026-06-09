import CMS from 'decap-cms-app';
import LinkFileComponent from "./components/linkFileComponent"
import LinkFileButtonComponent from "./components/linkFileButtonComponent"

CMS.registerEditorComponent(LinkFileComponent);
CMS.registerEditorComponent(LinkFileButtonComponent);


// https://github.com/netlify/netlify-cms/issues/1737 and HELIO-3241
window.CMS_MANUAL_INIT = true;
const branch = process.env.GATSBY_CMS_BRANCH || "main";

  CMS.init({
    config: {
      backend: {
        name: 'github',
        repo: 'mlibrary/about-bigten',
        branch,
      },
      media_folder: "static/assets",
      public_folder: "assets",
      public_folder_relative: false,
    }
  });

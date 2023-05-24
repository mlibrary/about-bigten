import CMS from 'netlify-cms-app';
import LinkFileComponent from "./components/linkFileComponent"
import LinkFileButtonComponent from "./components/linkFileButtonComponent"

CMS.registerEditorComponent(LinkFileComponent);
CMS.registerEditorComponent(LinkFileButtonComponent);


// https://github.com/netlify/netlify-cms/issues/1737 and HELIO-3241
window.CMS_MANUAL_INIT = true;

if (process.env.BRANCH === "preview") {
  console.log("---- USING PREVIEW BACKEND ----")
  CMS.init({
    config: {
      backend: {
        name: 'github',
        repo: 'mlibrary/about-bigten',
        branch: 'preview'
      }
    }
  });
} else {
  CMS.init({
    config: {
      backend: {
        name: 'github',
        repo: 'mlibrary/about-bigten',
        branch: 'main'
      }
    }
  });
}

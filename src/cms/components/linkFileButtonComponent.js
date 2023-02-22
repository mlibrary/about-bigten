const LinkFileButtonComponent = {
    // Widget that allows linking to a file in the Media Gallery,
    // such as a PDF, from the markdown body
    id: "LinkFileButton",
    label: "Link File as Button",
    fields: [
      {name: 'text', label: 'Button Text', widget: 'string'},
      {name: 'file', label: 'File', widget: 'file' }
    ],
    pattern: /^<a href="(.*)">(.*)<\/a>$/,
    fromBlock: function(match) {
      return {
        file: match[1],
        text: match[2]
      };
    },
    toBlock: function({file, text}) {
      return `<a class="btn btn-primary" href="/${file}">${text}</a>`
    },
    toPreview: function({file, text}) {
      return `<a class="btn btn-primary" href="/${file}">${text}</a>`
    }
  }
  
  export default LinkFileButtonComponent
  
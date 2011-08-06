ko.handlebarsTemplateEngine = function () {
  var compiledTemplates = {};

  this['renderTemplate'] = function (templateName, data, helpers) {
    helpers = helpers || {};
    var tmplMarkup = this['getTemplateNode'](templateName);
    var tmpl = compiledTemplates[templateName];
    if (!tmpl) {
      tmpl = Handlebars.compile(tmplMarkup);
    }
    return tmpl(data, helpers);
  },
  this['isTemplateRewritten'] = function (templateName) {
    throw "TODO: Implement isTemplateRewritten for handlebars template engine adapter";
  },
  this['rewriteTemplate'] = function (templateName, rewriterCallback) {
    throw "TODO: Implement rewriteTemplate for handlebars template engine adapter";
  },
  this['createJavaScriptEvaluatorBlock'] = function (script) {
    throw "TODO: Implement createJavaScriptEvaluatorBlock for handlebars template engine adapter";
  }
};

ko.handlebarsTemplateEngine.prototype = new ko.templateEngine();
ko.exportSymbol('ko.handlebarsTemplateEngine', ko.handlebarsTemplateEngine);

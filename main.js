MockStorage = function() {
  var counter = -1;
  return {
    create: function(annotation) {
      console.debug("[Create]", annotation);
      if (typeof annotation.id === 'undefined' || annotation.id === null) {
        annotation.id = ++counter;
      }
      return annotation;
    },

    update: function(annotation) {
      console.debug("[Update]", annotation);
      return annotation;
    },

    'delete': function(annotation) {
      console.debug("[Delete]", annotation);
      return annotation;
    },

    query: function() {
      console.debug("[Query]", annotation);
      return {
        results: []
      };
    },

    configure: function(registry) {
      registry.registerUtility(this, 'storage');
    }
  };
};

var app = new annotator.App();
app.include(annotator.ui.main);
app.include(MockStorage);
app.start().then(function() {
  app.annotations.load();
});

ace.define("ace/mode/aql",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";
    var oop = require("../lib/oop");

    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;


    var MysampleHighlightRules = function() {

	this.$rules = {
"start" : [
   {
      "token" : "constant",
      "regex" : "(^(instance|schema|typeside|pragma|html|md|query|command|mapping|transform|constraints|graph|exec_jdbc|exec_js|exec_cmdline|import_csv|import_jdbc_instance))"
   },
   {
      "token" : "keyword",
      "regex" : "(\\s*identity|literal|sql|schemaOf|typesideOf|toQuery|fromQuery|simple|chase|anonymize|frozen|unit|counit_query|counit|empty|union|coproduct|coproduct_sigma|distinct|eval|coeval|coequalize|src|dst|check|assert_consistent\\s*\\:)"
   },
   {
      "token" : "entity.name",
      "regex" : "(\\s*nodes|edges|entity|entities|foreign_keys|attributes|generators|equations|multi_equations|path_equations|options|functions|constants|types|imports|java_types|java_constants|java_functions\\s*)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\s+sigma|delta|pi|lambda\\s+)"
   },
   {
      "token" : "constant.language",
      "regex" : "(\\s*from|where|exists\\s*)"
   },
   {
      "token" : "comment",
      "regex" : "(//.*)"
   },
   {
      "token" : "string",
      "regex" : "(\\\")",
      "push" : "main__1"
   },
   {
      "token" : "keyword.control",
      "regex" : "(^\\s*[a-z_]*\\s*$)"
   },
   {
      "token" : "string",
      "regex" : "(\\(\\*)",
      "push" : "inside_quotes"
   },
   {
      "token" : ["text", "text", "text", "entity.name.class", "text", "entity.name.class"],
      "regex" : "(\\s*(\\w|\\s)+\\s*)(\\:\\s+)([a-zA-Z,\\s]+)(\\s+\\-\\>)(\\s+[a-zA-Z,\\s]+)"
   },
   {
      "token" : ["entity.name.class", "text", "text"],
      "regex" : "(\\s*[a-zA-Z]*)(\\s*\\-\\>\\s*\\{.*\\})(,|;)"
   },
   {
      defaultToken : "text",
   }
],
"inside_quotes" : [
   {
      "token" : "string",
      "regex" : "(\\*\\))",
      "next" : "pop"
   },
   {
      "token" : "string",
      "regex" : "(\\\")",
      "push" : "inside_quotes__1"
   },
   {
      defaultToken : "text",
   }
],
"inside_quotes__1" : [
   {
      "token" : "string",
      "regex" : "(\\\")",
      "next" : "pop"
   },
   {
      defaultToken : "string",
   }
],
"main__1" : [
   {
      "token" : "string",
      "regex" : "(\\\")",
      "next" : "pop"
   },
   {
      defaultToken : "string",
   }
]
};

	this.normalizeRules();
    };

    oop.inherits(MysampleHighlightRules, TextHighlightRules);

    exports.MysampleHighlightRules = MysampleHighlightRules;

});

(function() {
    window.require(["ace/mode/aql"], function(m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
